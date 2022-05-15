<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Manager;
use App\Models\Admin;
use App\Models\doctor;
use App\Models\Staff;
use App\Models\Activity_log;
use App\Models\activity_logs;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class ManagerController extends Controller
{
     use ResponseAPI;
     public function insertManager(Request $req)
     {
          try {
               $validator = Validator::make($req->all(), [
                    "mid" => "required",
                    "username" => "required",
                    "email" => "required|unique:Admin|unique:Staff|unique:Doctor|unique:Manager",
                    "designation" => "required",
                    "phone" => "required|unique:Admin|unique:Staff|unique:Doctor|unique:Manager",
                    "emphone" => "required",
                    "branch" => "required",
                    "role" => "required",
                    "password" => "required",
                    "profile_pic" => "required:file|mimes:jpeg,jpg,png,gif|max:2048",
                    "log" => "required",
                    "action" => "required",
                    "time" => "required"
               ]);

               if ($validator->fails()) {
                    return $this->error($validator->errors());
               }

               $manInsert = new Manager();
               $activity = new Activity_log();
               $manInsert->mid = $req->mid;
               $manInsert->username = $req->username;
               $manInsert->email = $req->email;
               $manInsert->designation = $req->designation;
               $manInsert->phone = $req->phone;
               $manInsert->emphone  = $req->emphone;
               $manInsert->branch = $req->branch;
               $manInsert->role = $req->role;
               $manInsert->password = md5($req->password);

               if ($req->hasfile('profile_pic')) {
                    $file = $req->file('profile_pic');
                    $ext = $file->getClientOriginalExtension();
                    $filename = time() . "." . $ext;
                    $file->move('profileImages', $filename);
                    $manInsert->profile_pic = $filename;
                    $manInsert->save();
               }
               $manInsert->active = 1;
               $manInsert->remove = 0;
               $manInsert->ban = 0;
               $activity->log = $req->log;
               $activity->action = $req->action;
               $activity->time = $req->time;


               if (($manInsert->save()) && ($activity->save())) {
                    return $this->success("Insertion Success");
               } else {
                    return $this->error("Insertion Failure");
               }
          } catch (Exception $e) {
               return $this->error($e->getMessage());
          }
     }

     public function viewManager()
     {
          try {
               //  return 32;
               $managerList = manager::where([["active", "=", 1], ["remove", '=', 0]])->get();
               return $this->success($managerList);
          } catch (Exception $e) {
               return $this->error($e->getMessage());
          }
     }

     public function editManager(Request $req)
     {
          try {
               $validator = Validator::make($req->all(), [
                    "id" => "required",
                    "email" => "required|unique:Admin|unique:Staff|unique:Doctor|unique:Manager",
                    "username" => "required",
                    "phone" => "required|unique:Admin|unique:Staff|unique:Doctor|unique:Manager",
                    "emphone" => "required",
                    "designation" => "required",
                    "branch" => "required",
                    "role" => "required",
                    "log" => "required",
                    "time" => "required"
               ]);

               if ($validator->fails()) {
                    return $this->error($validator->errors());
               }

               $admUpdate = new manager();
               $updateManager = [
                    "email" => $req->email,
                    "username" => $req->username,
                    "phone" => $req->phone,
                    "emphone" => $req->emphone,
                    "designation" => $req->designation,
                    "branch" => $req->branch,
                    "role" => $req->role
               ];
               if (isset($req->password)) {
                    $updateManager['password'] = md5($req->password);
               }
               $updateStatus = $admUpdate::where('id', '=', $req->id)->update($updateManager);

               $activity = new activity_logs();
               $activity->log = $req->log;
               $activity->action = "Profile Updated";
               $activity->time = $req->time;
               $activity->save();


               if ($updateStatus == 1) {
                    return $this->success("Update Success");
               } else {
                    return $this->error("Update Failure");
               }
          } catch (Exception $e) {
               return $this->error($e->getMessage());
          }
     }


     public function deleteManager(Request $req)
     {
          try {
               $validator = Validator::make($req->all(), [
                    "id" => "required",
                    "log" => "required",
                    "time" => "required"
               ]);

               if ($validator->fails()) {
                    return $this->error($validator->errors());
               }


               $delAdmin =  manager::find($req->id);
               if ($delAdmin != null) {
                    $delRes =  $delAdmin->delete();
                    if ($delRes == 1) {
                         $activity = new activity_logs();
                         $activity->log = $req->log;
                         $activity->action = "User Deleted";
                         $activity->time = $req->time;
                         $activity->save();
                         return $this->success("Deletion Success");
                    } else {
                         return $this->error("Deletion Failure");
                    }
               } else {
                    return $this->error("No Record Found");
               }
          } catch (Exception $e) {
               return $this->error($e->getMessage());
          }
     }


     public function banPermitManager(Request $req)
     {
          try {
               $validator = Validator::make($req->all(), [
                    "id" => "required",
                    "ban" => "required",
                    "log" => "required",
                    "time" => "required"
               ]);

               if ($validator->fails()) {
                    return $this->error($validator->errors());
               }
               if ($req->ban == 0) {
                    $updateBan = manager::where("id", "=", $req->id)->update(["ban" => 1]);
                    if ($updateBan == 1) {
                         $activity = new activity_logs();
                         $activity->log = $req->log;
                         $activity->action = "User Banned";
                         $activity->time = $req->time;
                         $activity->save();
                         return $this->success("Status Changed");
                    } else {
                         return $this->error("No record found or Update Failure");
                    }
               } else if ($req->ban == 1) {
                    $updateBan = manager::where("id", "=", $req->id)->update(["ban" => 0]);
                    if ($updateBan == 1) {
                         $activity = new activity_logs();
                         $activity->log = $req->log;
                         $activity->action = "User unbanned";
                         $activity->time = $req->time;
                         $activity->save();
                         return $this->success("Status Changed");
                    } else {
                         return $this->error("No record found or Update Failure");
                    }
               }
          } catch (Exception $e) {
               return $this->error($e->getMessage());
          }
     }


     public function manager_byID(Request $req)
     {
          try {
               $validator = Validator::make($req->all(), [
                    "id" => "required"
               ]);

               if ($validator->fails()) {
                    return $this->error($validator->errors());
               }

               $data =  manager::where([["active", '=', 1], ["remove", '=', 0], ["id", '=', $req->id]])->get();
               if ($data == "[]") {
                    return $this->error("No record found");
               } else {
                    return $this->success($data);
               }
          } catch (Exception $e) {
               return $this->error($e->getMessage());
          }
     }


     public function getManagerByName(Request $req)
     {
          try {
               $validator = Validator::make($req->all(), [
                    "username" => "required"
               ]);

               if ($validator->fails()) {
                    return $this->error($validator->errors());
               }
               $username = $req->username;
               $name = manager::where('username', 'like', "%$req->username%")->orWhere('email', 'like', "%$req->username%")->orWhere('branch', 'like', "%$req->username%")->orWhere('phone', 'like', "%$req->username%")->orWhere('emphone', 'like', "%$req->username%")->get();


               if ($name != '[]') {
                    return $this->success($name);
               } else {
                    return $this->error("No record found");
               }
          } catch (Exception $e) {
               return $this->error($e->getMessage());
          }
     }
}
