<?php

namespace App\Http\Controllers\admin_report;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Appointment;
use App\Models\Centre;
use App\Models\Centre_Detail;
use App\Models\Machine;
use App\Models\Patient;
use App\Models\patient_bill;
use App\Models\Post_dialysis;
use App\Models\Pre_dialysis;
use App\Models\StockMaintenance;
use App\Traits\ResponseAPI;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Exception;


class CenterBasedReportController extends Controller
{

    use ResponseAPI;
    //center base reports
    //hospital report
    function hospital_report(Request $req)
    {

        try {
            if ($req->branch_code == null) {
                $check_branch = Centre::first();
                $bc = $check_branch->code;
            } else {
                $check_branch = Centre::where('code', $req->branch_code)->first();
                if (is_null($check_branch)) {
                    return $this->error('invalid branch name', 404);
                }
                $bc = $req->branch_code;
            }


            $next_month = Carbon::now()->startOfMonth()->addMonth(1)->format('Y-m');
            if ($req->date == null) {
                $start_date = date('Y-m-01 00:00:00');
                $end_date = date('Y-m-d 23:59:59');
            } else {
                $validator = Validator::make($req->all(), [
                    'date' => "required|date_format:Y-m|before:$next_month",
                ]);

                if ($validator->fails()) {
                    return $this->error('validation error', 404);
                }

                $start_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->firstOfMonth()
                    ->format('Y-m-d 00:00:00');
                $end_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->lastOfMonth()
                    ->format('Y-m-d 23:59:59');
            }

            $patient = Patient::where('branch_name', $bc)->select('patient_id')->get();

            $pid_array = [];
            foreach ($patient as $p)
                $pid_array[] = $p->patient_id;

            $app_id = Appointment::whereDate('start_time', '<=', $end_date)->whereDate('start_time', '>=', $start_date)->select('appointment_id')->whereIn('patient_id', $pid_array)->where('end_time', '!=', null)->get();
            $dialysis_count = $app_id->count();


            // if ap 0 then amount
            $branch_ap = $check_branch->ap;
            $branch_code = $check_branch->code;
            $pay_amount = $check_branch->amount;
            $pay_percentage = $check_branch->percentage;
            $branch_perdmy = $check_branch->perdmy;


            // if payment is done in amount
            if ($branch_ap == 0) {

                switch ($branch_perdmy) {
                    case "year": {
                            $amount = $pay_amount / 12;
                        }
                        break;

                    case "month": {
                            $amount = $pay_amount;
                        }
                        break;

                    case "dialysis": {
                            $amount = $dialysis_count * $pay_amount;
                        }
                        break;

                    default: {
                            return $this->error('invalid attempt', 404);
                        }
                }

                //if payment is done in percentage
            } else {

                $app_id_array = [];
                foreach ($app_id as $aid)
                    $app_id_array[] = $aid->appointment_id;

                $per_hour_fee = $check_branch->per_hour_fee;
                $post_dialysis_data = Post_dialysis::select(DB::raw("SUM(eh) as extra_hour , SUM(amount) as pd_amount"))->whereIn('appointment_id', $app_id_array)->get();
                $extra_hour_amount = $per_hour_fee * $post_dialysis_data[0]['extra_hour'];
                $post_dialysis_amount = $post_dialysis_data[0]['pd_amount'];
                switch ($branch_perdmy) {
                    case "year": {
                            $amount = round((($pay_percentage / 100) * ($post_dialysis_amount - $extra_hour_amount) / 12));
                        }
                        break;

                    case "month": {
                            $amount = round((($pay_percentage / 100) * ($post_dialysis_amount - $extra_hour_amount)));
                        }
                        break;

                    case "dialysis": {
                            $amount = round(($pay_percentage / 100) * ($dialysis_count * ($post_dialysis_amount - $extra_hour_amount)));
                        }
                        break;

                    default: {
                            return $this->error('invalid attempt', 404);
                        }
                }
            }

            $additional = [];
            $additional_expenses = Centre_Detail::where('centre_name', $check_branch->code)->get();
            $total_additional_expense = 0;
            if (!$additional_expenses->isEmpty()) {
                foreach ($additional_expenses as $ae) {
                    $total_additional_expense += $ae->amount;
                    $additional[] = [
                        'name' => $ae->name,
                        'amount' => $ae->amount
                    ];
                }
            }

            $data = [
                'hospital_name' => $check_branch->centre_name,
                'hospital_code' => $branch_code,
                'dialysis_count' => $dialysis_count,
                'additonal_expenses' => $additional,
                'amount' => $amount,
                'total_amount' => $total_additional_expense + $amount
            ];
            return $this->success($data, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage(), 404);
        }
    }

    //stock maintainance report
    function stock_maintenance_report(Request $req)
    {
        try {

            $next_month = Carbon::now()->startOfMonth()->addMonth(1)->format('Y-m');
            if ($req->date == null) {
                $start_date = date('Y-m-01 00:00:00');
                $end_date = date('Y-m-d 23:59:59');
            } else {
                $validator = Validator::make($req->all(), [
                    'date' => "required|date_format:Y-m|before:$next_month",
                ]);

                if ($validator->fails()) {
                    return response()->json([
                        'message' => 'validation error',
                        'error' => $validator->errors()
                    ], 403);
                }

                $start_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->firstOfMonth()
                    ->format('Y-m-d 00:00:00');
                $end_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->lastOfMonth()
                    ->format('Y-m-d 23:59:59');
            }

            $basic_details = DB::table('appointments')
                ->whereDate('start_time', '<=', $end_date)
                ->whereDate('start_time', '>=', $start_date)
                ->where('end_time', '!=', null)
                ->join('patient', 'patient.patient_id', 'appointments.patient_id')
                ->join('centre', 'centre.code', 'patient.branch_name')
                ->join('pre_dialysis', 'pre_dialysis.appointment_id', 'appointments.appointment_id')
                ->select('patient.name as patient_name', 'pre_dialysis.private', 'centre.code', 'centre.centre_name', 'appointments.appointment_id as app_id', 'appointments.start_time')
                ->get();

            if ($basic_details->count() < 1) {
                return $this->error('not found', 404);
            }

            $distinct_stocks = StockMaintenance::groupBy('product_name')->get();
            $total_basic_details = $basic_details->count();
            $sub_total = 0;

            $data = [];
            foreach ($basic_details as $bd) {
                $used_stocks = [];
                $total = 0;
                foreach ($distinct_stocks as $ds) {
                    $patient_bill = patient_bill::where([['appointment_id', $bd->app_id], ['name', $ds->product_name]])->select('name', 'count', 'cost_price')->first();
                    if ($patient_bill == null) {
                        $used_stocks[$ds->product_name] = [
                            'count' => 0,
                            'cost_price' => 0,
                        ];
                    } else {
                        $total += ($patient_bill->count * $patient_bill->cost_price);
                        $used_stocks[$patient_bill->name] = [
                            'count' => $patient_bill->count,
                            'cost_price' => $patient_bill->cost_price,
                        ];
                    }
                    $sub_total += $total;
                }
                $data[] = [
                    'patient_name' => $bd->patient_name,
                    'hospital_name' => $bd->centre_name,
                    'scheme' => ($bd->private == 'yes') ? 'private' : 'government',
                    'date' => $bd->start_time,
                    'stocks' => $used_stocks,
                    'total' => $total,
                ];
            }


            $total_average = round($sub_total / $total_basic_details);

            array_push($data, [
                'average' => $total_average,
                'sub_total' => $sub_total
            ]);

            return $this->success($data, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage(), 404);
        }
    }

    //machine reports
    function machine_report(Request $req)
    {
        try {
            $next_month = Carbon::now()->startOfMonth()->addMonth(1)->format('Y-m');
            if ($req->date == null) {
                $start_date = date('Y-m-01 00:00:00');
                $end_date = date('Y-m-d 23:59:59');
            } else {
                $validator = Validator::make($req->all(), [
                    'date' => "required|date_format:Y-m|before:$next_month",
                ]);

                if ($validator->fails()) {
                    return response()->json([
                        'message' => 'validation error',
                        'error' => $validator->errors()
                    ], 403);
                }

                $start_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->firstOfMonth()
                    ->format('Y-m-d 00:00:00');
                $end_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->lastOfMonth()
                    ->format('Y-m-d 23:59:59');
            }

            $distinct_machine = DB::table('machines')
                ->groupBy('provider')
                ->select('machine_type', DB::raw('count(machine_type) as no_of_machine'), 'provider')
                ->get();

            if ($distinct_machine->isEmpty()) {
                return $this->error('not found', 404);
            }

            $data = [];
            foreach ($distinct_machine as $dm) {
                $total_dialysis = DB::table('pre_dialysis')
                    ->where('dialyzer', $dm->machine_type)
                    ->whereDate('appointments.start_time', '<=', $end_date)
                    ->whereDate('appointments.start_time', '>=', $start_date)
                    ->join('appointments', 'appointments.appointment_id', 'pre_dialysis.appointment_id')
                    ->where('appointments.end_time', '!=', null)
                    ->count();

                $total_emi = 0;
                $machine_emi_data = Machine::where([['machine_type', $dm->machine_type], ['provider', $dm->provider]])->select('dmy_machine', 'emi')->get();
                foreach ($machine_emi_data as $med) {
                    if ($med->dmy_machine == 'month') {
                        $emi = $med->emi;
                    } elseif ($med->dmy_machine == 'year') {
                        $emi = $med->emi / 12;
                    } elseif ($med->dmy_machine == 'dialysis') {
                        $emi = $med->emi / $total_dialysis;
                    }
                    $total_emi += $emi;
                }

                $data[] = [
                    'provider' => $dm->provider,
                    'no_of_machines' => $dm->no_of_machine,
                    'no_of_dialysis' => $total_dialysis,
                    'total_dialysis' => $total_dialysis,
                    'total_emi' => round($total_emi)
                ];
            }

            return $this->success($data, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage(), 404);
        }
    }

    //sharing rates report
    function sharing_rates_report(Request $req)
    {
        try {

            if ($req->branch_code == null) {
                $check_branch = Centre::first();
                $bc = $check_branch->code;
                $bn = $check_branch->centre_name;
            } else {
                $check_branch = Centre::where('code', $req->branch_code)->first();
                if (is_null($check_branch)) {
                    return response()->json([
                        'message' => 'invalid branch name',
                    ], 403);
                }
                $bc = $req->branch_code;
                $bn = $check_branch->centre_name;
            }


            $next_month = Carbon::now()->startOfMonth()->addMonth(1)->format('Y-m');
            if ($req->date == null) {
                $start_date = date('Y-m-01 00:00:00');
                $end_date = date('Y-m-d 23:59:59');
            } else {
                $validator = Validator::make($req->all(), [
                    'date' => "required|date_format:Y-m|before:$next_month",
                ]);

                if ($validator->fails()) {
                    return response()->json([
                        'message' => 'validation error',
                        'error' => $validator->errors()
                    ], 403);
                }

                $start_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->firstOfMonth()
                    ->format('Y-m-d 00:00:00');
                $end_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->lastOfMonth()
                    ->format('Y-m-d 23:59:59');
            }

            $stock_details = StockMaintenance::where('branch_name', $bc)->whereDate('date', '<=', $end_date)->whereDate('date', '>=', $start_date)->select('date', 'product_name', 'brand', 'cost', 'arrived', 'gst', 'calculated_cost_price', 'total')->get();
            $stocks_count = $stock_details->count();
            if ($stock_details->isEmpty()) {
                return $this->error('not found', 404);
            }

            $data = [];
            $sub_total = 0;
            foreach ($stock_details as $sd) {
                $data[] = [
                    'date' => $sd->date,
                    'product_name' => $sd->product_name,
                    'brand' => $sd->brand,
                    'hospital_name' => $sd->$bn,
                    'price_per_item' => $sd->cost,
                    'no_of_items' => $sd->arrived,
                    'gst' => $sd->gst,
                    'calculated_cost' => $sd->calculated_cost_price,
                    'total' => $sd->total
                ];
                $sub_total += $sd->total;
            }

            $average = $sub_total / $stocks_count;

            // $data['sub_total_and_average']=['sub_total'=>$sub_total,'average'=>$average];

            array_push($data, ['sub_total' => round($sub_total), 'average' => round($average)]);

            return $this->success($data, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage(), 404);
        }
    }

    //closing stocks report
    function closing_stocks_report(Request $req)
    {

        try {
            $next_month = Carbon::now()->startOfMonth()->addMonth(1)->format('Y-m');
            if ($req->date == null) {
                $start_date = date('Y-m-01 00:00:00');
                $end_date = date('Y-m-d 23:59:59');
            } else {
                $validator = Validator::make($req->all(), [
                    'date' => "required|date_format:Y-m|before:$next_month",
                ]);

                if ($validator->fails()) {
                    return response()->json([
                        'message' => 'validation error',
                        'error' => $validator->errors()
                    ], 403);
                }

                $start_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->firstOfMonth()
                    ->format('Y-m-d 00:00:00');
                $end_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->lastOfMonth()
                    ->format('Y-m-d 23:59:59');
            }


            $accounts = Account::join('centre', 'centre.code', 'accounts.branch')
                ->orderBy('accounts.date', 'asc')
                ->select('accounts.date as date', 'accounts.stock_name as stock_name', 'accounts.brand as brand', 'centre.centre_name as hospital_name', 'new_cost', 'closing_cost', 'new_count', 'closing_count')
                ->get();

            if ($accounts->isEmpty()) {
                return $this->error('not found', 404);
            }

            $data = [];
            $total_count = 0;
            $total_cost = 0;
            foreach ($accounts as $a) {
                $total_count = $a->new_count + $a->closing_count;
                $total_cost = $a->new_cost + $a->closing_cost;
                $data[] = [
                    'data' => $a->date,
                    'stock_name' => $a->stock_name,
                    'brand' => $a->brand,
                    'hospital_name' => $a->hospital_name,
                    'existing_stock_cost' => $a->closing_cost,
                    'new_stock_cost' => $a->new_cost,
                    'total_stock_cost' => $total_cost,
                    'existing_stock_count' => $a->closing_count,
                    'new_stock_count' => $a->new_count,
                    'total_stock_count' => $total_count
                ];
            }

            return $this->success($data, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage(), 404);
        }
    }
}
