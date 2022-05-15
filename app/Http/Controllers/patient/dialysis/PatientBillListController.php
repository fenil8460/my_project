<?php

namespace App\Http\Controllers\patient\dialysis;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\ResponseAPI;
use Exception;

class PatientBillListController extends Controller
{
    use ResponseAPI;
    function patient_bill_list($patient_id = null)
    {

        try {
            //checking patient , that it is related to staff or not
            $staff_branch = Auth::user()->branch;
            $check_patient = Patient::where([['patient_id', $patient_id], ['branch_name', $staff_branch]])->count();

            if ($patient_id == null || !$check_patient) {
                return $this->error('patient not fount');
            }

            $bill_list = Appointment::where('patient_id', $patient_id)->select('end_time', 'appointment_id')->get();

            if ($bill_list->count() > 0) {
                $success['message'] = 'bill list fetched';
                $success['data'] = $bill_list;
                return $this->success($success);
            }

            return $this->error('no bill found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
