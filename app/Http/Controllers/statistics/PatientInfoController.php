<?php

namespace App\Http\Controllers\statistics;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Patient;
use App\Models\Centre;
use App\Models\Manager;
use App\Models\Patient_parameter;
use App\Models\Pre_dialysis;
use App\Models\Post_dialysis;
use App\Models\Staff;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Traits\ResponseAPI;
use Exception;

class PatientInfoController extends Controller
{
    use ResponseAPI;
    public function stats_for_table()
    {

        try {

            $patient = Patient::withCount('appointments')->orderBy('appointments_count', 'desc')->get();
            // return "435";
            foreach ($patient as $p) {
                // return $p->branch_name;
                $centre = Centre::where('code', $p->branch_name)->first();

                if ($centre == null) {
                    $centre = " ";
                } else {
                    $centre = $centre->centre_name;
                }


                $data[] = [
                    'name' => $p->name,
                    'branch_name' => $centre,
                    'dialysis_count' => $p->appointments_count,
                    'p_id' => $p->patient_id,
                    'patinet_id' => 'PID' . $p->branch_name . $p->patient_id,
                    'avrage_dialysis_per_month' => round($p->appointments_count / 12, 2),
                ];
            }

            if (is_null($data)) {
                return response()->json([
                    'message' => 'no data found',
                ], 400);
            }

            return response()->json([
                'message' => 'success , data fetched',
                'data' => $data,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function patient_report($pid = null)
    {
        try {

            if (Patient::where('patient_id', $pid)->get()->count() == 0) {
                return response()->json([
                    'message' => 'Patient not found',
                ], 404);
            }

            function amount($pid)
            {

                //for amount due
                //for patient id
                // $pid = Appointment::select('patient_id')->where('appointment_id',$this->app_id)->first()->patient_id;
                $total_app = Appointment::select('appointment_id')->where('patient_id', $pid)->get();
                $last_app = Appointment::select('appointment_id')->where('patient_id', $pid)->orderBy('appointment_id', 'desc')->first()->appointment_id;
                $apps = [];
                foreach ($total_app as $ta) {
                    array_push($apps, $ta->appointment_id);
                }



                $check_due = Post_dialysis::whereIn('appointment_id', $apps)->select(DB::raw("SUM(amount) as amount"), DB::raw("SUM(additional_amount) as additional_amount"), DB::raw("SUM(paid) as paid"))->get();
                $amount_history_sum = $check_due[0]->additional_amount + $check_due[0]->amount;
                $paid_history_sum = $check_due[0]->paid;

                if ($amount_history_sum >= $paid_history_sum) {
                    $pay_due = $amount_history_sum - $paid_history_sum;
                }
                //end due amount woek

                $amount_data = Post_dialysis::where('appointment_id', $last_app)->select('paid')->first();

                return ['paid' => $amount_data->paid, 'amount_due' => $pay_due];
            }



            $patient = Patient::select('name', 'email', 'phone_number', 'age', 'address')->where('patient_id', $pid)->first();

            $amount = amount($pid);

            $patient_details['patient_details'] = [
                'name' => $patient->name,
                'email' => $patient->email,
                'phone_number' => $patient->phone_number,
                'age' => $patient->age,
                'address' => $patient->address,
                'paid' => $amount['paid'],
                'due' => $amount['amount_due'],
            ];


            $app['appointments'] = Appointment::select('appointment_id', 'start_time')->where([['patient_id', $pid], ['end_time', "!=", null]])->orderBy('start_time', 'desc')->get();

            $data = array_merge($patient_details, $app);
            return response()->json([
                'data' => $data,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }




    public function dialysis_session_sheet($app_id = null)
    {
        try {

            if (Appointment::where([["appointment_id", $app_id], ['end_time', "!=", null]])->get()->count() == 0) {
                return response()->json([
                    'message' => 'appointment id not found',
                ], 404);
            }


            $pid = Appointment::select('patient_id')->find($app_id)['patient_id'];
            $patient['patient_detail'] = Patient::select('name')->find($pid);
            $pre['pre_dialysis'] = Pre_dialysis::find($app_id);
            $post['post_dialysis'] = Post_dialysis::find($app_id);

            $patient_parameter['patient_parameter'] = Patient_parameter::where('appointment_id', $app_id)->get();

            $data = array_merge($patient, $pre, $post, $patient_parameter);

            return response()->json([
                'message' => 'dialysis sheet fetched',
                'data' => $data,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function current_dialysing_patient()
    {
        try {

            $patient_details = DB::table('appointments')
                ->join('patient', 'patient.patient_id', '=', 'appointments.patient_id')
                ->join('centre', 'centre.code', '=', 'patient.branch_name')
                ->join('pre_dialysis', 'pre_dialysis.appointment_id', '=', 'appointments.appointment_id')
                ->where('end_time', null)
                ->select('appointments.start_time', 'appointments.appointment_id', 'pre_dialysis.technician', 'patient.branch_name', 'patient.patient_id', 'patient.name as patient_name')
                ->get();

            $data = [];
            foreach ($patient_details as $a) {
                $pid['pid'] = 'PID' . $a->branch_name . $a->patient_id;
                $str = $a->technician;
                $w = substr($str, 0, 3);
                if ($w == 'MID') {
                    preg_match_all('!\d+!', $str, $matches);
                    $who['staff'] = Manager::where('id', $matches)->select('username')->first()->username;
                } elseif ($w == 'SID') {
                    preg_match_all('!\d+!', $str, $matches);
                    $who['staff'] = Staff::where('id', $matches)->select('username')->first()->username;
                }
                $bn['branch_name'] = Centre::where('code', $a->branch_name)->select('centre_name')->first()['centre_name'];
                $x = (array)$a;
                unset($x['patient_id']);
                unset($x['appointment_id']);
                unset($x['technician']);
                array_push($data, array_merge($who, $pid, $bn, $x));
            }

            if ($data == null) {
                return response()->json([
                    'message' => "no data found",
                ], 400);
            }
            return response()->json([
                'message' => 'dialysing patient fetched ',
                'data' => $data,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
