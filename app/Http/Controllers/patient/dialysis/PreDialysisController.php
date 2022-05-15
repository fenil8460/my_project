<?php

namespace App\Http\Controllers\patient\dialysis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Pre_dialysis;
use App\Models\Activity_log;
use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Patient_parameter;
use Illuminate\Support\Facades\DB;
use App\Traits\ResponseAPI;
use Exception;

class PreDialysisController extends Controller
{
    use ResponseAPI;

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


    public function show_stock_alert()
    {
        try {
            $check = DB::table('sm')
                ->where('branch_name', 'PH')
                ->select('product_name', DB::raw('sum(available_count) as s'))
                ->groupBy('product_name')
                ->get();

            $missing_stocks = [];
            foreach ($check as $c) {
                if ($c->s == 0) {
                    array_push($missing_stocks, $c->product_name);
                }
            }

            if ($missing_stocks == null) {
                return response()->json([
                    'message' => 'stocks are availbale',
                ], 200);
            }

            return response()->json([
                'message' => "some stocks are not availbale",
                'data' => $missing_stocks
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    function save_pre_dialysis_from(Request $req, $patient_id = null)
    {
        try {

            if ($patient_id != null && $patient_id > 0) {
                $pid = Patient::select('patient_id', 'name')->where('patient_id', $patient_id)->first();
                if ($pid != null) {
                    $patient_name = $pid->name;
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

            //checking if patient is currently dialysing or not
            if ($pid) {
                $check_appointment = Appointment::where([['patient_id', $pid], ['end_time', null]])->get()->count();
                if ($check_appointment > 0) {
                    return response()->json([
                        'message' => 'this patinet is already dialysing ',
                    ], 403);
                }
            }


            if ($req->has('submitpredialysisform')) {

                //  validation work,

                $rules = [
                    'bp_systolic' => 'required|min:110|max:140|numeric',
                    'bp_diasystolic' => 'required|min:70|max:90|numeric',
                    'heart_rate' => 'required|min:70|max:90|numeric',
                    'weight' => 'required|min:30|max:140|numeric',
                    'spo2' => 'required|min:95|max:100|numeric',
                    'reused_dialyzer' => 'required|min:0|max:10|numeric',
                    'dialyzer' => 'required',
                    'reused_tubing' => 'required|min:0|max:10|numeric',
                    'bp_high' => 'required|min:0|max:1|numeric',
                    'bp_low' => 'required|min:0|max:1|numeric',
                    'nausea' => 'required|min:0|max:1|numeric',
                    'vomiting' => 'required|min:0|max:1|numeric',
                    'short_breath' => 'required|min:0|max:1|numeric',
                    'bleeding' => 'required|min:0|max:1|numeric',
                    'edema' => 'required|min:0|max:1|numeric',
                    'stomach_distend' => 'required|min:0|max:1|numeric',
                    'diarrhea' => 'required|min:0|max:1|numeric',
                    'other' => 'nullable',
                    'machine_id' => 'required',
                    'scheduled_emergency' => 'required',
                    'access_av' => 'required',
                    'remarks' => 'required',
                    'site_condition' => 'required',
                    'explain' => 'nullable',
                    'private' => 'nullable',
                ];
                //end validadtion

                $validator = Validator::make($req->all(), $rules);
                if ($validator->fails()) {
                    return $this->error($validator->errors());
                }

                // saving appointments
                $appointment = new Appointment();
                $appointment->patient_id = $pid;
                $appointment->start_time = date("Y-m-d H:i:s");
                $appointment->end_time = null;
                $appointment->record_type = "online";
                $a = $appointment->save();


                // saving patinet pre dialysis form
                if ($a) {

                    $pre_dialysis = new Pre_dialysis();
                    $pre_dialysis->appointment_id = $appointment->appointment_id;
                    $pre_dialysis->bp_systolic = $req->bp_systolic;
                    $pre_dialysis->bp_diasystolic = $req->bp_diasystolic;
                    $pre_dialysis->heart_rate = $req->heart_rate;
                    $pre_dialysis->weight = $req->weight;
                    $pre_dialysis->spo2 = $req->spo2;
                    $pre_dialysis->reused_dialyzer = $req->reused_dialyzer;
                    $pre_dialysis->dialyzer = $req->dialyzer;
                    $pre_dialysis->reused_tubing = $req->reused_tubing;
                    $pre_dialysis->bp_high = $req->bp_high;
                    $pre_dialysis->bp_low = $req->bp_low;
                    $pre_dialysis->nausea = $req->nausea;
                    $pre_dialysis->vomiting = $req->vomiting;
                    $pre_dialysis->short_breath = $req->short_breath;
                    $pre_dialysis->bleeding = $req->bleeding;
                    $pre_dialysis->edema = $req->edema;
                    $pre_dialysis->stomach_distend = $req->stomach_distend;
                    $pre_dialysis->diarrhea = $req->diarrhea;
                    if ($req->other == null) {
                        $pre_dialysis->other = ' ';
                    } else {
                        $pre_dialysis->other = $req->other;
                    }
                    $technician = 'SID' . Auth::user()->branch . Auth::user()->id;
                    $pre_dialysis->technician = $technician;
                    $pre_dialysis->machine_id = $req->machine_id;
                    $pre_dialysis->scheduled_emergency = $req->scheduled_emergency;
                    $pre_dialysis->access_av = $req->access_av;
                    $pre_dialysis->remarks = $req->remarks;
                    $pre_dialysis->site_condition = $req->site_condition;
                    if ($req->explain == null) {
                        $pre_dialysis->explain = ' ';
                    } else {
                        $pre_dialysis->explain = $req->explain;
                    }
                    if ($req->private == "yes")
                        $pre_dialysis->private = "yes";
                    else
                        $pre_dialysis->private = "no";

                    $pre = $pre_dialysis->save();


                    // saving patient default parameters in pataient parameter table
                    if ($pre) {

                        for ($x = 1; $x <= 7; $x++) {
                            $patient_parameter = DB::table('patient_parameter')->insert([
                                'id' => $x,
                                'appointment_id' => $appointment->appointment_id,
                                'time' => " ",
                                'bps' => 0,
                                'bpd' => 0,
                                'pulse' => 0,
                                'uf_rate' => 0,
                                'uf_volume' => 0,
                                'bf_rate' => 0,
                                'ap' => 0,
                                'vp' => 0,
                                'tmp' => 0,
                                'kv/t' => 0,
                                'actions' => 0,
                            ]);
                        }
                    } else { // pre dialysis from submit failure
                        return response()->json([
                            'error' => "unable to save predialysis form  ",
                        ], 400);
                    }
                } else { //on failure of appointment in appointment table
                    return response()->json([
                        'error' => "unable to make appointmnet ",
                    ], 400);
                }


                // on saving appointment , pre_dialysis , default 7 patient paraments
                //return success response
                if ($a && $pre && $patient_parameter) {

                    $who = Auth::user();
                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . $this->who_has_performed() . '  has filled pre dialysis form : patient - ' . $patient_name;
                    $activity_log->action = 'Filled pre dialysis form';
                    $activity_log->save();

                    return response()->json([
                        'message' => 'pre dialysis form saved',
                    ], 200);
                }
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
