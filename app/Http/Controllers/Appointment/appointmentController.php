<?php

namespace App\Http\Controllers\Appointment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ResponseAPI;
use App\Models\Centre;
use App\Models\Patient;
use App\Models\booked_appointments;
use App\Models\Appointment;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Exception;

class appointmentController extends Controller
{

  use ResponseAPI;
  public function getAppointment()
  {
    try {
      $appointement_list = booked_appointments::select('Patient.patient_id', 'Patient.name', 'booked_appointments.slot', 'booked_appointments.date', 'Centre.beds_count', 'booked_appointments.bed_id', 'booked_appointments.cancelled', 'booked_appointments.emergency')->join('Patient', 'Patient.patient_id', '=', 'booked_appointments.patient_id')->join('Centre', 'Centre.code', '=', 'Patient.branch_name')->get();
      return $this->success($appointement_list);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  //Code to return appointment details where branch_code and the date is received
  public function graphAppointmentInfo(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "branch_code" => "required",
        "date" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }

      $graphAppoint = booked_appointments::select('branch_code', DB::raw('DATE(`date`) as Date'), DB::raw('count(*) as Total'))->where([['branch_code', '=', $req->branch_code], [DB::raw('DATE(`date`)'), '<=', $req->date]])->groupBy(DB::raw('DATE(`date`)'), 'branch_code')->get();
      return $this->success($graphAppoint);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }

  //code to return appointment details between two given date
  //MYSQL created are as per php code
  public function graphAppointmentBetweenDates(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "branch_code" => "required",
        "start_date" => "required",
        "end_date" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }

      $graphByDate = booked_appointments::select('branch_code', DB::raw('DATE(`date`) as Date'), DB::raw('count(*) as Total'))->where('branch_code', '>=', $req->branch_code)->whereBetween('date', [$req->start_date, $req->end_date])->get();
      return $this->success($graphByDate);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  //return the data of the week
  public function graphAppointmentTimeGap(Request $req)
  {
    try {
      $date = \Carbon\Carbon::today()->subDays(7);
      $wek = booked_appointments::where('date', '>=', $date)->get();

      return $this->success($wek);
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }


  //show data of last one month
  public function appointmentInfoLastMonths(Request $req)
  {
    try {
      $validator = Validator::make($req->all(), [
        "month" => "required"
      ]);

      foreach ($validator->messages()->getMessages() as $field_name => $messages) {
        foreach ($messages as $message) {
          return response()->json(['message' => $message], 200);
        }
      }

      if ($req->month == 1) {
        $data = booked_appointments::where('date', '>', Carbon::now()->subMonth($req->month))->get();
        return $this->success($data);
      } else if ($req->month == 6) {
        $data = booked_appointments::where('date', '>', Carbon::now()->subMonth($req->month))->get();
        return $this->success($data);
      } else if ($req->month == 12) {
        $data = booked_appointments::where('date', '>', Carbon::now()->subMonth($req->month))->get();
        return $this->success($data);
      } else {
        return $this->error('Enter month 1 or 6 or 12');
      }
    } catch (Exception $e) {
      return $this->error($e->getMessage());
    }
  }
}
