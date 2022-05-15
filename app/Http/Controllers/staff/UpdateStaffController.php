<?php

namespace App\Http\Controllers\staff;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Staff;
use App\Models\Admin;
use App\Models\Manager;
use App\Models\Doctor;
use App\Models\Activity_log;
use App\Traits\ResponseAPI;
use Exception;

class UpdateStaffController extends Controller
{
    use ResponseAPI;
    public function updateStaff(Request $req, $staff_id = null)
    {
        try {

            if ($staff_id == null) {
                return response()->json([
                    'message' => 'staff not found',
                ], 404);
            }

            if (Staff::find($staff_id) == null) {
                return response()->json([
                    'message' => 'invalid staff id',
                ], 494);
            }


            $validator = Validator::make($req->all(), [
                'username' => 'required',
                'phone' => 'required|digits:10|numeric|unique:Admin|unique:Staff|unique:Doctor|unique:Manager',
                'emphone' => 'nullable|numeric|digits:10',
                'email' => 'required|email|unique:Admin|unique:Staff|unique:Doctor|unique:Manager',
                'password' => 'required',
                'category' => 'required',
                'branch' => 'required',
                'salary' => 'required',
                'dmy' => 'required',
                'designation' => 'required',
            ]);

            if ($validator->fails()) {
                return response($validator->errors(), 401);
            }

            $check_staff_number = 0;
            $check_staff_email = 0;

            if (Staff::Where('id', $staff_id)->first()->phone != $req->phone) {
                $check_staff_number = Staff::Where('phone', $req->phone)->count();
            }
            if (Staff::Where('id', $staff_id)->first()->email != $req->email) {
                $check_staff_email = Staff::Where('phone', $req->email)->count();
            }

            $update = Staff::where([['id', $staff_id], ['active', 1]])->first();
            $update->username = $req->username;
            $update->password = md5($req->password);
            $update->email = $req->email;
            $update->phone = $req->phone;
            $update->emphone = $req->emphone;

            $update->profile_pic = 'empty.jpg';

            $update->category = $req->category;
            $update->branch = $req->branch;
            $update->salary = $req->salary;
            $update->dmy = $req->dmy;
            $update->designation = $req->designation;
            if (isset($req->password)) {
                $update->password = md5($req->password);
            }
            $updated = $update->update();

            if ($updated) {

                $who = Auth::user();
                $check_user = substr($who->profile_pic, 0, 3);
                $activity_log = new Activity_log();
                $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has updated Staff - ' . $req->username;
                $activity_log->action = 'updated Staff';
                $activity_log->save();

                return response()->json([
                    'message' => 'successfully updated',
                ], 200);
            }

            return response(['error' => "server error , unable to update"], 500);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
