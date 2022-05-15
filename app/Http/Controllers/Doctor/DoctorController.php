<?php

namespace App\Http\Controllers\Doctor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Doctor;
use App\Models\Admin;
use App\Models\Manager;
use App\Models\Staff;
use App\Models\Activity_log;
use App\Models\activity_logs;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class DoctorController extends Controller
{
  use ResponseAPI;
  public function insertDoctor(Request $req)
  {
    try {
      $validator = Validator::make(
        $req->all(),
        [
          'date' => "required",
          "username" => "required",
          "branch" => "required",
          "speciality" => "required",
          "phone" => "required|unique:Admin|unique:Doctor|unique:Staff|unique:manager",
          "emphone" => "required",
          "email" => "required|unique:Admin|unique:Doctor|unique:Staff|unique:manager",
          "new_patient" => "required",
          "emergency_pay" => "required",
          "scheduled_pay" => "required",
          "amount" => "required",
          "perdmy" => "required",
          "password" => "required",
          "log" => "required",
          "time" => "required"
        ]
      );

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }

      $docInsert = new Doctor();
      $activity = new Activity_log();
      $docInsert->date = $req->date;
      $docInsert->username = $req->username;
      $docInsert->branch = $req->branch;
      $docInsert->speciality = $req->speciality;
      $docInsert->phone = $req->phone;
      $docInsert->emphone = $req->emphone;
      $docInsert->password = md5($req->password);
      $docInsert->email = $req->email;

      if ($req->hasfile('profile_pic')) {
        $file = $req->file('profile_pic');
        $ext = $file->getClientOriginalExtension();
        $filename = time() . "." . $ext;
        $file->move('profileImages', $filename);
        $docInsert->profile_pic = $filename;
        $docInsert->save();
      }
      $docInsert->new_patient = $req->new_patient;
      $docInsert->emergency_pay = $req->emergency_pay;
      $docInsert->scheduled_pay = $req->scheduled_pay;
      $docInsert->amount - $req->amount;
      $docInsert->perdmy = $req->perdmy;
      $docInsert->active = 0;
      $docInsert->ban = 0;
      $docInsert->remove = 0;
      $activity->log = $req->log;
      $activity->action = "Doctor Registered";
      $activity->time = $req->time;

      $insertStatus =  $docInsert->save();
      $activityStatus = $activity->save();

      if (($insertStatus == 1) && ($activityStatus == 1)) {
        return response()->json(['message' => 'Data Insertion success']);
      } else {
        return $this->error('Data Insertion Failure');
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  public function viewDoctor()
  {
    try {
      $docList = Doctor::where([["active", '=', 1], ['remove', '=', 0]])->get();
      return response()->json(['data' => $docList], 200);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }



  public function editDoctor(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "id" => "required",
        "username" => "required",
        "email" => "required||unique:Admin|unique:Doctor|unique:Staff|unique:Manager",
        "phone" => "required|unique:Admin|unique:Doctor|unique:Staff|unique:Manager",
        "emphone" => "required",
        "branch" => "required",
        "speciality" => "required",
        "perdmy" => "required",
        "amount" => "required",
        "log" => "required",
        "time" => "required",
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }
      $updatedoctor = [
        "username" => $req->username,
        "email" => $req->email,
        "phone" => $req->phone,
        "emphone" => $req->emphone,
        "branch" => $req->branch,
        "speciality" => $req->speciality,
        "perdmy" => $req->perdmy,
        "amount" => $req->amount,
      ];
      if (isset($req->password)) {
        $updatedoctor['password'] = md5($req->password);
      }
      $updateDoc = new Doctor();
      $resUpdateDoc = $updateDoc::where('id', '=', $req->id)->update($updatedoctor);

      $activity = new activity_logs();
      $activity->log = $req->log;
      $activity->action = "Profile Updated";
      $activity->time = $req->time;
      $activity->save();
      if ($resUpdateDoc == 1) {
        return response()->json(['message' => 'Success'], 200);
      } else {
        return $this->error('Failure');
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  public function deleteDoctor(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "id" => "required",
        "log" => "required",
        "time" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['data' => $message], 200);
        }
      }

      $delDoc =  Doctor::find($req->id);
      if ($delDoc != null) {
        $delRes =  $delDoc->delete();
        if ($delRes == 1) {
          $activity = new activity_logs();
          $activity->log = $req->log;
          $activity->action = "User Deleted";
          $activity->time = $req->time;
          $activity->save();
          return response()->json(['message' => 'Deletion  Success'], 200);
        } else {
          return $this->error('Deletion Failure');
        }
      } else {
        return $this->error('No Record found', 404);
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }




  public function doctor_byID(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "id" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }

      $data =  Doctor::where([["active", '=', 1], ["remove", '=', 0], ["id", '=', $req->id]])->get();
      if ($data == "[]") {
        return response()->json(['message' => 'No record found'], 200);
      } else {
        return response()->json(['data' => $data], 200);
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  public function doctorBanPermit(Request $req)
  {
    try {

      $validator = Validator::make($req->all(), [
        "id" => "required",
        "ban" => "required",
        "log" => "required",
        "time" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }


      if ($req->ban == 0) {
        $updateBan = Doctor::where("id", "=", $req->id)->update(["ban" => 1]);
        if ($updateBan == 1) {
          $activity = new activity_logs();
          $activity->log = $req->log;
          $activity->action = "User Banned";
          $activity->time = $req->time;
          $activity->save();
          return response()->json(['message' => 'Status Changed'], 200);
        } else {
          return $this->error('No record found or Update Failure');
        }
      } else if ($req->ban == 1) {
        $updateBan = Doctor::where("id", "=", $req->id)->update(["ban" => 0]);
        if ($updateBan == 1) {
          $activity = new activity_logs();
          $activity->log = $req->log;
          $activity->action = "User unbanned";
          $activity->time = $req->time;
          $activity->save();
          return response()->json(['message' => 'Status Changed'], 200);
        } else {
          return $this->error('No record found or Update Failure');
        }
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }

  public function getDoctorByName(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "username" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }
      $username = $req->username;
      $name = Doctor::where('username', 'like', "%$req->username%")->orWhere('email', 'like', "%$req->username%")->orWhere('branch', 'like', "%$req->username%")->orWhere('phone', 'like', "%$req->username%")->orWhere('emphone', 'like', "%$req->username%")->get();
      return response()->json(['data' => $name], 200);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }
}
