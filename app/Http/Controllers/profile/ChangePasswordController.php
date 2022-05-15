<?php

namespace App\Http\Controllers\profile;

use App\Http\Controllers\Controller;
use App\Models\Activity_log;
use App\Models\Admin;
use App\Models\Doctor;
use App\Models\Manager;
use App\Models\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class ChangePasswordController extends Controller
{
    use ResponseAPI;
    function changePassword(Request $req)
    {
        try {
            // return Auth::user();
            if ($req->has('changePassword')) {
                $profile_pic = Auth::user()->profile_pic;
                $email = Auth::user()->email;

                if ($profile_pic != 'Empty.jpg') {

                    $who = substr($profile_pic, 0, 3);
                    $validator = Validator::make($req->all(), [
                        'current_password' => 'required',
                        'new_password' => 'required',
                        're_enter_password' => 'required',
                    ]);

                    // return $req->all();

                    if ($validator->fails()) {
                        return $this->error($validator->errors());
                    }

                    $id = Auth::user()->id;

                    if ($who == 'AID')
                        $check_password = Admin::where([['id', $id], ['password', md5($req->current_password)]])->count();
                    elseif ($who == 'MID')
                        $check_password = Manager::where([['id', $id], ['password', md5($req->current_password)]])->count();
                    elseif ($who == 'DID')
                        $check_password = Doctor::where([['id', $id], ['password', md5($req->current_password)]])->count();
                    elseif ($who == 'SID')
                        $check_password = Staff::where([['id', $id], ['password', md5($req->current_password)]])->count();

                    if (!$check_password) {
                        return response()->json([
                            'message' => 'incorrect password',
                        ], 403);
                    }

                    if ($req->new_password != $req->re_enter_password) {
                        return response()->json([
                            'message' => 'new_password and re_enter_password must be same',
                        ], 403);
                    }

                    if ($who == "DID") {

                        $data = Doctor::find($id);
                        $data->password = md5($req->new_password);

                        $update = $data->update();
                    } elseif ($who == "SID") {

                        $data = Staff::find($id);
                        $data->password = md5($req->new_password);

                        $update = $data->update();
                    } elseif ($who == "AID") {

                        $data = Admin::find($id);
                        $data->password = md5($req->new_password);

                        $update = $data->update();
                    } elseif ($who == "MID") {

                        $data = Manager::find($id);
                        $data->password = md5($req->new_password);

                        $update = $data->update();
                    }

                    if ($update) {
                        $activity_log = new Activity_log();
                        if ($who == 'AID')
                            $role = ' (Adimin)';
                        elseif ($who == 'MID')
                            $role = ' (Manager)';
                        elseif ($who == 'DID')
                            $role = ' (Doctor)';
                        elseif ($who == 'SID')
                            $role = ' (Staff)';

                        $activity_log->log = Auth::user()->username . $role . '  has updated  his password';
                        $activity_log->action = 'Updated password';
                        $activity_log->save();

                        return response()->json([
                            'message' => 'password updated'
                        ], 200);
                    }

                    return response()->json([
                        'message' => 'unable to updated profile'
                    ], 500);
                }
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
