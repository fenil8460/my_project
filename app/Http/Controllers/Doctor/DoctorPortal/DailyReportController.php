<?php

namespace App\Http\Controllers\doctor\DoctorPortal;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Patient;
use App\Models\Patient_parameter;
use App\Models\Post_dialysis;
use App\Models\Pre_dialysis;
use App\Traits\ResponseAPI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Exception;
use function PHPUnit\Framework\isEmpty;

class DailyReportController extends Controller
{
    use ResponseAPI;
    public function patient_dropdown_with_name_id_branch()
    {
        try {
            $check_branch = explode(',', Auth::user()->branch);
            $doctor_id = Auth::user()->id;

            $patient = Patient::select('patient_id', 'name', 'branch_name')->where([['blocked', 0], ['doctor', $doctor_id]])->whereIn('branch_name', $check_branch)->get();

            $data = [];
            foreach ($patient as $p) {
                $pid = $p->name . " - PID" . $p->branch_name . $p->patient_id;
                $data = [
                    'name' => $p->name,
                    'patient_id' => $pid,
                    'id' => $p->patient_id,
                ];
            }
            if ($patient->count() > 0) {
                return $this->success($data, 200);
            }

            return $this->error('pateint not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    public function show_patient_report($patient_id = null)
    {
        try {
            $doctor_id = Auth::user()->id;

            if (!Patient::where([['patient_id', $patient_id], ['doctor', $doctor_id]])->count()) {
                return $this->error('pateint not found', 404);
            }
            $check_branch = explode(',', Auth::user()->branch);
            $check_patient = Patient::find($patient_id);
            if (in_array($check_patient->branch_name, $check_branch) && !$check_patient->blocked) {
                $app = Appointment::select('appointment_id')->where([['patient_id', $patient_id], ['end_time', "!=", null]])->orderBy('start_time', 'desc')->get();
                $data = [];
                foreach ($app as $a) {
                    $data[] = array("ap_id" => $a->appointment_id, "report_name" => 'Daily_report_APID_' . $a->appointment_id);
                    // $data[]='Daily_report_APID_'.$a->appointment_id;
                }
                if (empty($data)) {
                    return $this->error('not found', 404);
                }
                return $this->success($data, 200);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function dialysis_session_sheet($app_id = null)
    {
        try {

            if (Appointment::where([["appointment_id", $app_id], ['end_time', "!=", null]])->get()->count() == 0) {
                return $this->error('appointment id not found', 404);
            }


            $pid = Appointment::select('patient_id')->find($app_id)['patient_id'];

            //checking patient , that it is related to doctor or not
            $doctor_id = Auth::user()->id;
            $check_patient = Patient::where([['patient_id', $pid], ['doctor', $doctor_id]])->count();
            if (!$check_patient) {
                return $this->error('pateint not found', 404);
            }

            $patient['patient_detail'] = Patient::select('name', 'patient_id', 'branch_name')->find($pid);
            $pre['pre_dialysis'] = Pre_dialysis::find($app_id);
            $post['post_dialysis'] = Post_dialysis::find($app_id);

            $patient_parameter['patient_parameter'] = Patient_parameter::where('appointment_id', $app_id)->get();

            $data = array_merge($patient, $pre, $post, $patient_parameter);
            return $this->success($data, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
