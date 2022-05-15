<?php

namespace App\Http\Controllers\admin_report;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\patient_bill;
use App\Models\Patient;
use App\Models\Centre;
use App\Models\Pre_dialysis;
use App\Models\Post_dialysis;
use App\Models\Staff;
use App\Models\StockMaintenance;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class PatientReportController extends Controller
{
    use ResponseAPI;
    //patient reports
    //patient report
    function patient_report(Request $req)
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

            $raw_data = Appointment::join('patient', 'patient.patient_id', 'appointments.patient_id')
                ->join('pre_dialysis', 'pre_dialysis.appointment_id', 'appointments.appointment_id')
                ->join('post_dialysis', 'post_dialysis.appointment_id', 'appointments.appointment_id')
                ->join('patient_bill', 'patient_bill.appointment_id', 'appointments.appointment_id')
                ->join('centre', 'centre.code', 'patient.branch_name')
                ->where('end_time', '!=', null)
                ->whereDate('start_time', '<=', $end_date)
                ->whereDate('start_time', '>=', $start_date)
                ->select('registration_fee', 'normal_fee', 'emergency_fee', 'm_scheduled', 'm_emergency', 'per_hour_fee', 'm_eh', 'appointments.appointment_id as aid', 'patient.patient_id as pid', 'start_time', 'end_time', 'centre_name', 'private', 'patient.branch_name as pbn', 'patient.name as patient_name', 'post_dialysis.technician as end_tech', 'pre_dialysis.technician as start_tech', 'post_dialysis.amount as total', 'post_dialysis.paid as paid', 'mop', 'record_type', 'post_dialysis.eh', 'scheduled_emergency')
                ->groupBy('aid')
                ->get();


            if ($raw_data->isEmpty()) {
                return $this->error('not found', 404);
            }
            $data = [];

            foreach ($raw_data as $index => $rd) {
                $pid = 'PID' . $rd->pbn . $rd->pid;
                $start_staff_id = preg_replace('/[^0-9.]+/', '', $rd->start_tech);
                $start_tech = Staff::find($start_staff_id);
                if ($start_tech != null)
                    $start_tech = $start_tech->username;
                else
                    $start_tech = '';
                $end_staff_id = preg_replace('/[^0-9.]+/', '', $rd->end_tech);
                $end_tech = Staff::find($end_staff_id);
                if ($end_tech != null)
                    $end_tech = $end_tech->username;
                else
                    $end_tech = '';

                // reg fee
                $is_patient_first_time = Appointment::where('patient_id', $rd->pid)->whereDate('start_time', '<=', $end_date)->whereDate('start_time', '>=', $start_date)->count();
                $reg_fee = 0;
                if ($is_patient_first_time == 1)
                    $reg_fee = $rd->registration_fee;

                // dialyzer
                $dialyzer = patient_bill::where([['appointment_id', $rd->aid], ['name', 'dialyzer']])->first();
                $dialyzer_brand = 0;
                $dialyzer_count = 0;
                $dialyzer_sp = 0;
                if ($dialyzer != null) {
                    $dialyzer_brand = $dialyzer->brand;
                    $dialyzer_count = $dialyzer->count;
                    $dialyzer_sp = $dialyzer->selling_price;
                }

                // Blood Tubing
                $blood_tubing = patient_bill::where([['appointment_id', $rd->aid], ['name', 'dialyzer']])->first();
                $blood_tubing_brand = 0;
                $blood_tubing_count = 0;
                $blood_tubing_sp = 0;
                if ($dialyzer != null) {
                    $blood_tubing_brand = $blood_tubing->brand;
                    $blood_tubing_count = $blood_tubing->count;
                    $blood_tubing_sp = $blood_tubing->selling_price;
                }

                // consumables_and_pharmaceuticals_sp
                $consumables_and_pharmaceuticals_sp = patient_bill::where('appointment_id', $rd->aid)->sum('selling_price');


                //therapy_fee
                $therapy_fee = 0;
                if ($rd->private == 'yes') {   //if yes

                    if ($rd->scheduled_emergency == 'scheduled')
                        $therapy_fee = $rd->normal_fee;
                    else
                        $therapy_fee = $rd->emergency_fee;
                } else {


                    if ($rd->scheduled_emergency == 'scheduled')
                        $therapy_fee = $rd->m_scheduled;
                    else
                        $therapy_fee = $rd->m_emergency;
                }

                $data[$index] = [
                    'date' => substr($rd->start_time, 0, 11),
                    'hospital_name' => $rd->centre_name,
                    'scheme' => ($rd->private == 'yes') ? 'Private' : 'Government',
                    'extra_hour_fee' => ($rd->private == 'yes') ? $rd->eh * $rd->per_hour_fee : $rd->eh * $rd->m_eh,
                    'patient_name' => $rd->patient_name,
                    'patient_id' => $pid,
                    'start_time' => date('h:i A', strtotime($rd->start_time)),
                    'start_technician' => $start_tech,
                    'end_time' => date('h:i A', strtotime($rd->end_time)),
                    'end_technician' => $end_tech,
                    'registration_fee' => $reg_fee,
                    'record_type' => $rd->record_type,
                    'dialyzer_brand' => $dialyzer_brand,
                    'dialyzer_count' => $dialyzer_count,
                    'blood_tubing_brand' => $blood_tubing_brand,
                    'blood_tubing_count' => $blood_tubing_count,
                    'dialyzer_and_blood_tubing_sp' => $blood_tubing_sp + $dialyzer_sp,
                    'consumables_and_pharmaceuticals_sp' => $consumables_and_pharmaceuticals_sp,
                    'therapy_fee' => $therapy_fee,
                    'mop' => $rd->mop,
                    'paid' => $rd->paid,
                    'total' => $rd->total,
                ];
            }
            return $this->success($data, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    function private_patient_report(Request $req)
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
                    return $this->error($validator->errors());
                }

                $start_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->firstOfMonth()
                    ->format('Y-m-d 00:00:00');
                $end_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->lastOfMonth()
                    ->format('Y-m-d 23:59:59');
            }


            $patient_ids = Appointment::selectraw("patient_id, COUNT(patient_id) as dupli")
                ->whereIN('appointment_id', [DB::raw("SELECT appointment_id FROM `pre_dialysis` WHERE private='yes'")])
                ->where(DB::raw("substr(start_time,1,7)"), $req->date)
                ->where("end_time", '<>', '')
                ->groupby('patient_id')
                ->get();
            $i = $tot = $cogs_cost = $pharma_cost = $pharma_selling = $tot_dialysis_cost = $tot_therapy_earning = $tot_dialyzer_earning = $tot_blood_earning = $tot_pharma_earning = 0;
            foreach ($patient_ids as $rd) {
                $patient_details = Patient::where('patient_id', $rd->patient_id)->first();
                $p_eh = Centre::select('per_hour_fee')->where('code', $patient_details->branch_name)->first();

                // COGS(cost price of all consumables except Dialyzer & Tubing) Earning
                $cogs = patient_bill::selectraw("IFNULL(cost_price,0) as cost, name")
                    ->whereIN('appointment_id', [DB::raw("(SELECT X.appointment_id FROM appointments X INNER JOIN pre_dialysis Y on X.appointment_id=Y.appointment_id WHERE X.patient_id=" . $rd->patient_id . " AND Y.private='yes' AND substr(X.start_time,1,7) = '$req->date')")])
                    ->get();
                foreach ($cogs as $cog) {
                    $verify = StockMaintenance::select('product_name')
                        ->where('product_name', $cog->name)
                        ->where('category', 'consumable')
                        ->where('branch_name', $patient_details->branch_name)
                        ->get();
                    if (count($verify) > 0) {
                        $cogs_cost += $cog->cost;
                    }
                }


                // Pharma Earning
                $pharmas = patient_bill::selectraw("IFNULL(cost_price,0) as cost, IFNULL(selling_price,0) as selling, name")
                    ->whereIN('appointment_id', [DB::raw("SELECT X.appointment_id FROM appointments X INNER JOIN pre_dialysis Y on X.appointment_id=Y.appointment_id WHERE X.patient_id=" . $rd->patient_id . " AND Y.private='yes' AND substr(X.start_time,1,7) = '$req->date'")])
                    ->get();
                foreach ($pharmas as $pharma) {
                    $verify = StockMaintenance::select('product_name')
                        ->where('product_name', $pharma->name)
                        ->where('category', 'pharmaceutical')
                        ->where('branch_name', $patient_details->branch_name)
                        ->count();
                    if ($verify > 0) {
                        $pharma_cost += $pharma->cost;
                        $pharma_selling += $pharma->selling;
                    }
                }


                $dialysis_cost = Post_dialysis::selectraw("IFNULL(SUM(amount),0) as s, IFNULL(SUM(eh),0) as eh")
                    ->whereIN('appointment_id', [DB::raw("SELECT X.appointment_id FROM appointments X INNER JOIN pre_dialysis Y on X.appointment_id=Y.appointment_id WHERE X.patient_id=" . $rd->patient_id . " AND Y.private='yes' AND substr(X.start_time,1,7) = '$req->date'")])
                    ->first();

                $dialyzer = patient_bill::selectraw("IFNULL(SUM(count),0) as c,IFNULL(SUM(cost_price),0) as cost, IFNULL(SUM(selling_price),0) as selling")
                    ->whereIN('appointment_id', [DB::raw("SELECT X.appointment_id FROM appointments X INNER JOIN pre_dialysis Y on X.appointment_id=Y.appointment_id WHERE X.patient_id=" . $rd->patient_id . " AND Y.private='yes' AND substr(X.start_time,1,7) = '$req->date'")])
                    ->where('name', 'Dialyzer')
                    ->first();

                $blood = patient_bill::selectraw("IFNULL(SUM(count),0) as c, IFNULL(SUM(cost_price),0) as cost, IFNULL(SUM(selling_price),0) as selling")
                    ->whereIN('appointment_id', [DB::raw("SELECT X.appointment_id FROM appointments X INNER JOIN pre_dialysis Y on X.appointment_id=Y.appointment_id WHERE X.patient_id=" . $rd->patient_id . " AND Y.private='yes' AND substr(X.start_time,1,7) = '$req->date'")])
                    ->where('name', 'Blood Tubing')
                    ->first();
                if (substr($patient_details->branch_name, 0, 2) != 'HD') {
                    $branch = Centre::select('centre_name')
                        ->where('code', $patient_details->branch_name)
                        ->first();
                } else {
                    $branch = "Home Dialysis";
                }
                $a = isset($dialysis_cost->s) ? $dialysis_cost->s : 0;
                $b = $a - $cogs_cost;
                $dialyzer_selling = isset($dialyzer->selling) ? $dialyzer->selling : 0;
                $dialyzer_cost = isset($dialyzer->cost) ? $dialyzer->cost : 0;
                $blood_selling = isset($blood->selling) ? $blood->selling : 0;
                $blood_cost = isset($blood->cost) ? $blood->cost : 0;
                $c = $dialyzer_selling - $dialyzer_cost;
                $d = $blood_selling - $blood_cost;
                $e = $pharma_selling - $pharma_cost;
                $total = $b + $c + $d + $e;
                $data[] = [
                    'pid' => isset($rd->patient_id) ? $rd->patient_id : null,
                    'patient_name' => isset($patient_details->patient_name) ? $patient_details->patient_name : null,
                    'hospital_name' => isset($branch->centre_name) ? $branch->centre_name : null,
                    'no_of_dialysis' => isset($rd->dupli) ? $rd->dupli : null,
                    'cost_of_dialysis' => $a,
                    'earning_from_therapy' => $b,
                    'dialyzer_earning' => $c,
                    'tubing_earning' => $d,
                    'earning_from_pharma' => $e,
                    'total_earning' => $total
                ];
            }
            return $this->success($data, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    //mjpjay patient report
    function mjpjay_patient_report(Request $req)
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
                    return $this->error($validator->errors());
                }

                $start_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->firstOfMonth()
                    ->format('Y-m-d 00:00:00');
                $end_date = Carbon::createFromFormat('Y-m', $req->date)
                    ->lastOfMonth()
                    ->format('Y-m-d 23:59:59');
            }

            $raw_data_unique_patient = Appointment::where('end_time', '!=', null)
                ->orderBy('appointments.patient_id', 'asc')
                ->groupBy('appointments.patient_id')
                ->whereDate('start_time', '<=', $end_date)
                ->whereDate('start_time', '>=', $start_date)
                ->join('pre_dialysis', 'pre_dialysis.appointment_id', 'appointments.appointment_id')
                ->join('post_dialysis', 'post_dialysis.appointment_id', 'appointments.appointment_id')
                ->join('patient', 'patient.patient_id', 'appointments.patient_id')
                ->join('centre', 'centre.code', 'patient.branch_name')
                ->where('pre_dialysis.private', 'no')
                ->select('appointments.patient_id as pid', 'appointments.start_time', 'centre.per_hour_fee', 'post_dialysis.eh', 'patient.branch_name as pbn', 'appointments.appointment_id as aid', DB::raw('sum(post_dialysis.amount) as cost_of_dialysis'), 'patient.name as patient_name', DB::raw('count(appointments.appointment_id) as no_of_dialysis'), 'centre.centre_name as hospital_name')
                ->get();

            if ($raw_data_unique_patient->isEmpty()) {
                return $this->error("not found", 404);
            }

            $raw_data = Appointment::where('end_time', '!=', null)
                ->orderBy('appointments.patient_id', 'asc')
                ->groupBy('appointments.appointment_id')
                ->whereDate('start_time', '<=', $end_date)
                ->whereDate('start_time', '>=', $start_date)
                ->join('pre_dialysis', 'pre_dialysis.appointment_id', 'appointments.appointment_id')
                ->join('post_dialysis', 'post_dialysis.appointment_id', 'appointments.appointment_id')
                ->join('patient', 'patient.patient_id', 'appointments.patient_id')
                ->join('centre', 'centre.code', 'patient.branch_name')
                ->where('pre_dialysis.private', 'no')
                ->select('appointments.patient_id as pid', 'appointments.start_time', 'centre.per_hour_fee', 'post_dialysis.eh', 'patient.branch_name as pbn', 'appointments.appointment_id as aid')
                ->get();


            foreach ($raw_data_unique_patient as $r) {
                $no_of_dialyzer_used = 0;
                $cost_of_dialyzer_used = 0;
                $no_of_blood_tubing_used = 0;
                $cost_of_blood_tubing_used = 0;
                $no_of_epo4k_used = 0;
                $cost_of_epo4k_used = 0;
                $no_of_epo10k_used = 0;
                $cost_of_epo10k_used = 0;

                foreach ($raw_data as $rd) {

                    if ($rd->pid != $r->pid)
                        continue;

                    $cons_cp_array = StockMaintenance::join('patient_bill', 'patient_bill.name', 'sm.product_name')
                        ->groupBy('sm.product_name')
                        ->where([['sm.category', 'consumable'], ['sm.branch_name', $rd->pbn], ['patient_bill.appointment_id', $rd->aid]])
                        ->select('patient_bill.cost_price as cp', 'patient_bill.selling_price as sp', 'patient_bill.count as c', 'patient_bill.name')
                        ->get();


                    foreach ($cons_cp_array as $cp) {
                        if ($cp->name == 'Blood Tubing') {
                            $no_of_blood_tubing_used += $cp->c;
                            $cost_of_blood_tubing_used += ($cp->c * $cp->cp);
                            continue;
                        }
                        if ($cp->name == 'Dialyzer') {
                            $no_of_dialyzer_used += $cp->c;
                            $cost_of_dialyzer_used += ($cp->c * $cp->cp);;
                            continue;
                        }
                    }

                    $pharma = StockMaintenance::join('patient_bill', 'patient_bill.name', 'sm.product_name')
                        ->groupBy('sm.product_name')
                        ->where([['sm.category', 'pharmaceutical'], ['sm.branch_name', $rd->pbn], ['patient_bill.appointment_id', $rd->aid]])
                        ->select('patient_bill.cost_price as cp', 'patient_bill.selling_price as sp', 'patient_bill.count as c', 'patient_bill.name')
                        ->get();

                    foreach ($pharma as $p) {
                        if ($cp->name == 'EPO 4K') {
                            $no_of_epo4k_used += $cp->c;
                            $cost_of_epo4k_used += ($cp->c * $cp->cp);
                            continue;
                        }
                        if ($cp->name == 'EPO 10K') {
                            $no_of_epo10k_used += $cp->c;
                            $cost_of_epo10k_used += ($cp->c * $cp->cp);
                            continue;
                        }
                    }
                }

                $data[] = [
                    'patient_name' => $r->patient_name,
                    'hospital_name' => $r->hospital_name,
                    'no_of_dialysis' => $r->no_of_dialysis,
                    'cost_of_dialysis' => (int)$r->cost_of_dialysis,
                    'no_of_dialyzer_used' => $no_of_dialyzer_used,
                    'cost_of_dialyzer_used' => $cost_of_dialyzer_used,
                    'no_of_blood_tubing_used' => $no_of_blood_tubing_used,
                    'cost_of_blood_tubing_used' => $cost_of_blood_tubing_used,
                    'no_of_epo4k_used' => $no_of_epo4k_used,
                    'cost_of_epo4k_used' => $cost_of_epo4k_used,
                    'no_of_epo10k_used' => $no_of_epo10k_used,
                    'cost_of_epo10k_used' => $cost_of_epo10k_used,
                    'total' => $r->cost_of_dialysis - ($cost_of_blood_tubing_used + $cost_of_dialyzer_used + $cost_of_epo4k_used + $cost_of_epo10k_used),
                ];
            }
            return $this->success($data);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
