<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Activity_log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Admin;
use App\Models\Staff;
use App\Models\Doctor;
use App\Models\Manager;
use App\Models\activity_logs;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Traits\ResponseAPI;
use Exception;

class AdminController extends Controller
{
  use ResponseAPI;

  public function storeAdmin(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        'username' => 'required',
        'phone' => 'required|digits:10|numeric|unique:doctor|unique:admin|unique:staff|unique:manager',
        'emphone' => 'nullable|digits:10|numeric|unique:doctor|unique:admin|unique:staff|unique:manager',
        'email' => 'required|email',
        'password' => 'required',
        'profile_pic' => 'required|mimes:jpg,png,jpeg|max:10000|image',
      ]);

      if ($validator->fails()) {
        return response($validator->errors(), 401);
      }

      $admin_id = Admin::select('id')->orderBy('id', 'desc')->first()['id'] + 1;

      $image_name = 'AID' . $admin_id . '.' . $req->file('profile_pic')->getClientOriginalExtension();
      $a =  $req->profile_pic->move(public_path('patient'), $image_name);

      $store = new Admin();
      $store->username = $req->username;
      $store->password = md5($req->password);
      $store->email = $req->email;
      $store->phone = $req->phone;
      $store->emphone = $req->emphone;
      $store->active = 1;
      $store->ban = 0;
      $store->remove = 0;
      $store->profile_pic = $image_name;

      $stored = $store->save();

      if ($stored == 1) {
        return $this->success("Admin inserted", 200);
      }
    } catch (Exception $e) {
      return $this->error('insertion failed', 404);
    }
  }


  public function adminList()
  {
    $list = admin::where([['active', '=', 1], ['remove', '=', 0]])->get();
    return $this->success($list, 200);
  }

  public function adminListByid(Request $req)
  {
    $validator = Validator::make($req->all(), [
      "id" => "required"
    ]);

    foreach ($validator->messages()->getMessages() as $field_name => $messages) {
      foreach ($messages as $message) {
        return $this->success($message, 200);
      }
    }


    $data =  admin::where([["active", '=', 1], ["remove", '=', 0], ["id", '=', $req->id]])->get();
    if ($data == "[]") {
      return $this->error('No Record found', 404);
    } else {
      return $this->success($data, 200);
    }
  }


  public function adminDelete($aid = null)
  {
    if ($aid == null) {
      return $this->error('invalid id', 404);
    }

    $check_admin = Admin::find($aid);

    if ($check_admin == null) {
      return $this->error('invalid id', 404);
    }

    $check_admin->remove = 1;
    $updated = $check_admin->update();

    $who = Auth::user();
    $check_user = substr($who->profile_pic, 0, 3);

    if ($updated == 1) {
      $activity_log = new Activity_log();
      $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has removed admin - ' . $check_admin->username;
      $activity_log->action = 'Removed Admin';
      $activity_log->save();
      return $this->success('admin removed successfully', 200);
    }
  }

  public function adminBanPermit(Request $req)
  {
    $validator = Validator::make($req->all(), [
      "id" => "required",
      "ban" => "required",
      "log" => "required",
      "time" => "required"
    ]);

    foreach ($validator->messages()->getMessages() as $field_name => $messages) {
      foreach ($messages as $message) {
        return $this->success($message, 200);
      }
    }


    if ($req->ban == 0) {
      $updateBan = admin::find($req->id);
      $updateBan->ban = 1;

      if ($updateBan->save()) {
        $activity = new  activity_logs();
        $activity->log = $req->log;
        $activity->action = "User banned";
        $activity->time = $req->time;
        $activity->save();
        return $this->success('Change Successfull', 200);
      } else {
        return $this->error('No record found or Update Failure', 404);
      }
    } else if ($req->ban == 1) {
      $updateBan = admin::find($req->id);
      $updateBan->ban = 0;

      if ($updateBan->save()) {
        $activity = new  activity_logs();
        $activity->log = $req->log;
        $activity->action = "User unbanned";
        $activity->time = $req->time;
        $activity->save();
        return response()->json(['message' => 'Change Successfull'], 200);
      } else {
        return $this->error('No record found or Update Failure', 404);
      }
    }
  }

  public function adminUpdate(Request $req)
  {
    $validator = Validator::make($req->all(), [
      "id" => "required",
      'username' => 'required',
      'email' => 'required|unique:Admin|unique:Doctor|unique:Staff|unique:Manager',
      "phone" => 'required|unique:Admin|unique:Doctor|unique:Staff|unique:Manager',
      "emphone" => "required",
      "log" => "required",
      "time" => "required"
    ]);


    foreach ($validator->messages()->getMessages() as $field_name => $messages) {
      // Go through each message for this field.
      foreach ($messages as $message) {
        return $this->success($message, 200);
      }
    }

    $adminData = Admin::find($req->id);
    $adminData->username = $req->username;
    $adminData->email = $req->email;
    $adminData->phone = $req->phone;
    $adminData->emphone = $req->emphone;
    if (isset($req->password)) {
      $adminData->password = md5($req->password);
    }
    $activity = new activity_logs();
    $activity->log = $req->log;
    $activity->action = "Profile Updated";
    $activity->time = $req->time;
    $activity->save();

    if ($adminData->save() == 1) {
      return $this->success('Success', 404);
    } else {
      return $this->error('Failure', 404);
    }
  }

  public function getAdminByName(Request $req)
  {
    $validator = Validator::make($req->all(), [
      "username" => "required"
    ]);

    foreach ($validator->messages()->getMessages() as $field_name => $messages) {
      foreach ($messages as $message) {
        return $this->success('Success', 200);
      }
    }
    $username = $req->username;
    $name = Admin::where('username', 'like', "%$req->username%")->orWhere('email', 'like', "%$req->username%")->orWhere('phone', 'like', "%$req->username%")->orWhere('emphone', 'like', "%$req->username%")->get();
    //return response()->json(['data'=>$name],200);


    if ($name != '[]') {
      return $this->success($name, 200);
    } else {
      return $this->error('No record found', 404);
    }
  }
}
