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

class EditProfile extends Controller
{
    use ResponseAPI;

    function editProfile(Request $req)
    {
        try {
            if ($req->has('editProfile')) {
                $profile_pic = Auth::user()->profile_pic;
                $email = Auth::user()->email;

                if ($profile_pic != 'Empty.jpg') {

                    $who = substr($profile_pic, 0, 3);
                    $validator = Validator::make($req->all(), [
                        'name' => 'required',
                        'email' => 'required|email',
                        'phone' => 'required|min:10|max:10',
                        'confirm_current_password' => 'required',
                    ]);
                    // return Staff::all();


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

                    $isPhoneUnique = 0;
                    $isEmailUnique = 0;

                    $isPhoneUnique += Doctor::where('phone', $req->phone)->count();
                    $isPhoneUnique += Admin::where('phone', $req->phone)->count();
                    $isPhoneUnique += Staff::where('phone', $req->phone)->count();
                    $isPhoneUnique += Manager::where('phone', $req->phone)->count();

                    $isEmailUnique += Doctor::where('email', $req->email)->count();
                    $isEmailUnique += Admin::where('email', $req->email)->count();
                    $isEmailUnique += Staff::where('email', $req->email)->count();
                    $isEmailUnique += Manager::where('email', $req->email)->count();

                    if ($isPhoneUnique && $isEmailUnique) {
                        return response()->json([
                            'message' => 'phone number and email already exist'
                        ], 403);
                    }

                    if ($isPhoneUnique) {
                        return response()->json([
                            'message' => 'phone number already exist'
                        ], 403);
                    }

                    if ($isEmailUnique) {
                        return response()->json([
                            'message' => 'email already exist'
                        ], 403);
                    }

                    if ($who == "DID") {

                        $data = Doctor::find($id);
                        $data->username = $req->name;
                        $data->email = $req->email;
                        $data->phone = $req->phone;

                        $update = $data->update();
                    } elseif ($who == "SID") {

                        $data = Staff::find($id);
                        $data->username = $req->name;
                        $data->email = $req->email;
                        $data->phone = $req->phone;

                        $update = $data->update();
                    } elseif ($who == "AID") {

                        $data = Admin::find($id);
                        $data->username = $req->name;
                        $data->email = $req->email;
                        $data->phone = $req->phone;

                        $update = $data->update();
                    } elseif ($who == "MID") {

                        $data = Manager::find($id);
                        $data->username = $req->name;
                        $data->email = $req->email;
                        $data->phone = $req->phone;

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

                        $activity_log->log = $req->name . $role . '  has updated  his profile';
                        $activity_log->action = 'Updated Profile';
                        $activity_log->save();

                        return response()->json([
                            'message' => 'profile updated'
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
