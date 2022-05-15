<?php

namespace App\Http\Controllers\HomeDialysis;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  App\Models\home_dialysis;
use  App\Models\Staff;
use  App\Models\machines;
use  App\Models\Doctor;
use  App\Models\patient;
use  App\Models\Centre;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Traits\ResponseAPI;
use Exception;

class HomeDialysisController extends Controller
{
  use ResponseAPI;

  public function homeDialysisList(Request $req)
  {
    try {

      $staff_id = Auth::user()->id;

      $hd_patient_access = Staff::find($staff_id)->hd_patient;

      if ($hd_patient_access == 'yes') {
        $data = DB::table('home_dialysis')
          ->select('patient.patient_id as PatientId', 'patient.name', 'home_dialysis.dialysis_charge', 'home_dialysis.per_hour_fee', 'home_dialysis.monthly_rental', 'home_dialysis.installation', 'home_dialysis.dialyzer', 'home_dialysis.blood_tubing', 'home_dialysis.location', 'home_dialysis.expected_starting_date', 'Staff.username as Staff Member', 'machines.machine_serial_number', 'Doctor.username as Doctor')
          ->join('Staff', 'Staff.id', '=', 'home_dialysis.staff')
          ->join('machines', 'machine_id', '=', 'home_dialysis.machine')
          ->join('Doctor', 'Doctor.id', '=', 'home_dialysis.doctor')
          ->join('patient', 'patient.patient_id', '=', 'home_dialysis.patient_id')
          ->get();
      } else {
        $data = DB::table('home_dialysis')
          ->where('staff', $staff_id)
          ->select('patient.patient_id as PatientId', 'patient.name', 'home_dialysis.dialysis_charge', 'home_dialysis.per_hour_fee', 'home_dialysis.monthly_rental', 'home_dialysis.installation', 'home_dialysis.dialyzer', 'home_dialysis.blood_tubing', 'home_dialysis.location', 'home_dialysis.expected_starting_date', 'Staff.username as Staff Member', 'machines.machine_serial_number', 'Doctor.username as Doctor')
          ->join('Staff', 'Staff.id', '=', 'home_dialysis.staff')
          ->join('machines', 'machine_id', '=', 'home_dialysis.machine')
          ->join('Doctor', 'Doctor.id', '=', 'home_dialysis.doctor')
          ->join('patient', 'patient.patient_id', '=', 'home_dialysis.patient_id')
          ->get();
      }

      if ($data->isEmpty()) {
        return $this->error('not found', 404);
      }
      return response()->json(['data' => $data], 200);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  public function homeDialysisListByDate(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "date" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }

      $data = home_dialysis::select('patient.patient_id as PatientId', 'patient.name', 'home_dialysis.dialysis_charge', 'home_dialysis.per_hour_fee', 'home_dialysis.monthly_rental', 'home_dialysis.installation', 'home_dialysis.dialyzer', 'home_dialysis.blood_tubing', 'home_dialysis.location', 'home_dialysis.expected_starting_date', 'Staff.username as Staff Member', 'machines.machine_serial_number', 'Doctor.username as Doctor')->where('home_dialysis.expected_starting_date', '<', $req->date)->join('Staff', 'Staff.id', '=', 'home_dialysis.staff')->join('machines', 'machine_id', '=', 'home_dialysis.machine')->join('Doctor', 'Doctor.id', '=', 'home_dialysis.doctor')->join('patient', 'patient.patient_id', '=', 'home_dialysis.patient_id')->get();

      if ($data->isEmpty()) {
        return $this->error('not found', 404);
      }

      return $this->success($data);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }

  /*APi for Create Home Dialysis as this API will fetch the data from two tables that are patient and home_dialysis to display the list of home dialysis`s patient */

  public function homeDialysisInsertApiOne()
  {
    try {
      $insertDt = home_dialysis::select('name', 'patient.patient_id', 'branch_name')->join('patient', 'patient.patient_id', '=', 'home_dialysis.patient_id')->get();
      if ($insertDt->isEmpty()) {
        return $this->error('not found', 404);
      }
      return response()->json(['data' => $insertDt], 200);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }

  /*Api given below will show or display the result related to the location entered that can be show in form*/
  public function homeDialysisInsertApiTwo(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "region" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return $this->success($message);
        }
      }

      $data_location = Centre::select('Staff.id as StaffId', 'Staff.username', 'Staff.branch', 'machines.machine_type', 'machines.machine_serial_number', 'home_dialysis.ro_serial', 'Doctor.id as DocID', 'Doctor.branch as DoctorBranch', 'Doctor.username as Doctor')->distinct()->where('Centre.region', '=', $req->region)->join('Staff', 'Staff.branch', '=', 'Centre.code')->join('machines', 'machines.code', '=', 'Centre.code')->join('home_dialysis', 'home_dialysis.staff', '=', 'Staff.id')->join('Doctor', 'Doctor.id', '=', 'home_dialysis.doctor')->get();

      if ($data_location->isEmpty()) {
        return $this->error('not found', 404);
      }

      return $this->success($data_location);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  public function homeDialysisInsert(Request $req)
  {
    try {

      $validator = Validator::make($req->all(), [
        "patient_id" => "required",
        "dialysis_charge" => "required",
        "per_hour_fee" => "required",
        "monthly_rental" => "required",
        "installation" => "required",
        "additional_charge" => "required",
        "add_charge_pmy" => "required",
        "reason_add_charge" => "required",
        "dialyzer" => "required",
        "blood_tubing" => "required",
        "location" => "required",
        "expected_starting_date" => "required",
        "staff" => "required",
        "doctor" => "required",
        "machine" => "required",
        "ro_serial" => "required"
      ]);

      if ($validator->fails()) {
        return $this->error($validator->errors());
      }


      $hd = new home_dialysis();
      //$hd->id = $req->id;
      $hd->patient_id = $req->patient_id;
      $hd->dialysis_charge = $req->dialysis_charge;
      $hd->per_hour_fee = $req->per_hour_fee;
      $hd->monthly_rental = $req->monthly_rental;
      $hd->installation = $req->installation;
      $hd->additional_charge = $req->additional_charge;
      $hd->add_charge_pmy = $req->add_charge_pmy;
      $hd->reason_add_charge = $req->reason_add_charge;
      $hd->dialyzer = $req->dialyzer;
      $hd->blood_tubing = $req->blood_tubing;
      $hd->location = $req->location;
      $hd->expected_starting_date = $req->expected_starting_date;
      $hd->staff = $req->staff;
      $hd->machine = $req->staff;
      $hd->doctor = $req->doctor;
      $hd->ro_serial = $req->ro_serial;

      $insert_status =  $hd->save();
      if ($insert_status == 1) {
        return $this->success('Insertion Success');
      } else {
        return $this->error('Insertion Failure');
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }

  public function getRegion()
  {
    try {
      $region = Centre::distinct('region')->select('region')->get();
      return response()->json(['data' => $region], 200);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }

  public function getOtherHDStaff(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "region" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }


      $region_data = Centre::select('Staff.id as StaffId', 'Staff.username as Staff', 'Staff.branch as StaffBranch')->distinct()->where('region', $req->region)->join('Staff', 'Staff.branch', '=', 'Centre.code')->get();
      return $this->success($region_data);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  public function getOtherHDMachine(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "region" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }
      $region_data = Centre::select('machines.machine_type', 'machines.machine_serial_number')->distinct()->where('region', $req->region)->join('machines', 'machines.code', '=', 'Centre.code')->get();
      return $this->success($region_data);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }



  //Not working accurately
  public function getOtherHDDoctor(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "region" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }

      $doctor = Centre::select('Doctor.username', 'Doctor.id', 'Doctor.branch')->where("region", $req->region)->join('Doctor', 'Doctor.branch', 'like', "Centre.code")->get();
      return $this->success($doctor);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }



  public function deleteHomeDialysisPatient(Request $req)
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


      $hd = home_dialysis::find($req->id);
      if ($hd != null) {
        if ($hd->delete()) {
          return $this->success('Deletion Success');
        } else {
          return $this->error('Deletion Failure');
        }
      } else {
        return $this->error('No Record Exist');
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }



  public function updateHomeDialysisPatient(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "id" => "required",
        "dialysis_charge" => "required",
        "per_hour_fee" => "required",
        "monthly_rental" => "required",
        "installation" => "required",
        "additional_charge" => "required",
        "add_charge_pmy" => "required",
        "reason_add_charge" => "required",
        "dialyzer" => "required",
        "blood_tubing" => "required",
        "location" => "required",
        "expected_starting_date" => "required",
        "staff" => "required",
        "machine" => "required",
        "doctor" => "required",
        "ro_serial" => "required"
      ]);

      if ($validator->fails()) {
        return $this->error($validator->errors());
    }

      $update = home_dialysis::where('patient_id', '=', $req->id)->update(
        [
          "dialysis_charge" => $req->dialysis_charge,
          "per_hour_fee" => $req->per_hour_fee,
          "monthly_rental" => $req->monthly_rental,
          "installation" => $req->monthly_installation,
          "additional_charge" => $req->additional_charge,
          "add_charge_pmy" => $req->add_charge_pmy,
          "reason_add_charge" => $req->reason_add_charge,
          "dialyzer" => $req->dialyzer,
          "blood_tubing" => $req->blood_tubing,
          "location" => $req->location,
          "expected_starting_date" => $req->expected_starting_date,
          "staff" => $req->staff,
          "machine" => $req->machine,
          "doctor" => $req->doctor,
          "ro_serial" => $req->ro_serial
        ]
      );

      if ($update == 1) {
         return $this->success('Update Success');
      } else {
        return $this->error('Update Failure');
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  public function fetchHDpatient(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "id" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 403);
        }
      }

      $fetch = home_dialysis::join('patient', 'patient.patient_id', '=', 'home_dialysis.patient_id')->get();

      if ($fetch->isEmpty()) {
        return $this->error('not found', 404);
      }

      return response()->json(['data' => $fetch], 200);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }

  public function fetchDoctoronId(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "doctor_id" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }

      $doc = Doctor::where('id', $req->doctor_id)->get();
      if ($doc->isEmpty()) {
        return $this->error('No record found',404);
      } else {
        return $this->success($doc);
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  public function fetchStaffonId(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "staff_id" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }

      $staff = Staff::where('id', $req->staff_id)->get();
      if ($staff->isEmpty()) {
        return response()->json(['message' => 'No record found'], 404);
        return $this->error('No record found',404);

      } else {
        return response()->json(['data' => $staff], 200);
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  public function fetchMachineonId(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "machine_id" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }

      $machine = DB::table('machines')->where('machine_id', $req->machine_id)->get();
      if ($machine->isEmpty()) {
        return response()->json(['message' => 'No record found'], 404);
      } else {
        return response()->json(['data' => $machine], 200);
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }



  public function fetch_home_dialysis_patient_ById(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "patient_id" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }
      $patient = home_dialysis::where('patient_id', $req->patient_id)->get();

      if ($patient->isEmpty()) {
        return $this->error('not found', 404);
      }

      return response()->json(['data' => $patient], 200);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }



  public function dialyzer_tubing_graph()
  {
    try {
      $dialyzer = patient::select('patient.patient_id', 'patient.branch_name', 'home_dialysis.dialyzer', 'home_dialysis.blood_tubing')->join('home_dialysis', 'home_dialysis.patient_id', '=', 'patient.patient_id')->get();
      return response()->json(['data' => $dialyzer], 200);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }

  public function patient_charges_graph()
  {
    try {
      $charges = patient::select('patient.patient_id', 'patient.branch_name', 'home_dialysis.installation', 'home_dialysis.monthly_rental', 'home_dialysis.dialysis_charge')->join('home_dialysis', 'home_dialysis.patient_id', '=', 'patient.patient_id')->get();
      return response()->json(['data' => $charges], 200);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }

  public function patient_per_location_graph()
  {
    try {
      $location = DB::table('patient')->select(DB::raw('count(location) as Patient,location'))->join('home_dialysis', 'home_dialysis.patient_id', '=', 'patient.patient_id')->groupBy('location')
        ->get();

      if ($location->isEmpty()) {
        return $this->error('not found', 404);
      }

      return response()->json(['data' => $location], 200);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }
}
