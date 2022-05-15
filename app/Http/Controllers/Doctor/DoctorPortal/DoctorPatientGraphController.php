<?php

namespace App\Http\Controllers\doctor\doctorportal;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Blood_Report;
use App\Models\Patient;
use App\Models\Post_dialysis;
use App\Models\Pre_dialysis;
use App\Models\Renal_Report;
use App\Traits\ResponseAPI;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Exception;

class DoctorPatientGraphController extends Controller
{
    use ResponseAPI;
    public $patient_id;
    public $doctor_id;

    function verify_patient()
    {
        return $this->error('patient not found', 404);
    }

    public function __construct()
    {

        $this->middleware(function ($request, $next) {

            $this->doctor_id = Auth::user()->id;
            $is_valid_patient = Patient::select('patient_id')->where([['patient_Id', $this->patient_id], ['blocked', 0], ['doctor', $this->doctor_id]])->get();
            if (!$is_valid_patient->count()) {
                $this->verify_patient();
            }
            return $next($request);
        });
        $this->patient_id = request()->route('patient_id');
    }

    // ----------------------------------- DIALYSIS PARAMETER------------------------------------

    public function weight_graph(Request $req)
    {
        try {
            if ($req->has('weight_plot_date')) {
                $validator = Validator::make($req->all(), [
                    'weight_plot_date' => 'date|required',
                ]);
            } else {
                $validator = Validator::make($req->all(), [
                    'time_range' => 'in:1w,1m,3m,6m,1y,max|required',
                ]);
            }

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }


            if ($req->has('weight_plot_date')) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereDate('start_time', $req->weight_plot_date)
                    ->get();

                $pre_dialysis_weight = DB::table('pre_dialysis as p')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->select('weight', 'start_time')
                    ->whereIn('a.appointment_id', $app_id)
                    ->get();

                $post_dialysis_weight = DB::table('post_dialysis as p')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->select('weight', 'start_time')
                    ->whereIn('a.appointment_id', $app_id)
                    ->get();


                if ($pre_dialysis_weight->count() > 0 && $post_dialysis_weight->count() > 0) {

                    $data = [
                        'pre_dialysis' => $pre_dialysis_weight,
                        'post_dialysis' => $post_dialysis_weight,
                    ];
                    return $this->success($data, 200);
                }
                return $this->error('not found', 404);
            }


            $start_date = Carbon::now();

            if ($req->time_range == '1w')
                $end_date = $start_date->subDays(7)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1m')
                $end_date = $start_date->subMonths(1)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '3m')
                $end_date = $start_date->subMonths(3)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '6m')
                $end_date = $start_date->subMonths(6)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1y')
                $end_date = $start_date->subYear(1)->format('Y-m-d H:i:s');


            if (in_array($req->time_range, ['1w', '1m', '3m', '6m', '1y'])) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereBetween('start_time', [$end_date, date('Y-m-d H:i:s')])
                    ->get();
            } else {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->get();
            }


            if ($app_id->count() == 0) {
                return $this->error('not found', 404);
            }

            $app_id_array = [];

            foreach ($app_id as $aid)
                $app_id_array[] = $aid->appointment_id;

            $pre_dialysis_weight = DB::table('pre_dialysis as p')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->select('start_time', 'weight')
                ->whereIn('a.appointment_id', $app_id_array)
                ->get();

            $post_dialysis_weight = DB::table('post_dialysis as p')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->select('weight', 'start_time')
                ->whereIn('a.appointment_id', $app_id_array)
                ->get();


            if ($pre_dialysis_weight->count() > 0 && $post_dialysis_weight->count() > 0) {

                $data = [
                    'pre_dialysis' => $pre_dialysis_weight,
                    'post_dialysis' => $post_dialysis_weight,
                ];

                return $this->success($data, 200);
            }
            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function bp_systolic_diasystolic(Request $req)
    {
        try {
            if ($req->has('bpsd_plot_date')) {
                $validator = Validator::make($req->all(), [
                    'bpsd_plot_date' => 'date|required',
                ]);
            } else {
                $validator = Validator::make($req->all(), [
                    'time_range' => 'in:1w,1m,3m,6m,1y,max|required',
                ]);
            }

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            if ($req->has('bpsd_plot_date')) {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereDate('start_time', $req->bpsd_plot_date)
                    ->get();

                //for bp_systolic
                $pre_dialysis_bp_systolic = DB::table('pre_dialysis as p')
                    ->select('bp_systolic', 'start_time')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->whereIn('a.appointment_id', $app_id)
                    ->get();

                $post_dialysis_bp_systolic = DB::table('post_dialysis as p')
                    ->select('bp_systolic', 'start_time')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->whereIn('a.appointment_id', $app_id)
                    ->get();


                //for bp_systolic
                $pre_dialysis_bp_diasystolic = DB::table('pre_dialysis as p')
                    ->select('bp_diasystolic', 'start_time')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->whereIn('a.appointment_id', $app_id)
                    ->get();

                $post_dialysis_bp_diasystolic = DB::table('post_dialysis as p')
                    ->select('bp_diasystolic', 'start_time')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->whereIn('a.appointment_id', $app_id)
                    ->get();


                if ($pre_dialysis_bp_systolic->count() > 0 && $post_dialysis_bp_systolic->count() > 0 && $pre_dialysis_bp_diasystolic->count() > 0 && $post_dialysis_bp_diasystolic->count() > 0) {
                    $data = [
                        'bp_diasystolic_data' => [
                            'pre_dialysis' => $pre_dialysis_bp_diasystolic,
                            'post_dialysis' => $post_dialysis_bp_diasystolic,
                        ],
                        'bp_systolic_data' => [
                            'pre_dialysis' => $pre_dialysis_bp_systolic,
                            'post_dialysis' => $post_dialysis_bp_systolic,
                        ],
                    ];
                    return $this->success($data, 200);
                }

                return $this->error('not found', 404);
            }


            $start_date = Carbon::now();


            if ($req->time_range == '1w')
                $end_date = $start_date->subDays(7)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1m')
                $end_date = $start_date->subMonths(1)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '3m')
                $end_date = $start_date->subMonths(3)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '6m')
                $end_date = $start_date->subMonths(6)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1y')
                $end_date = $start_date->subYear(1)->format('Y-m-d H:i:s');

            if (in_array($req->time_range, ['1w', '1m', '3m', '6m', '1y'])) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereBetween('start_time', [$end_date, date('Y-m-d H:i:s')])
                    ->get();
            } else {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->get();
            }


            if ($app_id->count() == 0) {
                return $this->error('not found', 404);
            }

            $app_id_array = [];

            foreach ($app_id as $aid)
                $app_id_array[] = $aid->appointment_id;



            //for bp_systolic
            $pre_dialysis_bp_systolic = DB::table('pre_dialysis as p')
                ->select('bp_systolic', 'start_time')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->whereIn('a.appointment_id', $app_id_array)
                ->get();

            $post_dialysis_bp_systolic = DB::table('post_dialysis as p')
                ->select('bp_systolic', 'start_time')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->whereIn('a.appointment_id', $app_id_array)
                ->get();


            //for bp_systolic
            $pre_dialysis_bp_diasystolic = DB::table('pre_dialysis as p')
                ->select('bp_diasystolic', 'start_time')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->whereIn('a.appointment_id', $app_id_array)
                ->get();

            $post_dialysis_bp_diasystolic = DB::table('post_dialysis as p')
                ->select('bp_diasystolic', 'start_time')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->whereIn('a.appointment_id', $app_id_array)
                ->get();


            if ($pre_dialysis_bp_systolic->count() > 0 && $post_dialysis_bp_systolic->count() > 0 && $pre_dialysis_bp_diasystolic->count() > 0 && $post_dialysis_bp_diasystolic->count() > 0) {
                $data = [
                    'bp_diasystolic_data' => [
                        'pre_dialysis' => $pre_dialysis_bp_diasystolic,
                        'post_dialysis' => $post_dialysis_bp_diasystolic,
                    ],
                    'bp_systolic_data' => [
                        'pre_dialysis' => $pre_dialysis_bp_systolic,
                        'post_dialysis' => $post_dialysis_bp_systolic,
                    ],
                ];
                return $this->success($data, 200);
            }
            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function heart_rate(Request $req)
    {

        try {
            if ($req->has('hr_plot_date')) {
                $validator = Validator::make($req->all(), [
                    'hr_plot_date' => 'date|required',
                ]);
            } else {
                $validator = Validator::make($req->all(), [
                    'time_range' => 'in:1w,1m,3m,6m,1y,max|required',
                ]);
            }

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            if ($req->has('hr_plot_date')) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereDate('start_time', $req->hr_plot_date)
                    ->get();

                $pre_dialysis_heart_rate = DB::table('pre_dialysis as p')
                    ->select('heart_rate', 'start_time')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->whereIn('a.appointment_id', $app_id)
                    ->get();

                $post_dialysis_heart_rate = DB::table('post_dialysis as p')
                    ->select('heart_rate', 'start_time')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->whereIn('a.appointment_id', $app_id)
                    ->get();


                if ($pre_dialysis_heart_rate->count() > 0 && $post_dialysis_heart_rate->count() > 0) {

                    $data = [
                        'pre_dialysis' => $pre_dialysis_heart_rate,
                        'post_dialysis' => $post_dialysis_heart_rate,
                    ];
                    return $this->success($data, 200);
                }
                return $this->error('not found', 404);
            }


            $start_date = Carbon::now();

            if ($req->time_range == '1w')
                $end_date = $start_date->subDays(7)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1m')
                $end_date = $start_date->subMonths(1)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '3m')
                $end_date = $start_date->subMonths(3)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '6m')
                $end_date = $start_date->subMonths(6)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1y')
                $end_date = $start_date->subYear(1)->format('Y-m-d H:i:s');

            if (in_array($req->time_range, ['1w', '1m', '3m', '6m', '1y'])) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereBetween('start_time', [$end_date, date('Y-m-d H:i:s')])
                    ->get();
            } else {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->get();
            }


            if ($app_id->count() == 0) {
                return $this->error('not found', 404);
            }

            $app_id_array = [];

            foreach ($app_id as $aid)
                $app_id_array[] = $aid->appointment_id;

            $pre_dialysis_heart_rate = DB::table('pre_dialysis as p')
                ->select('heart_rate', 'start_time')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->whereIn('a.appointment_id', $app_id_array)
                ->get();

            $post_dialysis_heart_rate = DB::table('post_dialysis as p')
                ->select('heart_rate', 'start_time')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->whereIn('a.appointment_id', $app_id_array)
                ->get();


            if ($pre_dialysis_heart_rate->count() > 0 && $post_dialysis_heart_rate->count() > 0) {
                $data = [
                    'pre_dialysis' => $pre_dialysis_heart_rate,
                    'post_dialysis' => $post_dialysis_heart_rate,
                ];
                return $this->success($data, 200);
            }
            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    // -----------------------------------END DIALYSIS PARAMETER------------------------------------





    // ----------------------------------- CONDITIONS------------------------------------

    public function pre_dialysis_conditions(Request $req)
    {
        try {

            if ($req->has('pre_dialysis_condition_plot_date')) {
                $validator = Validator::make($req->all(), [
                    'pre_dialysis_condition_plot_date' => 'date|required',
                ]);
            } else {
                $validator = Validator::make($req->all(), [
                    'time_range' => 'in:1w,1m,3m,6m,1y,max|required',
                ]);
            }

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            if ($req->has('pre_dialysis_condition_plot_date')) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereDate('start_time', $req->pre_dialysis_condition_plot_date)
                    ->get();

                $pre_dialysis_condition = DB::table('pre_dialysis as p')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->select('start_time', 'bp_high', 'bp_low', 'nausea', 'vomiting', 'short_breath', 'bleeding', 'edema', 'stomach_distend', 'diarrhea')
                    ->whereIn('a.appointment_id', $app_id)
                    ->get();

                if ($pre_dialysis_condition->count() > 0) {
                    return response()->json([
                        'message' => 'pre_dialysis_conditions data fetched',
                        'data' => [
                            'pre_dialysis' => $pre_dialysis_condition,
                        ]
                    ], 200);
                }

                return $this->error('not found', 404);
            }


            $start_date = Carbon::now();

            if ($req->time_range == '1w')
                $end_date = $start_date->subDays(7)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1m')
                $end_date = $start_date->subMonths(1)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '3m')
                $end_date = $start_date->subMonths(3)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '6m')
                $end_date = $start_date->subMonths(6)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1y')
                $end_date = $start_date->subYear(1)->format('Y-m-d H:i:s');

            if (in_array($req->time_range, ['1w', '1m', '3m', '6m', '1y'])) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereBetween('start_time', [$end_date, date('Y-m-d H:i:s')])
                    ->get();
            } else {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->get();
            }


            if ($app_id->count() == 0) {
                return $this->error('not found', 404);
            }

            $app_id_array = [];

            foreach ($app_id as $aid)
                $app_id_array[] = $aid->appointment_id;

            $pre_dialysis_condition = DB::table('pre_dialysis as p')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->select('start_time', 'bp_high', 'bp_low', 'nausea', 'vomiting', 'short_breath', 'bleeding', 'edema', 'stomach_distend', 'diarrhea')
                ->whereIn('a.appointment_id', $app_id_array)
                ->get();

            if ($pre_dialysis_condition->count() > 0) {
                return response()->json([
                    'message' => 'pre_dialysis_conditions data fetched',
                    'data' => [
                        'pre_dialysis' => $pre_dialysis_condition,
                    ]
                ], 200);
            }

            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function post_dialysis_conditions(Request $req)
    {
        try {
            if ($req->has('post_dialysis_condition_plot_date')) {
                $validator = Validator::make($req->all(), [
                    'post_dialysis_condition_plot_date' => 'date|required',
                ]);
            } else {
                $validator = Validator::make($req->all(), [
                    'time_range' => 'in:1w,1m,3m,6m,1y,max|required',
                ]);
            }

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            if ($req->has('post_dialysis_condition_plot_date')) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereDate('start_time', $req->post_dialysis_condition_plot_date)
                    ->get();

                $post_dialysis_condition = DB::table('post_dialysis as p')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->select('start_time', 'bp_high', 'bp_low', 'nausea', 'vomiting', 'short_breath', 'bleeding', 'edema', 'hypoglycemia', 'diarrhea', 'orthostatic_hypotension', 'dizziness')
                    ->whereIn('a.appointment_id', $app_id)
                    ->get();

                if ($post_dialysis_condition->count() > 0) {
                    return response()->json([
                        'message' => 'post_dialysis_conditions data fetched',
                        'data' => [
                            'post_dialysis' => $post_dialysis_condition,
                        ]
                    ], 200);
                }

                return $this->error('not found', 404);
            }

            $start_date = Carbon::now();


            if ($req->time_range == '1w')
                $end_date = $start_date->subDays(7)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1m')
                $end_date = $start_date->subMonths(1)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '3m')
                $end_date = $start_date->subMonths(3)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '6m')
                $end_date = $start_date->subMonths(6)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1y')
                $end_date = $start_date->subYear(1)->format('Y-m-d H:i:s');

            if (in_array($req->time_range, ['1w', '1m', '3m', '6m', '1y'])) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereBetween('start_time', [$end_date, date('Y-m-d H:i:s')])
                    ->get();
            } else {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->get();
            }


            if ($app_id->count() == 0) {
                return $this->error('not found', 404);
            }

            $app_id_array = [];

            foreach ($app_id as $aid)
                $app_id_array[] = $aid->appointment_id;

            $post_dialysis_condition = DB::table('post_dialysis as p')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->select('start_time', 'bp_high', 'bp_low', 'nausea', 'vomiting', 'short_breath', 'bleeding', 'edema', 'hypoglycemia', 'diarrhea', 'orthostatic_hypotension', 'dizziness')
                ->whereIn('a.appointment_id', $app_id_array)
                ->get();

            if ($post_dialysis_condition->count() > 0) {
                return response()->json([
                    'message' => 'post_dialysis_conditions data fetched',
                    'data' => [
                        'post_dialysis' => $post_dialysis_condition,
                    ]
                ], 200);
            }

            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    // ----------------------------------- END CONDITIONS------------------------------------





    //---------------------------------CONS AND PHARMA -----------------------------------------------

    public function consumables(Request $req)
    {
        try {
            if ($req->has('consumables_plot_date')) {
                $validator = Validator::make($req->all(), [
                    'consumables_plot_date' => 'date|required',
                ]);
            } else {
                $validator = Validator::make($req->all(), [
                    'time_range' => 'in:1w,1m,3m,6m,1y,max|required',
                ]);
            }

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $consumables_name = [
                '16g Needle',
                '17g Needle',
                'Bed Sheet',
                'Blood Tubing',
                'Chemical M/C',
                'Chemical D&T',
                'Dialyzer',
                'Heparin',
                'IV Set',
                'NS1000 ML',
                'NS500 ML',
                'Syringe 10 ML',
                'Syringe 5 ML',
                'A/B part',
                'Transducer protector',
            ];

            if ($req->has('consumables_plot_date')) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereDate('start_time', $req->consumables_plot_date)
                    ->get();

                $consumables = DB::table('patient_bill as p')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->select('name', 'start_time', 'count')
                    ->whereIn('a.appointment_id', $app_id)
                    ->whereIn('name', $consumables_name)
                    ->get();

                if ($consumables->count() > 0) {
                    return response()->json([
                        'message' => 'consumabless data fetched',
                        'data' => [
                            'pre_dialysis' => $consumables,
                        ]
                    ], 200);
                }

                return $this->error('not found', 404);
            }


            $start_date = Carbon::now();


            if ($req->time_range == '1w')
                $end_date = $start_date->subDays(7)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1m')
                $end_date = $start_date->subMonths(1)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '3m')
                $end_date = $start_date->subMonths(3)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '6m')
                $end_date = $start_date->subMonths(6)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1y')
                $end_date = $start_date->subYear(1)->format('Y-m-d H:i:s');

            if (in_array($req->time_range, ['1w', '1m', '3m', '6m', '1y'])) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereBetween('start_time', [$end_date, date('Y-m-d H:i:s')])
                    ->get();
            } else {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->get();
            }


            if ($app_id->count() == 0) {
                return $this->error('not found', 404);
            }

            $app_id_array = [];

            foreach ($app_id as $aid)
                $app_id_array[] = $aid->appointment_id;


            $consumables = DB::table('patient_bill as p')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->select('name', 'start_time', 'count')
                ->whereIn('a.appointment_id', $app_id_array)
                ->whereIn('name', $consumables_name)
                ->get();

            if ($consumables->count() > 0) {
                return response()->json([
                    'message' => 'consumabless data fetched',
                    'data' => [
                        'pre_dialysis' => $consumables,
                    ]
                ], 200);
            }

            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function pre_dialysis_pharma(Request $req)
    {
        try {
            if ($req->has('pre_dialysis_pharma_plot_date')) {
                $validator = Validator::make($req->all(), [
                    'pre_dialysis_pharma_plot_date' => 'date|required',
                ]);
            } else {
                $validator = Validator::make($req->all(), [
                    'time_range' => 'in:1w,1m,3m,6m,1y,max|required',
                ]);
            }

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $pre_dialysis_pharma_name = [
                'Inj Dextrose 25% 100ml',
                'Inj Multi Vit',
                'EPO 4K',
                'EPO 10K',
                'Inj Iron',
                'Inj Antibiotics',
                'Inj Amino Acid'
            ];

            if ($req->has('pre_dialysis_pharma_plot_date')) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereDate('start_time', $req->pre_dialysis_pharma_plot_date)
                    ->get();

                $pre_dialysis_pharma = DB::table('pre_dialysis as p')
                    ->join('patient_bill as bill', 'bill.appointment_id', 'p.appointment_id')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->select('name', 'start_time', 'count', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                    ->whereIn('a.appointment_id', $app_id)
                    ->whereIn('name', $pre_dialysis_pharma_name)
                    ->get();


                if ($pre_dialysis_pharma->count() > 0) {
                    return response()->json([
                        'message' => 'pre_dialysis_pharmas data fetched',
                        'data' => [
                            'pre_dialysis' => $pre_dialysis_pharma,
                        ]
                    ], 200);
                } else {
                    $pre_dialysis_pharma = DB::table('pre_dialysis as p')
                        // ->join('patient_bill as bill','bill.appointment_id','p.appointment_id')
                        ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                        ->select('name', 'start_time', 'count', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                        ->select('start_time', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                        ->whereIn('a.appointment_id', $app_id)
                        // ->whereIn('name',$pre_dialysis_pharma_name)
                        ->get();
                }

                if ($pre_dialysis_pharma->count() > 0) {
                    return response()->json([
                        'message' => 'pre_dialysis_pharmas data fetched',
                        'data' => [
                            'pre_dialysis' => $pre_dialysis_pharma,
                        ]
                    ], 200);
                }

                return $this->error('not found', 404);
            }

            $start_date = Carbon::now();

            if ($req->time_range == '1w')
                $end_date = $start_date->subDays(7)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1m')
                $end_date = $start_date->subMonths(1)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '3m')
                $end_date = $start_date->subMonths(3)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '6m')
                $end_date = $start_date->subMonths(6)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1y')
                $end_date = $start_date->subYear(1)->format('Y-m-d H:i:s');

            if (in_array($req->time_range, ['1w', '1m', '3m', '6m', '1y'])) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereBetween('start_time', [$end_date, date('Y-m-d H:i:s')])
                    ->get();
            } else {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->get();
            }


            if ($app_id->count() == 0) {
                return $this->error('not found', 404);
            }

            $app_id_array = [];

            foreach ($app_id as $aid)
                $app_id_array[] = $aid->appointment_id;

            $pre_dialysis_pharma = DB::table('pre_dialysis as p')
                ->join('patient_bill as bill', 'bill.appointment_id', 'p.appointment_id')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->select('name', 'start_time', 'count', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                ->whereIn('a.appointment_id', $app_id_array)
                ->whereIn('name', $pre_dialysis_pharma_name)
                ->get();


            if ($pre_dialysis_pharma->count() > 0) {
                return response()->json([
                    'message' => 'pre_dialysis_pharmas data fetched',
                    'data' => [
                        'pre_dialysis' => $pre_dialysis_pharma,
                    ]
                ], 200);
            } else {
                $pre_dialysis_pharma = DB::table('pre_dialysis as p')
                    // ->join('patient_bill as bill','bill.appointment_id','p.appointment_id')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->select('name', 'start_time', 'count', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                    ->select('start_time', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                    ->whereIn('a.appointment_id', $app_id_array)
                    // ->whereIn('name',$pre_dialysis_pharma_name)
                    ->get();
            }

            if ($pre_dialysis_pharma->count() > 0) {
                return response()->json([
                    'message' => 'pre_dialysis_pharmas data fetched',
                    'data' => [
                        'pre_dialysis' => $pre_dialysis_pharma,
                    ]
                ], 200);
            }



            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function post_dialysis_pharma(Request $req)
    {
        try {

            if ($req->has('post_dialysis_pharma_plot_date')) {
                $validator = Validator::make($req->all(), [
                    'post_dialysis_pharma_plot_date' => 'date|required',
                ]);
            } else {
                $validator = Validator::make($req->all(), [
                    'time_range' => 'in:1w,1m,3m,6m,1y,max|required',
                ]);
            }

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $post_dialysis_pharma_name = [
                'Inj Dextrose 25% 100ml',
                'Inj Multi Vit',
                'EPO 4K',
                'EPO 10K',
                'Inj Iron',
                'Inj Antibiotics',
                'Inj Amino Acid'
            ];

            if ($req->has('post_dialysis_pharma_plot_date')) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereDate('start_time', $req->post_dialysis_pharma_plot_date)
                    ->get();

                $post_dialysis_pharma = DB::table('post_dialysis as p')
                    ->join('patient_bill as bill', 'bill.appointment_id', 'p.appointment_id')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->select('name', 'start_time', 'count', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                    ->whereIn('a.appointment_id', $app_id)
                    ->whereIn('name', $post_dialysis_pharma_name)
                    ->get();


                if ($post_dialysis_pharma->count() > 0) {
                    return response()->json([
                        'message' => 'post_dialysis_pharmas data fetched',
                        'data' => [
                            'post_dialysis' => $post_dialysis_pharma,
                        ]
                    ], 200);
                } else {
                    $post_dialysis_pharma = DB::table('post_dialysis as p')
                        // ->join('patient_bill as bill','bill.appointment_id','p.appointment_id')
                        ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                        ->select('name', 'start_time', 'count', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                        ->select('start_time', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                        ->whereIn('a.appointment_id', $app_id)
                        // ->whereIn('name',$post_dialysis_pharma_name)
                        ->get();
                }

                if ($post_dialysis_pharma->count() > 0) {
                    return response()->json([
                        'message' => 'post_dialysis_pharmas data fetched',
                        'data' => [
                            'post_dialysis' => $post_dialysis_pharma,
                        ]
                    ], 200);
                }


                return $this->error('not found', 404);
            }


            $start_date = Carbon::now();


            if ($req->time_range == '1w')
                $end_date = $start_date->subDays(7)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1m')
                $end_date = $start_date->subMonths(1)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '3m')
                $end_date = $start_date->subMonths(3)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '6m')
                $end_date = $start_date->subMonths(6)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1y')
                $end_date = $start_date->subYear(1)->format('Y-m-d H:i:s');

            if (in_array($req->time_range, ['1w', '1m', '3m', '6m', '1y'])) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereBetween('start_time', [$end_date, date('Y-m-d H:i:s')])
                    ->get();
            } else {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->get();
            }


            if ($app_id->count() == 0) {
                return $this->error('not found', 404);
            }

            $app_id_array = [];

            foreach ($app_id as $aid)
                $app_id_array[] = $aid->appointment_id;



            $post_dialysis_pharma = DB::table('post_dialysis as p')
                ->join('patient_bill as bill', 'bill.appointment_id', 'p.appointment_id')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->select('name', 'start_time', 'count', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                ->whereIn('a.appointment_id', $app_id_array)
                ->whereIn('name', $post_dialysis_pharma_name)
                ->get();


            if ($post_dialysis_pharma->count() > 0) {
                return response()->json([
                    'message' => 'post_dialysis_pharmas data fetched',
                    'data' => [
                        'post_dialysis' => $post_dialysis_pharma,
                    ]
                ], 200);
            } else {
                $post_dialysis_pharma = DB::table('post_dialysis as p')
                    // ->join('patient_bill as bill','bill.appointment_id','p.appointment_id')
                    ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                    ->select('name', 'start_time', 'count', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                    ->select('start_time', 'bp_systolic', 'bp_diasystolic', 'heart_rate', 'weight')
                    ->whereIn('a.appointment_id', $app_id_array)
                    // ->whereIn('name',$post_dialysis_pharma_name)
                    ->get();
            }

            if ($post_dialysis_pharma->count() > 0) {
                return response()->json([
                    'message' => 'post_dialysis_pharmas data fetched',
                    'data' => [
                        'post_dialysis' => $post_dialysis_pharma,
                    ]
                ], 200);
            }



            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //---------------------------------END CONS AND PHARMA --------------------------------------------



    // -------------------------------- BLOOD REPORT -----------------------------------

    public function haemoglobin_vs_pharma(Request $req)
    {
        try {

            if ($req->has('haemoglobin_vs_pharma_plot_date')) {
                $validator = Validator::make($req->all(), [
                    'haemoglobin_vs_pharma_plot_date' => 'date|required',
                ]);
            } else {
                $validator = Validator::make($req->all(), [
                    'time_range' => 'in:1w,1m,3m,6m,1y,max|required',
                ]);
            }

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $pharma_name = [
                'Inj Dextrose 25% 100ml',
                'Inj Multi Vit',
                'EPO 4K',
                'EPO 10K',
                'Inj Iron',
                'Inj Antibiotics',
                'Inj Amino Acid'
            ];

            if ($req->has('haemoglobin_vs_pharma_plot_date')) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereDate('start_time', $req->haemoglobin_vs_pharma_plot_date)
                    ->get();

                $haemoglobin = Blood_Report::select('report_date', 'haemoglobin')->where([['patient_id', $this->patient_id], ['report_date', $req->haemoglobin_vs_pharma_plot_date]])->get();

                $pharma = DB::table('appointments as a')
                    ->join('patient_bill as bill', 'bill.appointment_id', 'a.appointment_id')
                    ->select('name', 'start_time', 'count')
                    ->whereIn('a.appointment_id', $app_id)
                    ->whereIn('name', $pharma_name)
                    ->get();

                if ($haemoglobin->count() > 0 || $pharma->count() > 0) {
                    return response()->json([
                        'message' => 'haemoglobin_vs_pharma data fetched',
                        'data' => [
                            'haemoglobin' => $haemoglobin,
                            'pharma' => $pharma,
                        ]
                    ], 200);
                }

                return $this->error('not found', 404);
            }

            $start_date = Carbon::now();


            if ($req->time_range == '1w')
                $end_date = $start_date->subDays(7)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1m')
                $end_date = $start_date->subMonths(1)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '3m')
                $end_date = $start_date->subMonths(3)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '6m')
                $end_date = $start_date->subMonths(6)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1y')
                $end_date = $start_date->subYear(1)->format('Y-m-d H:i:s');

            if (in_array($req->time_range, ['1w', '1m', '3m', '6m', '1y'])) {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereBetween('start_time', [$end_date, date('Y-m-d H:i:s')])
                    ->get();
            } else {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->get();
            }


            if ($app_id->count() == 0) {
                return $this->error('not found', 404);
            }

            $app_id_array = [];

            foreach ($app_id as $aid)
                $app_id_array[] = $aid->appointment_id;

            $haemoglobin = Blood_Report::select('report_date', 'haemoglobin')->where('patient_id', $this->patient_id)->whereBetween('report_date', [$end_date, date('Y-m-d H:i:s')])->get();

            $pharma = DB::table('patient_bill as p')
                ->select('name', 'start_time', 'count')
                ->join('appointments as a', 'a.appointment_id', 'p.appointment_id')
                ->whereIn('a.appointment_id', $app_id_array)
                ->whereIn('name', $pharma_name)
                ->get();
            // return $pharma = DB::table('appointments as a')
            //         ->select('name','start_time','count')
            //         ->join('patient_bill as bill','bill.appointment_id','a.appointment_id')
            //         ->whereIn('bill.appointment_id',$app_id_array)
            //         ->whereIn('bill.name',$pharma_name)
            //         ->get();

            if ($haemoglobin->count() > 0 || $pharma->count() > 0) {
                return response()->json([
                    'message' => 'haemoglobin_vs_pharma data fetched',
                    'data' => [
                        'haemoglobin' => $haemoglobin,
                        'pharma' => $pharma,
                    ]
                ], 200);
            }

            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function creatinine(Request $req)
    {
        try {

            if ($req->has('creatinine_plot_date')) {
                $validator = Validator::make($req->all(), [
                    'creatinine_plot_date' => 'date|required',
                ]);
            } else {
                $validator = Validator::make($req->all(), [
                    'time_range' => 'in:1w,1m,3m,6m,1y,max|required',
                ]);
            }

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }


            if ($req->has('creatinine_plot_date')) {

                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereDate('start_time', $req->creatinine_plot_date)
                    ->get();

                $creatinine = Renal_Report::select('report_date', 'creatinine')->where([['patient_id', $this->patient_id], ['report_date', $req->creatinine_plot_date]])->get();

                if ($creatinine->count() > 0) {
                    return response()->json([
                        'message' => 'creatinine data fetched',
                        'data' => [
                            'creatinine' => $creatinine,
                        ]
                    ], 200);
                }

                return $this->error('not found', 404);
            }

            $start_date = Carbon::now();


            if ($req->time_range == '1w')
                $end_date = $start_date->subDays(7)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1m')
                $end_date = $start_date->subMonths(1)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '3m')
                $end_date = $start_date->subMonths(3)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '6m')
                $end_date = $start_date->subMonths(6)->format('Y-m-d H:i:s');
            elseif ($req->time_range == '1y')
                $end_date = $start_date->subYear(1)->format('Y-m-d H:i:s');

            if (in_array($req->time_range, ['1w', '1m', '3m', '6m', '1y'])) {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->whereBetween('start_time', [$end_date, date('Y-m-d H:i:s')])
                    ->get();
            } else {
                $app_id = Appointment::select('appointment_id')
                    ->where([['patient_id', $this->patient_id], ['end_time', '!=', null]])
                    ->get();
            }


            if ($app_id->count() == 0) {
                return $this->error('not found', 404);
            }

            $app_id_array = [];

            foreach ($app_id as $aid)
                $app_id_array[] = $aid->appointment_id;

            $creatinine = Renal_Report::select('report_date', 'creatinine')->where('patient_id', $this->patient_id)->whereBetween('report_date', [$end_date, date('Y-m-d H:i:s')])->get();


            if ($creatinine->count() > 0) {
                return response()->json([
                    'message' => 'creatinine data fetched',
                    'data' => [
                        'creatinine' => $creatinine,
                    ]
                ], 200);
            }

            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }




    // --------------------------------END BLOOD REPORT -----------------------------------

}
