<?php

namespace App\Http\Controllers\EmployeeAttendance;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\activity_log;
use App\Models\Admin;
use App\Models\Centre;
use App\Models\Staff;
use App\Models\Doctor;
use App\Models\Location_Report;
use App\Models\Manager;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class EmployeeAttendanceController extends Controller
{
    use ResponseAPI;
    function employee_attendance(Request $req)
    {
        try {
            if ($req->date == null) {
                $start_date = date('Y-m-d 00:00:00');
                $end_date = date('Y-m-d 23:59:59');
            } else {
                $validator = Validator::make($req->all(), [
                    'date' => "required|date_format:Y-m-d",
                ]);

                if ($validator->fails()) {
                    return response()->json([
                        'message' => 'validation error',
                        'error' => $validator->errors()
                    ], 403);
                }

                $start_date = $req->date . " 00:00:00";
                $end_date = $req->date . " 23:59:59";
            }

            $location_report = Location_Report::whereDate('date', '<=', $end_date)
                ->whereDate('date', '>=', $start_date)
                ->groupBy('employee')->orderBy('date', 'desc')
                ->get();

            if ($location_report->isEmpty()) {
                
                return $this->error('not found',404);
            }

            $data = [];

            foreach ($location_report as $l) {

                $str = $l->employee;
                $emp_id = preg_replace('/[^0-9.]+/', '', $str);
                $who = substr($str, 0, 3);
                // $branch = substr('SIDAAB12',3);
                $branch = preg_replace('/[^A-Z.]+/', '', substr($str, 3));
                $username = '';

                switch ($who) {
                    case 'AID': {
                            $username = Admin::find($emp_id);
                            if ($username != null) {
                                $username = $username->username;
                            } else {
                                return $this->error('not found',404);
                            }
                        }
                        break;

                    case 'SID': {
                            $username = Staff::find($emp_id);
                            if ($username != null) {
                                $username = $username->username;
                            } else {
                                return $this->error('not found',404);
                            }
                        }
                        break;

                    case 'DID': {
                            $username = Doctor::find($emp_id);
                            if ($username != null) {
                                $username = $username->username;
                            } else {
                                return $this->error('not found',404);
                            }
                        }
                        break;

                    case 'MID': {
                            $username = Manager::find($emp_id);
                            if ($username != null) {
                                $username = $username->username;
                            } else {
                                return $this->error('not found',404);
                            }
                        }
                        break;

                    default: {
                        }
                }

                if ($l->status != 'later') {

                    //check in
                    $raw_data = Location_Report::where([['employee', $l->employee], ['status', 'login']])
                        ->whereDate('date', '<=', $end_date)
                        ->whereDate('date', '>=', $start_date)
                        ->orderBy('date', 'desc')
                        ->first();

                    if ($raw_data != null) {
                        $check_in = date('h:i A', strtotime($raw_data->date));
                        $clock_in_location = $raw_data->address;
                    } else {
                        $check_in = null;
                        $clock_in_location = null;
                    }


                    //check out
                    $raw_data = Location_Report::where([['employee', $l->employee], ['status', 'logout']])
                        ->whereDate('date', '<=', $end_date)
                        ->whereDate('date', '>=', $start_date)
                        ->orderBy('date', 'desc')
                        ->first();

                    if ($raw_data != null) {
                        $check_out = date('h:i A', strtotime($raw_data->date));
                        $clock_out_location = $raw_data->address;
                    } else {
                        $check_out = null;
                        $clock_out_location = null;
                    }


                    //present location
                    $raw_data = Location_Report::where([['employee', $l->employee], ['status', 'present']])
                        ->orderBy('date', 'desc')
                        ->whereDate('date', '<=', $end_date)
                        ->whereDate('date', '>=', $start_date)
                        ->first();

                    if ($raw_data != null) {
                        $present_location = $raw_data->address;
                    } else {
                        $present_location = null;
                    }
                } else {
                    $clock_in_location = null;
                    $present_location = null;
                    $check_out = null;
                    $clock_out_location = null;

                    //check in
                    $raw_data = Location_Report::where([['employee', $l->employee], ['status', 'later']])
                        ->whereDate('date', '<=', $end_date)
                        ->whereDate('date', '>=', $start_date)
                        ->first();

                    if ($raw_data != null) {
                        $check_in = date('h:i A', strtotime($raw_data->date));
                        $clock_in_location = $raw_data->address;
                    } else {
                        $check_in = null;
                        $clock_in_location = null;
                    }
                }

                if ($branch != null) {
                    $branch = Centre::select('centre_name')->where('code', $branch)->get();
                    if ($branch->count()) {
                        $branch = $branch[0]['centre_name'];
                    }
                }

                $type = $l->type;

                $data[] = [
                    'username' => $username,
                    'branch' => $branch,
                    'clock_in' => $check_in,
                    'clock_in_location' => $clock_in_location,
                    'present_location' => $present_location,
                    'clock_out' => $check_out,
                    'clock_out_location' => $clock_out_location,
                    'type' => $type,
                    'map' => [
                        'employee_id' => $l->employee,
                        'date' => date("Y-m-d", strtotime($l->date))
                    ],
                ];
            }

            return response()->json([
                'message' => 'employee_attendance_fetched',
                'data' => $data
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    function employee_attendance_map(Request $req)
    {
        try {

            $validator = Validator::make($req->all(), [
                'date' => "required|date_format:Y-m-d",
                'employee_id' => "required",
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'validation error',
                    'error' => $validator->errors()
                ], 403);
            }

            $start_date = $req->date . " 00:00:00";
            $end_date = $req->date . " 23:59:59";
            $emp_id = $req->employee_id;

            $coordinate = Location_Report::where([['employee', $emp_id], ['coordinate', '!=', null]])
                ->whereDate('date', '<=', $end_date)
                ->whereDate('date', '>=', $start_date)
                ->select('coordinate')->get();
            if ($coordinate->count()) {
                return response()->json([
                    'message' => 'coordinates fetched',
                    'data' => $coordinate,
                ], 200);
            }

            return $this->error('not found',404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
