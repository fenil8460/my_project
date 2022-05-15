<?php

namespace App\Http\Controllers\patient;

use App\Http\Controllers\Controller;
use App\Models\Activity_log;
use App\Models\Appointment;
use App\Models\Coupon;
use App\Models\Patient;
use App\Models\patient_bill;
use App\Models\Post_dialysis;
use App\Models\Staff;
use App\Models\Pre_dialysis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class PatientBillController extends Controller
{
    use ResponseAPI;
    public $app_id = null;
    public function __construct()
    {
        $this->app_id = request()->route('appointment_id');
    }

    public function stock_used()
    {
        try {
            $data = patient_bill::select('name', 'count', 'selling_price')->where('appointment_id', $this->app_id)->get();
            return [
                'stocks_used' => $data,
            ];
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function patient_info()
    {
        try {
            $id = Appointment::select('patient_id')->where('appointment_id', $this->app_id)->first()->patient_id;
            $p_info = Patient::select('branch_name', 'name',)->where('patient_id', $id)->first();
            $pid = 'PID' . $p_info->branch_name . $id;
            return $patient_data = ['patient_name' => $p_info->name, 'patient_id' => $pid];
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function staff_info()
    {
        try {
            //opening staff name
            $osid = Pre_dialysis::select('technician')->where('appointment_id', $this->app_id)->first()->technician;;
            $osid = preg_replace('/\D/', '', $osid);
            $opening_staff = Staff::where('id', $osid)->select('username')->first()->username;

            //closing staff name
            $csid = Post_dialysis::select('technician')->where('appointment_id', $this->app_id)->first()->technician;
            $csid = preg_replace('/\D/', '', $csid);
            $closing_staff = Staff::where('id', $csid)->select('username')->first()->username;

            return $staff_info = ['opening_staff' => $opening_staff, 'closing_staff' => $closing_staff];
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    public function dialysing_time()
    {
        try {
            $app_time = Appointment::where('appointment_id', $this->app_id)->select('start_time', 'end_time')->get();

            return ['start_time' => $app_time[0]->start_time, 'end_time' => $app_time[0]->end_time];
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    function amount()
    {
        try {

            //for amount due
            //for patient id
            $pid = Appointment::select('patient_id')->where('appointment_id', $this->app_id)->first()->patient_id;
            $total_app = Appointment::select('appointment_id')->where('patient_id', $pid)->get();
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

            $amount_data = Post_dialysis::where('appointment_id', $this->app_id)->select('amount', 'additional_amount', 'mop', 'paid')->first();
            $total_amount = $amount_data->amount + $amount_data->additional_amount;

            return  ['total_amount' => $total_amount, 'mode_of_payment' => $amount_data->mop, 'paid' => $amount_data->paid, 'amount_due' => $pay_due];
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function patient_bill()
    {
        try {
            if ($this->app_id == null || Appointment::find($this->app_id) == null) {
                return response()->json([
                    'message' => 'invalid appointment id',
                ], 404);
            }
            $bill_data = array_merge($this->patient_info(), $this->staff_info(), $this->dialysing_time(), $this->amount(), $this->stock_used());

            if ($bill_data != null) {
                return response()->json([
                    'message' => 'success! , bill fetched',
                    'bill_data' => $bill_data,
                ], 200);
            }

            return response()->json([
                'message' => 'something went wrong , bill might be null',
            ], 400);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function discount_coupon(Request $req, $app_id = null)
    {
        try {

            if ($app_id == null || Appointment::find($app_id) == null) {
                return response()->json([
                    'message' => 'invalid appointment id',
                ], 404);
            }

            if ($req->coupon != null) {
                $pid = Appointment::select('patient_id')->where('appointment_id', $app_id)->first()->patient_id;
                $check_coupon = Coupon::where([['patient_id', $pid], ['code', $req->coupon]])->get();

                if ($check_coupon->count()) {
                    $discount = $check_coupon[0]->amount;

                    return response()->json([
                        'message' => 'coupon code applicable',
                        'code' => $req->coupon,
                        'amount' => $discount,
                    ], 200);
                } else {
                    return response()->json([
                        'message' => 'invalid coupon',
                    ], 404);
                }
            }
            return response()->json([
                'message' => 'coupon filed is required',
            ], 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //payment
    public function bill_payment(Request $req, $app_id = null)
    {
        try {
            if ($app_id == null || Appointment::find($app_id) == null) {
                return response()->json([
                    'message' => 'invalid appointment id',
                ], 404);
            }

            $patient_info = $this->patient_info();

            $check = $this->amount();

            $due_amount = $check['amount_due'];

            $validator = Validator::make($req->all(), [
                'pay' => "required|numeric|min:1|max:$due_amount"
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'validation error',
                    'errors' => $validator->errors(),
                ], 403);
            }

            $discount = 0;
            if ($req->coupon != null) {

                $pid = Appointment::select('patient_id')->where('appointment_id', $app_id)->first()->patient_id;
                $check_coupon = Coupon::where([['patient_id', $pid], ['code', $req->coupon]])->get();

                if ($check_coupon->count()) {
                    $discount = $check_coupon[0]->amount;
                }
            }

            $data = Post_dialysis::where('appointment_id', $this->app_id)->first();
            if ($due_amount > $discount)
                $req->pay = $req->pay + $discount;
            else
                $req->pay = $due_amount;
            $data->paid = $data->paid + $req->pay;
            $updated = $data->update();

            $delete = Coupon::find($pid)->delete();

            if ($updated) {

                $activity_log = new Activity_log();

                $activity_log->log = $patient_info['patient_name'] . " (" . $patient_info['patient_id'] . ") has paid " . $req->pay . " rs and discount = " . $discount;
                $activity_log->action = 'Bill Payment';
                $activity_log->save();

                return response()->json([
                    'message' => 'payment_successful',
                ], 200);
            }

            return response()->json([
                'message' => 'payment failed',
            ], 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
