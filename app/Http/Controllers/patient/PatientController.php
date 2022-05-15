<?php

namespace App\Http\Controllers\patient;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Patient;
use App\Models\Staff;
use App\Models\Activity_log;
use App\Models\Admin;
use App\Models\Centre;
use App\Models\Doctor;
use App\Models\Manager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Traits\ResponseAPI;
use Exception;



class PatientController extends Controller
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


    public function registerPatient(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), [
                'name' => 'required',
                'phone_number' => 'required|digits:10|numeric',
                'dob' => 'required',
                'email' => 'nullable|email',
                'age' => 'required',
                'gender' => 'required',
                'address' => 'required',
                'doctor' => 'required',
                // 'branch_name'=>'required',
                'dpw' => 'required|numeric',
                'awaiting_transplantation' => 'required|numeric',
                // 'transplantation'=>'required',
                // 'awaiting'=>'required',
                'blood_group' => 'required',
                'CKD_5D_HTN' => 'required',
                'stability' => 'required|numeric',
                'heart_function' => 'required',
                'injection' => 'required|numeric',
                'urea' => 'required|numeric',
                'creatinine' => 'required|numeric',
                'bun' => 'required|numeric',
                'ecg' => 'required|numeric',
                // 'hhh'=>'required',
                'bp_stable' => 'required',
                'habits' => 'required',
                'diet' => 'required',
                'a' => 'required|numeric',
                'v' => 'required|numeric',
                'n' => 'required|numeric',
                's' => 'required|numeric',
                'd' => 'required|numeric',
                'access' => 'required',
                'covid' => 'required|numeric',
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

            //check phone and email number
            $check_patient_number = Patient::Where('phone_number', $req->phone_number)->count();
            $check_number = $check_patient_number;

            // $check_patient_email = Patient::Where('email',$req->email)->get()->count();
            // $check_email = $check_patient_email;

            if ($check_patient_number > 0) {
                return response()->json([
                    'message' => 'phone number already exists'
                ], 400);
            }
            // if($check_patient_email > 0){
            //     return response()->json([
            //         'message' => 'email already exists'
            //     ],400);
            // }


            $store = new Patient();
            $store->name = $req->name;
            $store->phone_number = $req->phone_number;
            $store->dob = $req->dob;
            // if( (Admin::where('email',$req->email)->count()) &&  (Manager::where('email',$req->email)->count()) )
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
            $store->CKD_5D_HTN = $req->CKD_5D_HTN;
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

            $saved = $store->save();

            if ($saved) {

                $who = Auth::user();

                $activity_log = new Activity_log();
                $activity_log->log = $who->username . $this->who_has_performed() . '  has registered patient - ' . $req->name;
                $activity_log->action = 'Regisred patient';
                $activity_log->save();

                return response(['message' => "patient registered"], 200);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    public function viewPatient($patient_id = null)
    {
        try {
            if ($patient_id != null) {
                $data = Patient::find($patient_id);

                if ($data != null) {
                    return response()->json([
                        'message' => 'patient found',
                        'data' => $data,
                    ], 200);
                }

                return response()->json([
                    'message' => 'patient not found',
                ], 403);
            }

            //for admin - get both blocked and blocked patient
            $isadmin = Auth::user();
            if (substr($isadmin->profile_pic, 0, 3) == "AID") {
                $data = Patient::all();
                if ($data != null) {
                    return response()->json([
                        'message' => 'fetched all patient',
                        'data' => $data,
                    ], 200);
                }

                return response()->json(['message' => 'patientnot found'], 404);
            }

            $data = Patient::where('blocked', 0)->get();
            if ($data != null) {
                return response()->json([
                    'message' => 'fetched all patient',
                    'data' => $data,
                ], 200);
            }

            return response()->json(['message' => 'patientnot found'], 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    function block_unblock_patient(Request $req, $patient_id = null)
    {
        try {
            // return Route::currentRouteName();
            $patient = Patient::find($patient_id);

            if ($patient == null) {
                return response()->json([
                    'message' => 'pateint not found',
                ], 404);
            }

            $check = $patient->blocked;

            if (is_null($patient)) {
                return response()->json([
                    'error' => 'patient not found',
                ], 404);
            }
            if ($check == 0) {
                $patient->blocked = 1;
                $blocked = $patient->update();

                if ($blocked) {
                    $who = Auth::user();

                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . $this->who_has_performed() . '  has blocked patient - ' . $patient->name;
                    $activity_log->action = 'blocked patient';
                    $activity_log->save();
                    return response()->json([
                        'message' => 'successfully blocked',
                    ], 200);
                }
            } elseif ($check == 1) {
                $patient->blocked = 0;
                $unblocked = $patient->update();

                if ($unblocked) {
                    $who = Auth::user();

                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . $this->who_has_performed() . '  has unblocked patient - ' . $patient->name;
                    $activity_log->action = 'unblocked patient';
                    $activity_log->save();
                    return response()->json([
                        'message' => 'successfully unblocked',
                    ], 200);
                }
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function get_patient_name_and_id()
    {
        try {
            //if admin then show all patient
            $for_admin = substr(Auth::user()->profile_pic, 0, 3);
            if ($for_admin == 'AID') {
                $patient = Patient::select('patient_id', 'name')->get();
                return response()->json([
                    'message' => 'patients found',
                    'data' => $patient,
                ], 200);
            }
            $branch = Auth::user()->branch;
            $patient = Patient::select('patient_id', 'name')->where([['blocked', 0], ['branch_name', $branch]])->get();
            if ($patient->count() > 0) {
                return response()->json([
                    'message' => 'fatched , patient name and id ',
                    'data' => $patient,
                ], 200);
            }
            return response()->json([
                'message' => 'unable to get patient details , no data found',
            ], 400);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
