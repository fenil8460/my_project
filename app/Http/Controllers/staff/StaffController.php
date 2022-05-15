<?php

namespace App\Http\Controllers\staff;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Staff;
use App\Models\Admin;
use App\Models\Manager;
use App\Models\Doctor;
use App\Models\Activity_log;
use App\Models\StockMaintenance;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Traits\ResponseAPI;
use Exception;

class StaffController extends Controller
{
    use ResponseAPI;

    function viewStaff($staff_id = null)
    {

        try {
            if ($staff_id != null) {
                $staff = Staff::find($staff_id);

                if ($staff != null) {
                    return response()->json([
                        'message' => 'staff found',
                        'data' => $staff,
                    ], 200);
                }

                return response()->json([
                    'message' => 'staff not found',
                ], 403);
            }

            $staff = Staff::all();
            return response(['data' => $staff], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function storeStaff(Request $req)
    {
        try {
            // return Auth::user();
            $validator = Validator::make($req->all(), [
                'username' => 'required',
                'phone' => 'required|digits:10|numeric',
                'emphone' => 'nullable|digits:10|numeric',
                'email' => 'required|email',
                'password' => 'required',
                'category' => 'required',
                'branch' => 'required',
                'salary' => 'required',
                'dmy' => 'required',
                'designation' => 'required',
                'profile_pic' => 'required|mimes:jpg,png,jpeg|max:10000|image',

            ]);

            if ($validator->fails()) {
                return response($validator->errors(), 401);
            }

            //check phone and email number
            $check_staff_number = Staff::Where('phone', $req->phone)->count();
            $check_admin_number = Admin::Where('phone', $req->phone)->count();
            $check_doctor_number = Doctor::Where('phone', $req->phone)->count();
            $check_manager_number = Manager::Where('phone', $req->phone)->count();
            $check_number = $check_admin_number + $check_doctor_number + $check_manager_number + $check_staff_number;

            $check_staff_email = Staff::Where('email', $req->email)->get()->count();
            $check_admin_email = Admin::Where('email', $req->email)->get()->count();
            $check_doctor_email = Doctor::Where('email', $req->email)->get()->count();
            $check_manager_email = Manager::Where('email', $req->email)->get()->count();
            $check_email = $check_admin_email + $check_doctor_email + $check_manager_email + $check_staff_email;


            if ($check_number > 0) {
                return response()->json([
                    'message' => 'phone number already exists',
                ], 403);
            } elseif ($check_email > 0) {
                return response()->json([
                    'message' => 'Email already exists',
                ], 403);
            }

            $staff_id = Staff::select('id')->orderBy('id', 'desc')->first()['id'] + 1;

            $image_name = 'SID' . $req->branch . $staff_id . '.' . $req->file('profile_pic')->getClientOriginalExtension();
            $a =  $req->profile_pic->move(public_path('patient'), $image_name);


            $store = new Staff();
            $store->username = $req->username;
            $store->password = md5($req->password);
            $store->email = $req->email;
            $store->phone = $req->phone;
            $store->emphone = $req->emphone;

            $who = Auth::user();
            $check_user = substr($who->profile_pic, 0, 3);
            if ($check_user == 'AID' || $check_user == 'MID') {
                $store->active = 1;
            } else {
                $store->active = 0;
            }

            $store->ban = 0;
            $store->remove = 0;
            $store->profile_pic = $image_name;

            $store->category = $req->category;
            $store->branch = $req->branch;
            $store->salary = $req->salary;
            $store->dmy = $req->dmy;
            $store->designation = $req->designation;

            $saved = $store->save();

            if ($saved) {

                $activity_log = new Activity_log();
                $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has registered Staff - ' . $req->username;
                $activity_log->action = 'Banned Staff';
                $activity_log->save();

                return response(['message' => "Staff inserted"], 200);
            }

            return response()->json([
                'error' => ' unable to saved , server error'
            ], 500);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function staff_consumable_graph()
    {
        try {
            $consumableData = DB::table('sm')->join('staff', 'staff.branch', '=', 'sm.branch_name')->select('staff.id', 'staff.branch', 'sm.category', 'sm.brand', 'sm.billable', 'sm.available_count', 'sm.arrived', 'sm.total', 'sm.cost', 'sm.gst', 'sm.calculated_cost_price', 'sm.private_selling_price', 'sm.mjpjay_selling_price')->where('sm.category', 'consumable')->get();
            return response()->json(['data' => $consumableData], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function staff_pharma_graph()
    {
        try {
            $pharmaData = DB::table('sm')->join('staff', 'staff.branch', '=', 'sm.branch_name')->select('staff.id', 'staff.branch', 'sm.category', 'sm.brand', 'sm.billable', 'sm.available_count', 'sm.arrived', 'sm.total', 'sm.cost', 'sm.gst', 'sm.calculated_cost_price', 'sm.private_selling_price', 'sm.mjpjay_selling_price')->where('sm.category', 'pharmaceutical')->get();
            return response()->json(['data' => $pharmaData], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
