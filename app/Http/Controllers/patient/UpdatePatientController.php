<?php

namespace App\Http\Controllers\patient;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Patient;
use App\Models\Staff;
use App\Models\Activity_log;
use App\Models\Centre;
use Illuminate\Support\Facades\Auth;
use File;
use App\Traits\ResponseAPI;
use Exception;

class UpdatePatientController extends Controller
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


    public function UpdatePatient(Request $req, $patient_id = null)
    {
        try {

            if (patient::find($patient_id) == null) {
                return response()->json([
                    'message' => 'patient not found',
                ], 400);
            }


            $validator = Validator::make($req->all(), [
                'name' => 'required',
                'phone_number' => 'required|digits:10|numeric',
                'dob' => 'required',
                'email' => 'nullable|email',
                'age' => 'required|numeric',
                'gender' => 'required',
                'address' => 'required',
                'doctor' => 'required',
                // 'branch_name'=>'required',
                'dpw' => 'required',
                'awaiting_transplantation' => 'required',
                // 'transplantation'=>'required',
                // 'awaiting'=>'required',
                'blood_group' => 'required',
                'CKD_5D_HTN' => 'required',
                'stability' => 'required',
                'heart_function' => 'required',
                'injection' => 'required',
                'urea' => 'required',
                'creatinine' => 'required',
                'bun' => 'required',
                'ecg' => 'required',
                // 'hhh'=>'required',
                'bp_stable' => 'required',
                'habits' => 'required',
                'diet' => 'required',
                'a' => 'required',
                'v' => 'required',
                'n' => 'required',
                's' => 'required',
                'd' => 'required',
                'access' => 'required',
                'covid' => 'required',
                // 'knowing_source'=>'required',
                // 'profile_link'=>'required|mimes:jpg,png,jpeg',
                // 'blocked'=>'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }
            if ($req->branch_name == null) {
                return response()->json([
                    'message' => 'branch_name field is required',
                ], 403);
            }
            if (Centre::where('code', $req->branch_name)->get()->first() == null) {
                return response()->json([
                    'message' => 'invalid branch code',
                ], 404);
            }


            $check_patient_number = 0;
            $check_patient_email = 0;

            if (Patient::Where('patient_id', $patient_id)->first()->phone_number != $req->phone_number) {
                $check_patient_number = Patient::Where('phone_number', $req->phone_number)->count();
            }
            if (Patient::Where('patient_id', $patient_id)->first()->email != $req->email) {
                $check_patient_email = Patient::Where('phone_number', $req->email)->count();
            }


            if ($check_patient_number > 0) {
                return response()->json([
                    'message' => 'phone number already exists'
                ], 400);
            }
            if ($check_patient_email > 0) {
                return response()->json([
                    'message' => 'email already exists'
                ], 400);
            }


            $store = Patient::find($patient_id);
            $store->name = $req->name;
            $store->phone_number = $req->phone_number;
            $store->dob = $req->dob;
            $store->email = $req->email;
            $store->age = $req->age;
            $store->gender = $req->gender;
            $store->address = $req->address;
            $store->doctor = $req->doctor;

            if (Staff::where('email', Auth::user()->email)->count()) {
                $store->branch_name = Auth::user()->branch;
            } else {
                $store->branch_name = $req->branch_name;
            }
            $store->dpw = $req->dpw;
            $store->awaiting_transplantation = $req->awaiting_transplantation;
            $store->blood_group = $req->blood_group;
            $store->CKD_5D_HTN = $req->CKD;
            $store->stability = $req->stability;
            $store->heart_function = $req->heart_function;
            $store->injection = $req->injection;
            $store->urea = $req->urea;
            $store->creatinine = $req->creatinine;
            $store->bun = $req->bun;
            $store->ecg = $req->ecg;
            $store->bp_stable = $req->bp_stable;

            if ($req->habits[0] == null) {
                $str = '';
                for ($x = 1; $x < 3; $x++) {
                    if ($req->habits[$x] == null) {
                        continue;
                    }
                    $str .= $req->habits[$x] . ',';
                }
                $habits_data = rtrim($str, ',');
                $store->habits = $habits_data;
            } else {
                $store->habits = 'No Habits';
            }

            $store->diet = $req->diet;
            if ($req->hhh != null) {
                $str = '';
                for ($x = 0; $x < 2; $x++) {
                    if ($req->hhh[$x] == null) {
                        continue;
                    }
                    $str .= $req->hhh[$x] . ',';
                }
                $h_data = rtrim($str, ',');
                $store->hhh = $h_data;
            } else {
                $store->hhh = ' ';
            }
            $store->a = $req->a;
            $store->v = $req->v;
            $store->n = $req->n;
            $store->s = $req->s;
            $store->d = $req->d;
            $store->access = $req->access;
            $store->covid = $req->covid;
            $store->coin = 0;
            $store->profile_link = ' ';

            $store->knowing_source = ' ';

            // $req->profile_link->move(public_path('/patient'),$image_name);

            //del previous image
            // File::delete(public_path('patient/'.$store->profile_link));

            $updated = $store->update();
            // return "here";

            if ($updated) {

                $who = Auth::user();

                $activity_log = new Activity_log();
                $activity_log->log = $who->username . $this->who_has_performed() . '  has updated patient - ' . $req->name;
                $activity_log->action = 'Updated patient';
                $activity_log->save();

                return response(['message' => "patient updated"], 200);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
