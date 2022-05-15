<?php

namespace App\Http\Controllers\patient\dialysis;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Patient;
use App\Models\Post_dialysis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Traits\ResponseAPI;
use Exception;

class PatientDetailsController extends Controller

{
    use ResponseAPI;

    function amount($patient_id)
    {
        try {

            $total_app = Appointment::select('appointment_id')->where('patient_id', $patient_id)->get();
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

            return $this->success($pay_due);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    function patient_details($patient_id = null)
    {
        try {
            // return 45;
            $check_patient = Patient::where([['patient_id', $patient_id], ['blocked', 0]])->count();
            if ($patient_id == null || !$check_patient) {
                return $this->error('patient not fount',404);
            }

            $amount_due = ['amount_due' => $this->amount($patient_id)];

            $details = Patient::select('name', 'age', 'gender', 'phone_number', 'address')->where('patient_id', $patient_id)->first();

            $pid = ['patient_id' => 'PID' . Auth::user()->branch . $patient_id];

            is_array(json_decode($details, true));
            $data = array_merge(json_decode($details, true), $pid, $amount_due);

            $success['message'] = 'patient details fetched';
            $success['data'] = $data;
            return $this->success($success);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
