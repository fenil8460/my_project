<?php

namespace App\Http\Controllers\apiauth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Manager;
use App\Models\Staff;
use App\Models\Admin;
use App\Models\Doctor;
use App\Models\Activity_log;
use App\Models\SuperAdmin;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Auth;
use Exception;

class ApiAuthController extends Controller
{
    use ResponseAPI;

    public function login(Request $req)
    {
        try {
            // start email password work
            if ($req->has('email') && $req->has('password')) {
                $validator = Validator::make($req->all(), [
                    'email' => 'required|email',
                    'password' => 'required',
                ]);


                if ($validator->fails()) {
                    return $this->error($validator->errors());
                }

                //manager login
                if ($req->manager == 'yes') {

                    $manager = Manager::where([['email', $req->email], ['role', $req->category]])->first();

                    if ($manager == null) {

                        return $this->error('This email id for ' . $req->category . ' role is not present in manager table');
                    }

                    if ($manager->remove == 1) {

                        return $this->error('you have been removed by admin , try contacting admin');
                    } elseif ($manager->ban == 1) {

                        return $this->error('you have been banned by admin , try contacting admin');
                    }


                    if (is_null($manager) || !($manager->password == md5($req->password))) {

                        return $this->error('The password is incorrect');
                    }
                    // return 'success';
                    if ($manager->active == 1) {

                        $activity_log = new Activity_log();
                        $activity_log->log = $manager['username'] . ' (Manager) has logged in as ' . $manager['role'] . ' with email ';
                        $activity_log->action = 'logged in';
                        $activity_log->save();
                        $manager->profile_pic =  URL::to('/') . '/images/registered/' . $manager->profile_pic;
                        $succes = [
                            'success' => ' manager logged in with ' . $req->category . ' role',
                            'role' => 'manager',
                            'token' => $manager->createToken('manager-token')->accessToken,
                            'logged_in' => $manager,
                        ];
                        return $this->success($succes, 200);
                    } else {
                        return $this->error('your account is not active , try contacting admin');
                    }
                }

                if ($req->category == 'Staff') {

                    $staff = Staff::where('email', $req->email)->first();

                    if ($staff == null) {

                        return $this->error('This email id for ' . $req->category . ' is not present in staff table');
                    }

                    if ($staff->remove == 1) {

                        return $this->error('you have been removed by admin , try contacting admin');
                    } elseif ($staff->ban == 1) {

                        return $this->error('you have been banned by admin , try contacting admin');
                    }


                    if (is_null($staff) || !($staff->password == md5($req->password))) {

                        return $this->error('The password is incorrect', 500);
                    }
                    if ($staff->active == 1) {

                        $activity_log = new Activity_log();
                        $activity_log->log = $staff['username'] . ' (Staff) has logged in as staff with email ';
                        $activity_log->action = 'logged in';
                        $activity_log->save();
                        $staff->profile_pic =  URL::to('/') . '/images/registered/' . $staff->profile_pic;
                        $succes = [
                            'success' => ' staff logged in ',
                            'role' => 'staff',
                            'token' => $staff->createToken('staff-token')->accessToken,
                            'logged_in' => $staff,
                        ];
                        return $this->success($succes, 200);
                    } else {

                        return $this->error('your account is not active , try contacting admin', 500);
                    }
                } elseif ($req->category == 'Doctor') {

                    $doctor = Doctor::where('email', $req->email)->first();

                    if ($doctor == null) {

                        return $this->error('This email id for ' . $req->category . ' is not present in doctor table ');
                    }

                    if ($doctor->remove == 1) {

                        return $this->error('you have been removed by admin , try contacting admin');
                    } elseif ($doctor->ban == 1) {

                        return $this->error('you have been banned by admin , try contacting admin');
                    }


                    if (is_null($doctor) || !($doctor->password == md5($req->password))) {

                        return $this->error('The password is incorrect');
                    }
                    if ($doctor->active == 1) {

                        $activity_log = new Activity_log();
                        $activity_log->log = $doctor['username'] . ' (doctor) has logged in as staff with email ';
                        $activity_log->action = 'logged in';
                        $activity_log->save();
                        $doctor->profile_pic =  URL::to('/') . '/images/registered/' . $doctor->profile_pic;
                        $succes = [
                            'success' => ' doctor logged in ',
                            'role' => 'doctor',
                            'token' => $doctor->createToken('doctor-token')->accessToken,
                            'logged_in' => $doctor,
                        ];
                        return $this->success($succes);
                    } else {

                        return $this->error('your account is not active , try contacting admin');
                    }
                } elseif ($req->category == 'Admin') {

                    $admin = Admin::where('email', $req->email)->first();

                    if ($admin == null) {

                        return $this->error('This email id for ' . $req->category . ' is not present in admin table');
                    }

                    if ($admin->remove == 1) {

                        return $this->error('you have been removed by admin , try contacting admin');
                    } elseif ($admin->ban == 1) {

                        return $this->error('you have been banned by admin , try contacting admin');
                    }


                    if (is_null($admin) || !($admin->password == md5($req->password))) {
                        return $this->error('The password is incorrect');
                    }

                    if ($admin->active == 1) {

                        $activity_log = new Activity_log();
                        $activity_log->log = $admin['username'] . ' (admin) has logged in as staff with email ';
                        $activity_log->action = 'logged in';
                        $activity_log->save();
                        $admin->profile_pic =  URL::to('/') . '/images/registered/' . $admin->profile_pic;
                        $succes = [
                            'success' => ' admin logged in ',
                            'role' => 'admin',
                            'token' => $admin->createToken('admin-token')->accessToken,
                            'logged_in' => $admin,
                        ];
                        return $this->success($succes);
                    } else {

                        return $this->error('your account is not active , try contacting admin');
                    }
                } elseif ($req->category == 'Super Admin') {

                    $super_admin = SuperAdmin::where('email', $req->email)->first();

                    if ($super_admin == null) {

                        return $this->error('This email id for ' . $req->category . ' is not present in Super Admin table ');
                    }

                    if ($super_admin->remove == 1) {

                        return $this->error('you have been removed by admin , try contacting admin');
                    } elseif ($super_admin->ban == 1) {

                        return $this->error('you have been banned by admin , try contacting admin');
                    }


                    if (is_null($super_admin) || !($super_admin->password == md5($req->password))) {

                        return $this->error('The password is incorrect');
                    }

                    if ($super_admin->active == 1) {

                        $activity_log = new Activity_log();
                        $activity_log->log = $super_admin['username'] . ' (super admin) has logged in as staff with email ';
                        $activity_log->action = 'logged in';
                        $activity_log->save();
                        $super_admin->profile_pic =  URL::to('/') . '/images/registered/' . $super_admin->profile_pic;
                        $succes = [
                            'success' => ' admin logged in ',
                            'role' => 'super-admin',
                            'token' => $super_admin->createToken('super-admin-token')->accessToken,
                            'logged_in' => $super_admin,
                        ];
                        return $this->success($succes);
                    } else {

                        return $this->error('your account is not active , try contacting admin');
                    }
                }
            } elseif ($req->has('otp') && $req->hasAny(['email', 'password'])) {

                return $this->error('invalid attempt , hit submit button');
            }
            //end email password work





            //start otp and phone number
            if ($req->has('otp')) {
                $validator = Validator::make($req->all(), [
                    'number' => 'required|numeric|digits:10',
                ]);


                if ($validator->fails()) {
                    return $this->error($validator->errors());
                }

                //manager login
                if ($req->manager == 'yes') {

                    $manager = Manager::where([['phone', $req->number], ['role', $req->category]])->first();

                    if ($manager == null) {

                        return $this->error('This phone number for ' . $req->category . ' role is not present in manager table');
                    }

                    if ($manager->active == 0) {

                        return $this->error('your account is not active , try contacting admin');
                    } elseif ($manager->remove == 1) {

                        return $this->error('you have been removed by admin , try contacting admin');
                    } elseif ($manager->ban == 1) {

                        return $this->error('you have been banned by admin , try contacting admin');
                    }



                    // validation from firebase
                    return 'ready to send otp';

                    if (true) { //write otp success return here

                        $activity_log = new Activity_log();
                        $activity_log->log = $manager['username'] . ' (Manager) has logged in as ' . $manager['role'] . ' with email ';
                        $activity_log->action = 'logged in';
                        $activity_log->save();
                        $manager->profile_pic =  URL::to('/') . '/images/registered/' . $manager->profile_pic;
                        $succes = [
                            'success' => ' manager logged in with ' . $req->category . ' role',
                            'token' => $manager->createToken('manager-token')->accessToken,
                            'logged_in' => $manager,
                        ];
                        return $this->success($succes);
                    }


                    //if otp fails any how write respone code here

                }

                if ($req->category == 'Staff') {

                    $staff = Staff::where('phone', $req->number)->first();

                    if ($staff == null) {

                        return $this->error('This phone number for ' . $req->category . ' is not present in staff table ');
                    }

                    if ($staff->active == 0) {

                        return $this->error('your account is not active , try contacting admin');
                    } elseif ($staff->remove == 1) {

                        return $this->error('you have been removed by admin , try contacting admin');
                    } elseif ($staff->ban == 1) {

                        return $this->error('you have been banned by admin , try contacting admin');
                    }


                    // validation from firebase
                    return 'ready to send otp';

                    if (true) { //write otp result if success

                        $activity_log = new Activity_log();
                        $activity_log->log = $staff['username'] . ' (Staff) has logged in as staff with email ';
                        $activity_log->action = 'logged in';
                        $activity_log->save();
                        $staff->profile_pic =  URL::to('/') . '/images/registered/' . $staff->profile_pic;
                        $succes = [
                            'success' => ' doctor logged in ',
                            'token' => $staff->createToken('staff-token')->accessToken,
                            'logged_in' => $staff,
                        ];
                        return $this->success($succes);
                    }



                    //if otp fails any how write respone code here


                } elseif ($req->category == 'Doctor') {

                    $doctor = Doctor::where('phone', $req->number)->first();

                    if ($doctor == null) {

                        return $this->error('This phone number for ' . $req->category . ' is not present in doctor table');
                    }

                    if ($doctor->active == 0) {

                        return $this->error('your account is not active , try contacting admin');
                    } elseif ($doctor->remove == 1) {

                        return $this->error('you have been removed by admin , try contacting admin');
                    } elseif ($doctor->ban == 1) {

                        return $this->error('you have been banned by admin , try contacting admin');
                    }


                    // validation from firebase
                    return 'ready to send otp';


                    if (true) {
                        $activity_log = new Activity_log();
                        $activity_log->log = $doctor['username'] . ' (doctor) has logged in as doctor with email ';
                        $activity_log->action = 'logged in';
                        $activity_log->save();
                        $doctor->profile_pic =  URL::to('/') . '/images/registered/' . $doctor->profile_pic;
                        $succes = [
                            'success' => ' doctor logged in ',
                            'token' => $doctor->createToken('doctor-token')->accessToken,
                            'logged_in' => $doctor,
                        ];
                        return $this->success($succes);
                    }



                    //if otp fails any how write respone code here


                } elseif ($req->category == 'Admin') {

                    $admin = Admin::where('phone', $req->number)->first();
                    if ($admin == null) {
                        return $this->error('This number  for ' . $req->category . ' is not present in admin table');
                    }
                    if ($admin->active == 0) {
                        return $this->error('your account is not active , try contacting admin');
                    } elseif ($admin->remove == 1) {

                        return $this->error('you have been removed by admin , try contacting admin');
                    } elseif ($admin->ban == 1) {

                        return $this->error('you have been banned by admin , try contacting admin');
                    }


                    // validation from firebase
                    return 'ready to send otp';


                    if (true) {
                        $activity_log = new Activity_log();
                        $activity_log->log = $admin['username'] . ' (admin) has logged in as admin with email ';
                        $activity_log->action = 'logged in';
                        $activity_log->save();
                        $admin->profile_pic =  URL::to('/') . '/images/registered/' . $admin->profile_pic;
                        $succes = [
                            'success' => ' admin logged in ',
                            'token' => $admin->createToken('admin-token')->accessToken,
                            'logged_in' => $admin,
                        ];
                        return $this->success($succes);
                    }


                    //if otp fails any how write respone code here



                }
            } elseif ($req->has('otp') && $req->has('number')) {

                return $this->error('invalid attempt , hit otp button');
            }
            //end otp and phone number
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function logout(Request $request)
    {
        try {
            $user = Auth::user();
            if ($request->allDevice) {
                $user->tokens->each(function ($token) {
                    $token->delete();
                });
                return $this->success('Logged Out from all devices !!');
            }
            $userToken = $user->token();
            $userToken->delete();
            return $this->success('Logged Out Successfully !!');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
