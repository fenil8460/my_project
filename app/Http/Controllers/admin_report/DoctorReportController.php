<?php

namespace App\Http\Controllers\admin_report;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Patient;
use App\Models\Pre_dialysis;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class DoctorReportController extends Controller
{
    //doctor reports
    //doctor report
    use ResponseAPI;
    function doctor_report(Request $req)
    {
        try {
            $next_month = Carbon::now()->startOfMonth()->addMonth(1)->format('Y-m');
            if ($req->date == null) {
                $start_date = date('Y-m-01 00:00:00');
                $end_date = date('Y-m-d 23:59:59');
            } else {
                $validator = Validator::make($req->all(), [
                    'date' => "required|date_format:Y-m|before:$next_month",
                ]);

                if ($validator->fails()) {
                    return response()->json([
                        'message' => 'validation error',
                        'error' => $validator->errors()
                    ], 403);
                }

                $start_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->firstOfMonth()
                    ->format('Y-m-d 00:00:00');
                $end_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->lastOfMonth()
                    ->format('Y-m-d 23:59:59');
            }

            $doctor_details = Doctor::groupBy('doctor.id')->get();

            $data = [];
            foreach ($doctor_details as $dd) {
                $no_of_patient = Patient::where('patient.doctor', $dd->id)
                    ->select('patient_id')
                    ->get();

                $patient_id_array = [];
                foreach ($no_of_patient as $nop)
                    array_push($patient_id_array, $nop->patient_id);


                $no_of_dialysis = Appointment::whereIn('patient_id', $patient_id_array)
                    ->where('end_time', '!=', null)
                    ->whereDate('start_time', '<=', $end_date)
                    ->whereDate('start_time', '>=', $start_date)
                    ->count();

                $no_of_new_patient_count = 0;
                foreach ($patient_id_array as $pia) {
                    $is_patient_first_time = Appointment::where('patient_id', $pia)->whereDate('start_time', '<=', $end_date)->whereDate('start_time', '>=', $start_date)->count();
                    if ($is_patient_first_time == 1)
                        $no_of_new_patient_count++;
                }


                $no_of_emergency_patient = Appointment::whereIn('patient_id', $patient_id_array)
                    ->join('pre_dialysis', 'pre_dialysis.appointment_id', 'appointments.appointment_id')
                    ->where('scheduled_emergency', 'emergency')
                    ->whereDate('start_time', '<=', $end_date)
                    ->whereDate('start_time', '>=', $start_date)
                    ->count();

                $no_of_scheduled_patient = Appointment::whereIn('patient_id', $patient_id_array)
                    ->join('pre_dialysis', 'pre_dialysis.appointment_id', 'appointments.appointment_id')
                    ->where('scheduled_emergency', 'scheduled')
                    ->whereDate('start_time', '<=', $end_date)
                    ->whereDate('start_time', '>=', $start_date)
                    ->count();

                $new_patient_cost = $no_of_new_patient_count * $dd->new_patient;
                $emergency_patient_cost = $no_of_emergency_patient * $dd->emergency_pay;
                $scheduled_patient_cost = $no_of_scheduled_patient * $dd->scheduled_pay;

                if ($dd->perdmy == 'month')
                    $doctor_pay = $dd->amount;
                elseif ($dd->perdmy == 'year')
                    $doctor_pay = $dd->amount / 12;
                else
                    $doctor_pay = $new_patient_cost + $emergency_patient_cost + $scheduled_patient_cost;


                $data[] = [
                    'hospital' => $dd->branch,
                    'doctor_name' => $dd->username,
                    'no_of_patient' => $no_of_patient->count(),
                    'no_of_dialysis' => $no_of_dialysis,
                    'new_patient' => $no_of_new_patient_count,
                    'no_of_emergency_patient' => $no_of_emergency_patient,
                    'no_of_scheduled_patient' => $no_of_scheduled_patient,
                    'new_patient_cost' => $new_patient_cost,
                    'emergency_patient_cost' => $emergency_patient_cost,
                    'scheduled_patient_cost' => $scheduled_patient_cost,
                    'doctor_pay' => $doctor_pay
                ];
            }

            return $this->success($data, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
