<?php

namespace App\Http\Controllers\patient\dialysis;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Patient;
use App\Models\Patient_parameter;
use App\Models\Post_dialysis;
use App\Models\Pre_dialysis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\ResponseAPI;
use Exception;

class DialysisSessionSheetController extends Controller
{
    use ResponseAPI;

    public function dialysis_session_sheet($app_id = null)
    {
        try {

            if (Appointment::where([["appointment_id", $app_id], ['end_time', "!=", null]])->get()->count() == 0) {
                return $this->error('appointment id not found');
            }


            $pid = Appointment::select('patient_id')->find($app_id)['patient_id'];

            //checking patient , that it is related to staff or not
            $staff_branch = Auth::user()->branch;
            $check_patient = Patient::where([['patient_id', $pid], ['branch_name', $staff_branch]])->count();

            if (!$check_patient) {
                return $this->error('pateint not found');
            }

            $patient['patient_detail'] = Patient::select('name', 'patient_id', 'branch_name')->find($pid);
            $pre['pre_dialysis'] = Pre_dialysis::find($app_id);
            $post['post_dialysis'] = Post_dialysis::find($app_id);

            $patient_parameter['patient_parameter'] = Patient_parameter::where('appointment_id', $app_id)->get();

            $data = array_merge($patient, $pre, $post, $patient_parameter);
            $success['message'] = 'dialysis sheet fetched';
            $success['data'] = $data;
            return $this->success($success);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
