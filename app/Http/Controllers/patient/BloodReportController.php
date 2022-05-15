<?php

namespace App\Http\Controllers\patient;

use App\Http\Controllers\Controller;
use App\Models\Activity_log;
use App\Models\Blood_Report;
use App\Models\Patient;
use App\Models\Patient_Report;
use App\Models\Renal_Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

// use Carbon\Carbon;

use function PHPUnit\Framework\isEmpty;

class BloodReportController extends Controller
{
    use ResponseAPI;

    //function for getting , who has performed this action
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




    function blood_report(Request $req)
    {
        try {

            if (Patient::where("patient_id", $req->patient_id)->get()->count() == 0) {
                return response()->json([
                    'message' => "error , patient not found",
                ], 403);
            }

            $patient_name = Patient::find($req->patient_id)->first()->name;

            if ($req->has('blood_report')) {

                $rules = [
                    // 'report_date'=>'required',
                    'patient_id' => 'required|numeric',
                    'haemoglobin' => 'required|min:70|max:90|numeric',
                    'rbc' => 'required|min:70|max:90|numeric',
                    'pcv' => 'required',
                    'corp_volume' => 'required|min:70|max:90|numeric',
                    'corp_hb' => 'required|min:70|max:90|numeric',
                    'corp_hb_conc' => 'required|min:70|max:90|numeric',
                    'platelet' => 'required|min:70|max:90|numeric',
                    'rdw' => 'required|min:70|max:90|numeric',
                    'wbc' => 'required|min:70|max:90|numeric',
                    'neutro' => 'required|min:70|max:90|numeric',
                    'lympho' => 'required|min:70|max:90|numeric',
                    'mono' => 'required|min:70|max:90|numeric',
                    'eosino' => 'required|min:70|max:90|numeric',
                    'baso' => 'required|min:70|max:90|numeric',
                    'ab_wbc' => 'required|min:70|max:90|numeric',
                    'ab_rbc' => 'required|min:70|max:90|numeric',
                    'remark' => 'required|min:70|max:90|numeric',
                    'protein' => 'required|min:70|max:90|numeric',
                    'albumin' => 'required|min:70|max:90|numeric',
                    'globulin' => 'required|min:70|max:90|numeric',
                    'albu_glob' => 'required|min:70|max:90|numeric',

                ];

                $validator = Validator::make($req->all(), $rules);
                if ($validator->fails()) {
                    return $this->error($validator->errors());
                }

                // return $image_name = 'blood'.time().'.'.$req->fileToUpload->getClientOriginalExtension();

                $save_blood_report = new Blood_Report();
                $save = $save_blood_report->create($req->all());

                if ($save) {
                    $who = Auth::user();

                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . $this->who_has_performed() . '  has uploaded blood report of - ' . $patient_name;
                    $activity_log->action = 'Uploaded patient blood report';
                    $activity_log->save();
                    return response()->json([
                        'message' => 'blood report saved successfully',
                    ], 200);
                    //    return response()->json([
                    //        'message' => 'report saved successfully (blood report)',
                    //    ],200);
                } else {
                    return response()->json([
                        'message' => 'error , unable to save report only image has been saved ',
                    ], 422);
                }
            } elseif ($req->has('renal_report')) {

                // $image_validate = [
                //     // 'type' => 'required',
                //     'patient_id' => 'required',
                //     'fileToUpload' => 'required|image|mimes:png,jpg|max:2048',
                // ];
                // $validator = Validator::make($req->all(),$image_validate);
                // if($validator->fails()){
                //     return response()->json([
                //         'message' => 'validation failed',
                //         'errors' => $validator->errors(),
                //     ],400);
                // }
                // $image_name = 'renal'.time().'.'.$req->fileToUpload->getClientOriginalExtension();
                // $patient_report = new Patient_Report();
                // $patient_report->patient_id = $req->patient_id;
                // $patient_report->description = $image_name;
                // $patient_report->file_link = "No";
                // $req->fileToUpload->move(public_path('patient_report'), $image_name);
                // $image_saved = $patient_report->save();

                // if(!$image_saved){
                //     return response()->json([
                //         'message' => 'error , unable to save image',
                //     ],400);
                // }

                $rules = [
                    // 'report_date'=>'required',
                    'patient_id' => 'required|numeric',
                    'protein' => 'required|min:70|max:90|numeric',
                    'albumin' => 'required|min:70|max:90|numeric',
                    'globulin' => 'required|min:70|max:90|numeric',
                    'alu_glo' => 'required|min:70|max:90|numeric',
                    'uric_acid' => 'required|min:70|max:90|numeric',
                    'urea' => 'required|min:70|max:90|numeric',
                    'creatinine' => 'required|min:70|max:90|numeric',
                    'calcium' => 'required|min:70|max:90|numeric',
                    'phosphorous' => 'required|min:70|max:90|numeric',
                    'sodium' => 'required|min:70|max:90|numeric',
                    'potassium' => 'required|min:70|max:90|numeric',
                    'chloride' => 'required|min:70|max:90|numeric',
                    'ionised_cal' => 'required|min:70|max:90|numeric',
                    'bio_protein' => 'required|min:70|max:90|numeric',
                    'bio_albumin' => 'required|min:70|max:90|numeric',
                    'bio_globulin' => 'required|min:70|max:90|numeric',
                    'ag_ratio' => 'required|min:70|max:90|numeric',
                ];

                $validator = Validator::make($req->all(), $rules);
                if ($validator->fails()) {
                    return $this->error($validator->errors());
                }

                // return $image_name = 'blood'.time().'.'.$req->fileToUpload->getClientOriginalExtension();

                $save_blood_report = new Renal_Report();
                $save = $save_blood_report->create($req->all());

                if ($save) {

                    $who = Auth::user();

                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . $this->who_has_performed() . '  has uploaded renal report of - ' . $patient_name;
                    $activity_log->action = 'Uploaded patient renal report';
                    $activity_log->save();

                    return response()->json([
                        'message' => 'uploaded pateint renal report',
                    ], 200);
                } else {
                    return response()->json([
                        'message' => 'error , unable to save report only image has been saved ',
                    ], 400);
                }
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function show_patient_blood_and_renal_report($patient_id = null)
    {
        try {
            $check_patient = Patient::where("patient_id", $patient_id)->get()->count();
            if ($check_patient == 0) {
                return response()->json([
                    'message' => "invalid patient id",
                ], 404);
            }
            $patient_report = Patient_Report::where('patient_id', $patient_id)->get();

            if (isEmpty($patient_report)) {
                return response()->json([
                    'message' => "no blood and renal report uploaded yet",
                ], 422);
            }

            return response()->json([
                'message' => "success , blood and renal report fetched",
                'data' => $patient_report,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
