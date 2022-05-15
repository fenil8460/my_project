<?php

namespace App\Http\Controllers\staff;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Centre;
use App\Traits\ResponseAPI;
use Exception;

use function PHPUnit\Framework\isEmpty;

class StaffPageController extends Controller
{
    use ResponseAPI;
    //common function for available bed and view dialysing patient
    function function_for_dialysing_patient()
    {
        try {
            $staff = Auth::user();

            if (!is_null($staff)) {
                $cp = [];
                $patient = Patient::select('patient_id')->where([['branch_name', $staff->branch], ['blocked', '0']])->get();
                foreach ($patient as $p) {
                    array_push($cp, $p->patient_id);
                }

                $ca = [];
                $currently_dialysing = Appointment::select('patient_id')->where('end_time', null)->whereIn('patient_id', $cp)->distinct()->get();

                foreach ($currently_dialysing as $cd) {
                    array_push($ca, $cd->patient_id);
                }

                return $patient = Patient::select('patient_id')->where([['branch_name', $staff->branch], ['blocked', '0']])->whereIn('patient_id', $ca)->get();
            } else {
                return response()->json([
                    'message' => 'invalid'
                ], 404);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
    //end common function



    function view_particular_branch_patient()
    {
        try {
            // return $this->staf;
            $staff = Auth::user();

            if (!is_null($staff)) {
                $patient = Patient::where([['branch_name', $staff->branch], ['blocked', '0']])->get();

                if (!is_null($patient)) {
                    return response()->json([
                        'message' => 'success, patients found with this branch (' . $staff->branch . ')',
                        'data' => $patient,
                    ], 200);
                }

                return response()->json([
                    'message' => 'unable to fetch patient , no patient found',
                ], 400);
            } else {
                return response()->json([
                    'message' => 'invalid'
                ], 404);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    function view_dialysing_patient()
    {
        try {

            $staff = Auth::user();

            $cp = [];
            $patient = Patient::select('patient_id')->where([['branch_name', $staff->branch], ['blocked', '0']])->get();
            foreach ($patient as $p) {
                array_push($cp, $p->patient_id);
            }

            $currently_dialysing = Appointment::query()
                ->with(array('patient' => function ($query) {
                    $query->select('name', 'patient_id');
                }))->where('end_time', null)->select('appointment_id', 'patient_id', 'start_time')->whereIn('patient_id', $cp)->get();


            if (!empty($currently_dialysing)) {

                return response()->json([
                    'success' => 'fetched dialysing patient',
                    'data' => $currently_dialysing,
                ], 200);
            }

            return response()->json([
                'message' => 'no patient currently dialysing',
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    function view_available_beds()
    {
        try {
            $staff = Auth::user();
            if (!is_null($staff)) {
                $beds = Centre::select('beds_count')->where('code', $staff->branch)->get()[0]['beds_count'];

                $dialysing_patient = $this->function_for_dialysing_patient();

                $count_dialsying_patient = 0;

                foreach ($dialysing_patient as $dp) {
                    $count_dialsying_patient++;
                }

                $count_dialsying_patient;
                if ($beds > 0) {
                    return response()->json([
                        'message' => 'data fetched for beds count',
                        'data' => [
                            'total_beds' => $beds,
                            'curresntly_dialysing' => $count_dialsying_patient,
                            'availbale_beds' => $beds - $count_dialsying_patient,
                        ],
                    ]);
                }

                return response()->json([
                    'error' => 'bed count not found',
                ], 500);
            } else {
                return response()->json([
                    'message' => 'invalid'
                ], 404);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    function view_branch_name()
    {
        try {
            $staff = Auth::user();
            $branch_details = Centre::select('centre_name', 'code')->where('code', $staff->branch)->first();
            if (!is_null($branch_details)) {
                return response()->json([
                    'message' => 'success , fetched branch name and code',
                    'data' => $branch_details,
                ], 200);
            }

            return response()->json([
                'message' => 'failed , to get branch details'
            ], 400);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
