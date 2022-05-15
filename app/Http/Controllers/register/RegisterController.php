<?php

namespace App\Http\Controllers\register;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Manager;
use App\Models\Staff;
use App\Models\Admin;
use App\Models\Doctor;
use App\Models\Centre;
use App\Models\SuperAdmin;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class RegisterController extends Controller
{
    use ResponseAPI;

    public function register(Request $req)
    {
        try {
            //Start Register
            if (isset($req)) {
                // return 'here';

                //validation for staff
                if ($req->category == 'Staff') {
                    $validator = Validator::make($req->all(), [
                        'username' => 'required',
                        'branch' => 'required',
                        'phone' => 'required|digits:10|numeric|unique:doctor|unique:admin|unique:staff',
                        'emphone' => 'nullable|digits:10|numeric',
                        'email' => 'required|email|unique:doctor|unique:admin|unique:staff',
                        'password' => 'required|confirmed',
                        'password_confirmation' => 'required',
                        'category' => 'required',
                        'designation' => 'required',
                        'profile_pic' => 'required|mimes:jpg,png,jpeg',

                    ]);


                    if ($validator->fails()) {
                        return $this->error($validator->errors());
                    }

                    $staff = new Staff();
                    $staff->username = $req->username;
                    $staff->password = md5($req->password);
                    $staff->email = $req->email;
                    $staff->phone = $req->phone;
                    $staff->emphone = $req->emphone;
                    $staff->active = 0;
                    $staff->ban = 0;
                    $staff->remove = 0;

                    $staff_id = Staff::select('id')->orderBy('id', 'desc')->first()['id'] + 1;
                    $image_name = 'SID' . $req->branch . $staff_id . '.' . $req->file('profile_pic')->getClientOriginalExtension();
                    $staff->profile_pic = $image_name;

                    $staff->category = $req->category;
                    $staff->branch = $req->branch;
                    $staff->salary = 0;
                    $staff->dmy = 0;
                    $staff->designation = $req->designation;


                    $req->profile_pic->move(public_path('/images/registered'), $image_name);

                    $saved = $staff->save();

                    if (!$saved) {
                        // return response()->json([
                        //     'error' => 'serve error,unable to save in database',
                        //     'status' => false
                        // ], 500);
                        return $this->error('serve error,unable to save in database', 500);
                    }

                    return $this->success($saved);
                } elseif ($req->category == 'Admin' || $req->category == 'Doctor') {

                    $validator = Validator::make($req->all(), [
                        'username' => 'required',
                        'phone' => 'required|digits:10|numeric|unique:doctor|unique:admin|unique:staff',
                        'emphone' => 'nullable|digits:10|numeric|unique:doctor|unique:admin|unique:staff',
                        'email' => 'required|email',
                        'password' => 'required|confirmed',
                        'password_confirmation' => 'required',
                        'profile_pic' => 'required|mimes:jpg,png,jpeg',
                    ]);

                    if ($validator->fails()) {
                        return $this->error($validator->errors());
                    }
                }

                if ($req->category == "Doctor") {

                    $doctor = new Doctor();
                    $doctor->username = $req->username;
                    $doctor->password = md5($req->password);
                    $doctor->email = $req->email;
                    $doctor->phone = $req->phone;
                    $doctor->emphone = $req->emphone;
                    $doctor->active = 0;
                    $doctor->ban = 0;
                    $doctor->remove = 0;

                    $doctor_id = Doctor::select('id')->orderBy('id', 'desc')->first()['id'] + 1;
                    $image_name = 'DID' . $doctor_id . '.' . $req->file('profile_pic')->getClientOriginalExtension();
                    $doctor->profile_pic = $image_name;

                    $doctor->branch = 'empty';
                    $doctor->speciality = 'empty';

                    $doctor->emergency_pay = 0;
                    $doctor->scheduled_pay = 0;
                    $doctor->amount = 0;
                    $doctor->new_patient = 0;
                    $doctor->perdmy = 'empty';


                    $req->profile_pic->move(public_path('/images/registered'), $image_name);

                    $saved = $doctor->save();

                    if (!$saved) {
                        return $this->error('serve error,unable to save in database', 500);
                        // return response()->json([
                        //     'error' => 'serve error,unable to save in database',
                        //     'status' => false
                        // ], 500);
                    }

                    return $this->success($saved);
                }



                if ($req->category == "Admin") {

                    $admin = new Admin();
                    $admin->username = $req->username;
                    $admin->password = md5($req->password);
                    $admin->email = $req->email;
                    $admin->phone = $req->phone;
                    $admin->emphone = $req->emphone;
                    $admin->active = 0;
                    $admin->ban = 0;
                    $admin->remove = 0;

                    $admin_id = Admin::select('id')->orderBy('id', 'desc')->first()['id'] + 1;
                    $image_name = 'AID' . $admin_id . '.' . $req->file('profile_pic')->getClientOriginalExtension();
                    $admin->profile_pic = $image_name;

                    $req->profile_pic->move(public_path('/images/registered'), $image_name);

                    $saved = $admin->save();

                    if (!$saved) {
                        // return response()->json([
                        //     'error' => 'serve error,unable to save in database',
                        //     'status' => false
                        // ], 500);
                        return $this->error('serve error,unable to save in database', 500);
                    }

                    return $this->success($saved);
                }

                if ($req->category == "Super Admin") {

                    $super_admin = new SuperAdmin();
                    $super_admin->username = $req->username;
                    $super_admin->password = md5($req->password);
                    $super_admin->email = $req->email;
                    $super_admin->phone = $req->phone;
                    $super_admin->emphone = $req->emphone;
                    $super_admin->active = 0;
                    $super_admin->ban = 0;
                    $super_admin->remove = 0;

                    $super_admin = SuperAdmin::select('id')->orderBy('id', 'desc')->first()['id'] + 1;
                    $image_name = 'AID' . $super_admin . '.' . $req->file('profile_pic')->getClientOriginalExtension();
                    $super_admin->profile_pic = $image_name;

                    $req->profile_pic->move(public_path('/images/registered'), $image_name);

                    $saved = $super_admin->save();

                    if (!$saved) {
                        // return response()->json([
                        //     'error' => 'serve error,unable to save in database',
                        //     'status' => false
                        // ], 500);
                        return $this->error('serve error,unable to save in database', 500);
                    }

                    return $this->success($saved);
                }
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function centre_code_in_registre_page()
    {
        try {
            $centre = Centre::select('centre_name', 'code')->where('code', '!=', 'WH')->get();
            if ($centre == null) {
                // return response()->json([
                //     'error' => 'server error, unable to fetch centre details ',
                // ], 500);
                return $this->error('serve error,unable to save in database', 500);
            }

            $success = [
                'message' => 'centre fetched successfully',
                'data' => $centre,
            ];
            return $this->success($success, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
