<?php

namespace App\Http\Controllers\patient\dialysis;

use App\Http\Controllers\Controller;
use App\Models\Activity_log;
use App\Models\Appointment;
use App\Models\Centre;
use App\Models\Patient;
use App\Models\Patient_Bill;
use App\Models\Post_dialysis;
use App\Models\Pre_dialysis;
use App\Models\StockMaintenance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Traits\ResponseAPI;
use Exception;


class PostDialysisController extends Controller
{
    use ResponseAPI;

    public $branch_name;
    public function __construct()
    {
        // $this->branch_name = Auth::user()->branch;
        $this->middleware(function ($request, $next) {
            $this->branch_name = Auth::user()->branch;
            return $next($request);
        });
    }

    public function is_private_patient($app_id)
    {
        try {
            $is_pativate = Pre_dialysis::where('appointment_id', $app_id)->first()->private;
            if ($is_pativate == 'yes')
                return 1;
            else
                return 0;
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function patient_id($app_id)
    {
        try {
            $pid = Appointment::where('appointment_id', $app_id)->first()->patient_id;
            return $pid;
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function patient_name($app_id)
    {
        try {
            $pid = Appointment::where('appointment_id', $app_id)->first()->patient_id;
            $patient_name = Patient::where('patient_id', $pid)->first()->name;
            return $patient_name;
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    function who_has_performed()
    {
        try {
            $who = Auth::user();
            $check_user = substr($who->profile_pic, 0, 3);
            if ($check_user == 'SID') {
                return ' (SID)';
            } elseif ($check_user == 'MID') {
                return ' (MID)';
            } elseif ($check_user == 'AID') {
                return ' (AID)';
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    public function show_stocks_related_to_branch()
    {
        try {


            $check_centre = Centre::where('code', $this->branch_name)->get()->count();

            if ($check_centre == 0) {
                return response()->json([
                    'message' => 'invalid branch name',
                ], 400);
            }

            // consumables
            $sc = StockMaintenance::select('product_name', 'brand')->where([['branch_name', $this->branch_name], ['category', 'consumable']])->distinct()->groupBy('product_name')->get();
            foreach ($sc as $s_c) {
                $brand = StockMaintenance::select('brand as brand_name', DB::raw('sum(available_count) as total'))->distinct()->groupBy('brand')->where([['product_name', $s_c->product_name], ['branch_name', $this->branch_name]])->get();
                $stock_consumable[] = [
                    "product" => $s_c->product_name,
                    'brand' => $brand,
                ];
            }

            // pharmaceutical
            $sp = StockMaintenance::select('product_name', 'brand')->where([['branch_name', $this->branch_name], ['category', 'pharmaceutical']])->distinct()->groupBy('product_name')->get();
            foreach ($sp as $s_p) {
                $brand = StockMaintenance::select('brand as brand_name', DB::raw('sum(available_count) as total'))->distinct()->groupBy('brand')->where([['product_name', $s_p->product_name], ['branch_name', $this->branch_name]])->get();
                $stock_pharmaceutical[] = [
                    "product" => $s_p->product_name,
                    'brand' => $brand,
                ];
            }


            if ($stock_pharmaceutical == null || $stock_consumable == null) {
                return response()->json([
                    'message' => 'stocks not found',
                ], 400);
            }

            return response()->json([
                'message' => 'available stock ',
                'consumable_stock_data' => $stock_consumable,
                'pharmaceutical_stock_data' => $stock_pharmaceutical,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //to get crrent appointment id of dialysisng patient by using patient id
    public function get_appointment_id($pid = null)
    {

        try {
            if ($pid != null && $pid > 0) {
                $pid = Patient::select('patient_id')->where('patient_id', $pid)->first();
                if ($pid != null) {
                    $pid = $pid['patient_id'];
                } else {
                    return response()->json([
                        'message' => 'invalid patient id'
                    ], 404);
                }
            } else {
                return response()->json([
                    'message' => 'invalid patient id'
                ], 404);
            }

            //checking if patient is currently dialysing or not if it is he/she is dialysis then return appointment id
            if ($pid) {
                $check_appointment = Appointment::where([['patient_id', $pid], ['end_time', null]])->orderBy('appointment_id', 'desc')->first();
                if ($check_appointment != null) {
                    return response()->json([
                        'message' => 'appoointment_fetched',
                        'appointment_id' => $check_appointment->appointment_id
                    ], 200);
                } else {
                    return response()->json([
                        'message' => 'no on going appointment is found',
                    ], 404);
                }
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function save_post_dialysis_form(Request $req, $appointment_id = null)
    {
        try {

            if ($appointment_id == null || $appointment_id < 0 || !is_numeric($appointment_id)) {
                return response()->json([
                    'message' => 'appointment id is not valid',
                ], 400);
            }
            $check_appointment = Appointment::where([['appointment_id', $appointment_id], ['end_time', null]])->get()->count();
            if ($check_appointment == 0) {
                return response()->json([
                    'message' => 'No appointment found'
                ], 404);
            }
            $weight = Pre_dialysis::find($appointment_id)->select('weight')->first()->weight;

            $validator = Validator::make($req->data['basic'], [
                'bp_systolic' => 'required|numeric|min:110:|max:140',
                'bp_diasystolic' => 'required|numeric|min:70|max:90',
                'heart_rate' => 'required|numeric|min:60|max:100',
                'weight' => 'required|max:' . $weight . '|numeric', //check this
                'eh' => 'required',
                'mode_of_transport' => 'required',
                'bp_high' => 'required|numeric|min:0|max|1',
                'bp_low' => 'required|numeric|min:0|max:1',
                'nausea' => 'required|numeric|min:0|max:1',
                'vomiting' => 'required|numeric|min:0|max:1',
                'short_breath' => 'required|numeric|min:0|max:1',
                'bleeding' => 'required|numeric|min:0|max:1',
                'edema' => 'required|numeric|min:0|max:1',
                'hypoglycemia' => 'required|numeric|min:0|max:1',
                'diarrhea' => 'required|numeric|min:0|max:1',
                'orthostatic_hypotension' => 'required|numeric|min:0|max:1',
                'dizziness' => 'required|numeric|min:0|max:1',
                'other' => 'nullable', //check
                // 'amount'=>'required',
                // 'additional_amount'=>'required',
                'remarks' => 'nullable', //check
                'early_discharge' => 'required|numeric:min:0|max:1',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $post_dialysis = new Post_dialysis();

            $post_dialysis->appointment_id = $appointment_id;
            $post_dialysis->bp_systolic = $req->data['basic']['bp_systolic'];
            $post_dialysis->bp_diasystolic = $req->data['basic']['bp_diasystolic'];
            $post_dialysis->heart_rate = $req->data['basic']['heart_rate'];
            $post_dialysis->weight = $req->data['basic']['weight'];
            $post_dialysis->eh = $req->data['basic']['eh'];
            $post_dialysis->mode_of_transport = $req->data['basic']['mode_of_transport'];
            $post_dialysis->bp_high = $req->data['basic']['bp_high'];
            $post_dialysis->bp_low = $req->data['basic']['bp_low'];
            $post_dialysis->nausea = $req->data['basic']['nausea'];
            $post_dialysis->vomiting = $req->data['basic']['vomiting'];
            $post_dialysis->short_breath = $req->data['basic']['short_breath'];
            $post_dialysis->bleeding = $req->data['basic']['bleeding'];
            $post_dialysis->edema = $req->data['basic']['edema'];
            $post_dialysis->hypoglycemia = $req->data['basic']['hypoglycemia'];
            $post_dialysis->diarrhea = $req->data['basic']['diarrhea'];
            $post_dialysis->orthostatic_hypotension = $req->data['basic']['orthostatic_hypotension'];
            $post_dialysis->dizziness = $req->data['basic']['dizziness'];
            $post_dialysis->other = ($req->data['basic']['other'] == null) ? ' ' : $req->data['basic']['other'];


            // stock validation
            $failed_consumables = [];
            foreach ($req->data['consumables'] as $key => $val) {
                $stock_count = StockMaintenance::where([['branch_name', $this->branch_name], ['product_name', $key], ['brand', $val['brand']]])->sum('available_count');

                $check = ($stock_count >= $val['count']) ? 1 : 0;

                if (!$check) {
                    $failed_consumables[] = $key;
                }
            }

            $failed_pharmaceuticals = [];
            foreach ($req->data['pharmaceuticals'] as $key => $val) {
                $stock_count = StockMaintenance::where([['branch_name', $this->branch_name], ['product_name', $key], ['brand', $val['brand']]])->sum('available_count');

                $check = ($stock_count >= $val['count']) ? 1 : 0;

                if (!$check) {
                    $failed_pharmaceuticals[] = $key;
                }
            }

            if ($failed_pharmaceuticals != null && $failed_consumables != null) {
                return response()->json([
                    'message' => 'something went wrong',
                    'failed' => [
                        'pharmaceuticals' => $failed_pharmaceuticals,
                        'consumables' => $failed_consumables
                    ]
                ], 404);
            } elseif ($failed_pharmaceuticals != null) {
                return response()->json([
                    'message' => 'something went wrong',
                    'failed' => [
                        'pharmaceuticals' => $failed_pharmaceuticals,
                    ]
                ], 404);
            } elseif ($failed_consumables != null) {
                return response()->json([
                    'message' => 'something went wrong',
                    'failed' => [
                        'consumables' => $failed_consumables
                    ]
                ], 404);
            }
            //end stock validation


            // saving consumables in patient bill

            foreach ($req->data['consumables'] as $key => $val) {

                $patient_bill = new Patient_Bill();

                if ($this->is_private_patient($appointment_id)) {
                    $sp_and_cp = StockMaintenance::select('calculated_cost_price', 'private_selling_price')->where([['product_name', $key], ['brand', $val['brand']], ['available_count', '>=', $val['count']], ['branch_name', $this->branch_name]])->first();
                    $cp = $sp_and_cp->calculated_cost_price;
                    $sp = $sp_and_cp->private_selling_price;
                } else {
                    $sp_and_cp = StockMaintenance::select('calculated_cost_price', 'mjpjay_selling_price')->where([['product_name', $key], ['brand', $val['brand']], ['available_count', '>=', $val['count']], ['branch_name', $this->branch_name]])->first();
                    $cp = $sp_and_cp->calculated_cost_price;
                    $sp = $sp_and_cp->mjpjay_selling_price;
                }

                $patient_bill->appointment_id = $appointment_id;
                $patient_bill->name = $key;
                $patient_bill->brand = $val['brand'];
                $patient_bill->count = $val['count'];
                $patient_bill->selling_price = $sp;
                $patient_bill->cost_price = $cp;

                $patient_bill->save();
            }

            //end saving consumables in patient bill



            // saving pharmaceuticals in patient bill

            foreach ($req->data['pharmaceuticals'] as $key => $val) {

                $patient_bill = new Patient_Bill();

                if ($this->is_private_patient($appointment_id)) {
                    $sp_and_cp = StockMaintenance::select('calculated_cost_price', 'private_selling_price')->where([['product_name', $key], ['brand', $val['brand']], ['available_count', '>=', $val['count']], ['branch_name', $this->branch_name]])->first();
                    $cp = $sp_and_cp->calculated_cost_price;
                    $sp = $sp_and_cp->private_selling_price;
                } else {
                    $sp_and_cp = StockMaintenance::select('calculated_cost_price', 'mjpjay_selling_price')->where([['product_name', $key], ['brand', $val['brand']], ['available_count', '>=', $val['count']], ['branch_name', $this->branch_name]])->first();
                    $cp = $sp_and_cp->calculated_cost_price;
                    $sp = $sp_and_cp->mjpjay_selling_price;
                }

                $patient_bill->appointment_id = $appointment_id;
                $patient_bill->name = $key;
                $patient_bill->brand = $val['brand'];
                $patient_bill->count = $val['count'];
                $patient_bill->selling_price = $sp;
                $patient_bill->cost_price = $cp;

                $patient_bill->save();
            }


            //end saving pharmaceuticals in patient bill




            // amount and additonal amount work

            //charges
            $centre_charge = Centre::where('code', $this->branch_name)->first();

            // reg fee
            $is_patient_first_time = Appointment::where('patient_id', $this->patient_id($appointment_id))->count();
            $reg_fee = 0;
            if ($is_patient_first_time == 1)
                $reg_fee = $centre_charge->registration_fee;


            //  fee
            if ($this->is_private_patient($appointment_id)) {   //if yes

                $scheduled_emergency = Pre_dialysis::where('appointment_id', $appointment_id)->first()->scheduled_emergency;

                if ($scheduled_emergency == 'scheduled')
                    $fee = $centre_charge->normal_fee;
                else
                    $fee = $centre_charge->emergency_fee;
            } else {

                $scheduled_emergency = Pre_dialysis::where('appointment_id', $appointment_id)->first()->scheduled_emergency;

                if ($scheduled_emergency == 'scheduled')
                    $fee = $centre_charge->m_scheduled;
                else
                    $fee = $centre_charge->m_emergency;
            }


            // extra hour
            if ($this->is_private_patient($appointment_id))   //if yes
                $extra_hour_fee = $centre_charge->per_hour_fee * $req->data['basic']['eh'];
            else
                $extra_hour_fee = $centre_charge->m_eh * $req->data['basic']['eh'];


            // total selling price
            $stock = Patient_Bill::select('selling_price', 'count')->where('appointment_id', $appointment_id)->get();
            $stock_amount = 0;
            foreach ($stock as $val) {
                $stock_amount += $val->selling_price * $val->count;
            }


            //total amount
            $total_amount = $extra_hour_fee + $fee;
            $total_additional_amount = $stock_amount + $reg_fee;

            //end amount and additonal amount work


            $post_dialysis->amount = $total_amount;
            $post_dialysis->additional_amount = $total_additional_amount;
            $post_dialysis->paid = '0';
            $post_dialysis->mop = ' ';
            $technician = 'SID' . Auth::user()->branch . Auth::user()->id;
            $post_dialysis->technician = $technician;
            $post_dialysis->remarks = ($req->data['basic']['remarks'] == null) ? ' ' : $req->data['basic']['remarks'];
            $post_dialysis->early_discharge = $req->data['basic']['early_discharge'];
            $saved = $post_dialysis->save();

            //stock removing
            foreach ($req->data['pharmaceuticals'] as $key => $val) {
                $to_remove = $val['count'];
                $remove_stock = StockMaintenance::where([['branch_name', $this->branch_name], ['product_name', $key], ['brand', $val['brand']]])->get();
                foreach ($remove_stock as $rs) {
                    if ($rs->available_count == 0) {
                        continue;
                    }
                    if ($to_remove <= $rs->available_count) {
                        $rs->available_count = $rs->available_count - $to_remove;
                        $rs->update();
                        break;
                    } elseif ($to_remove >= $rs->available_count) {
                        $temp_count = $rs->available_count;
                        $rs->available_count = 0;
                        $rs->update();
                        $to_remove -= $temp_count;
                    }
                }
            }

            foreach ($req->data['consumables'] as $key => $val) {
                $to_remove = $val['count'];
                $remove_stock = StockMaintenance::where([['branch_name', $this->branch_name], ['product_name', $key], ['brand', $val['brand']]])->get();
                foreach ($remove_stock as $rs) {
                    if ($rs->available_count == 0) {
                        continue;
                    }
                    if ($to_remove <= $rs->available_count) {
                        $rs->available_count = $rs->available_count - $to_remove;
                        $rs->update();
                        break;
                    } elseif ($to_remove >= $rs->available_count) {
                        $temp_count = $rs->available_count;
                        $rs->available_count = 0;
                        $rs->update();
                        $to_remove -= $temp_count;
                    }
                }
            }

            // end stock removing

            if ($saved) {
                $app = Appointment::where('appointment_id', $appointment_id)->first();
                $app->end_time = date('Y-m-d H:i:s');
                $app->update();

                $who = Auth::user();
                $activity_log = new Activity_log();
                $activity_log->log = $who->username . $this->who_has_performed() . '  has filled post dialysis from : patient - ' . $this->patient_name($appointment_id);
                $activity_log->action = 'Filled post dialysis form';
                $activity_log->save();

                return response()->json([
                    'message' => 'post dialysis form saved'
                ], 200);
            }

            return $this->success('success');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
