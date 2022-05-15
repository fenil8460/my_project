<?php


namespace App\Http\Controllers\statistics;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Staff;
use App\Models\post_dialysis;
use Carbon\Carbon;
use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\feedback;
use  App\Models\patient_bill;
use App\Models\StockMaintenance;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class StaffInfoController extends Controller
{
    use ResponseAPI;
    public function getStaffInfo(Request $req)
    {
        try {
            $staff_info1 = DB::table('post_dialysis')->join('patient_bill', 'patient_bill.appointment_id', '=', 'post_dialysis.appointment_id')->join('feedback', 'feedback.ap_id', '=', 'post_dialysis.appointment_id')->get();

            $staff_info2 = DB::table('staff')->join('sm', 'sm.branch_name', '=', 'staff.branch')->get();

            $staff_info = $staff_info1->merge($staff_info2);

            return response()->json(['data' => $staff_info], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function getStaffInfoByDate(Request $req)
    {

        try {
            $validator = Validator::make($req->all(), [
                "date" => "required"
            ]);

            foreach ($validator->messages()->getMessages() as $field_name => $messages) {
                foreach ($messages as $message) {
                    return response()->json(['message' => $message], 200);
                }
            }

            Carbon::parse($req->date)->toDatetimeString();



            $staff_info1 = DB::table('post_dialysis')->join('patient_bill', 'patient_bill.appointment_id', '=', 'post_dialysis.appointment_id')->join('feedback', 'feedback.ap_id', '=', 'post_dialysis.appointment_id')->get();

            $staff_info2 = DB::table('staff')->whereDate('sm.date', '>=', $req->date)->join('sm', 'sm.branch_name', '=', 'staff.branch')->get();

            $staff_info = $staff_info1->merge($staff_info2);

            if ($staff_info != '[]') {
                return response()->json(['data' => $staff_info], 200);
            } else {
                return response()->json(['message' => 'No record found'], 404);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
