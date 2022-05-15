<?php

namespace App\Http\Controllers\doctor\DoctorPortal;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Centre;
use App\Models\Patient;
use App\Models\Post_dialysis;
use App\Models\Pre_dialysis;
use App\Models\Staff;
use App\Traits\ResponseAPI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Exception;

// use App\Models\Doctor;
// use Illuminate\Support\Facades\DB;
// use SebastianBergmann\CodeCoverage\Driver\PathExistsButIsNotDirectoryException;
// use function PHPUnit\Framework\isEmpty;



class DoctorHomeController extends Controller
{
    use ResponseAPI;
    //show branch related to doctors
    public function view_branch()
    {
        try {
            $branch = explode(',', Auth::user()->branch);
            $hospitals = Centre::select('code', 'centre_name')->whereIn('code', $branch)->get();
            if ($hospitals->isEmpty()) {
                return $this->error('hospital not found', 404);
            }
            return $this->success($hospitals, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    //show pateint and id related to doctor branch
    public function show_patient_name_id($branch = null)
    {
        try {
            $check_branch = explode(',', Auth::user()->branch);
            $doctor_id = Auth::user()->id;

            if ($branch == null) {
                $patient = Patient::select('patient_id', 'name')->where([['blocked', 0], ['doctor', $doctor_id]])->whereIn('branch_name', $check_branch)->get();
                if ($patient->count() > 0) {
                    return $this->success($patient, 200);
                }
                return $this->error('pateint not found', 404);
            }

            if (!in_array($branch, $check_branch)) {
                return $this->error('invalid branch code', 404);
            }

            $patient = Patient::select('patient_id', 'name')->where([['blocked', 0], ['doctor', $doctor_id], ['branch_name', $branch]])->get();
            if ($patient->count() > 0) {
                return $this->success($patient, 200);
            }
            return $this->error('pateint not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    //show patient toal count
    public function show_total_patient($branch = null)
    {
        try {
            $check_branch = explode(',', Auth::user()->branch);
            $doctor_id = Auth::user()->id;


            if ($branch == null) {
                $patient = Patient::select('patient_id', 'name')->where([['blocked', 0], ['doctor', $doctor_id]])->whereIn('branch_name', $check_branch)->get();
                if ($patient->count() > 0) {
                    return $this->success($patient->count(), 200);
                }
                return $this->error('pateint not found', 404);
            }

            if (!in_array($branch, $check_branch)) {
                return $this->error('invalid branch code', 404);
            }


            $patient = Patient::select('patient_id', 'name', 'doctor')->where([['blocked', 0], ['doctor', $doctor_id], ['branch_name', $branch]])->get();
            if ($patient->count() > 0) {
                return $this->success($patient->count(), 200);
            }
            return $this->error('pateint not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    //show pateint details related to doctor branch
    public function show_patient_details($patient_id = null)
    {
        try {
            $check_branch = explode(',', Auth::user()->branch);
            $doctor_id = Auth::user()->id;

            $check_patient =  Patient::where([['blocked', 0], ['doctor', $doctor_id], ['patient_id', $patient_id]])->count();

            if (!$check_patient) {
                return $this->error('invalid patient id', 404);
            }


            $patient = Patient::where([['blocked', 0], ['doctor', $doctor_id], ['patient_id', $patient_id]])->first();

            if (!in_array($patient->branch_name, $check_branch)) {
                return $this->error('invalid branch code', 404);
            }

            if ($patient->count() > 0) {
                return $this->success($patient, 200);
            }
            return $this->error('unable to get patient details , no data found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //show toal microcentre
    public function show_total_hospital()
    {
        try {
            $branch = explode(',', Auth::user()->branch);
            $hospitals = Centre::select('code', 'centre_name')->whereIn('code', $branch)->get()->count();
            if (!$hospitals) {
                return $this->error('hospital not found', 404);
            }
            return $this->success($hospitals, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //show total no of dialysis
    public function view_dialysis_count()
    {
        try {
            $doctor_id = Auth::user()->id;
            $patient_id = Patient::select('patient_id')->where('doctor', $doctor_id)->get();

            $pid = [];
            foreach ($patient_id as $val)
                $pid[] = $val->patient_id;

            $app = Appointment::whereIn('patient_id', $pid)->count();

            return $this->success($app, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //show all dialysis
    public function show_all_dialysis()
    {
        try {

            $doctor_id = Auth::user()->id;
            $patient_id = Patient::select('patient_id')->where('doctor', $doctor_id)->get();

            $pid = [];
            foreach ($patient_id as $val)
                $pid[] = $val->patient_id;

            $app = Appointment::select('appointment_id', 'start_time', 'end_time', 'patient_id')->whereIn('patient_id', $pid)->orderBy('start_time', 'desc')->get();

            $data = [];
            foreach ($app as $val) {

                if ($val->end_time == null) {
                    $patient_name = Patient::select('name')->where('patient_id', $val->patient_id)->first()->name;

                    $pre_dialysis_data = Pre_dialysis::where('appointment_id', $val->appointment_id)->first();

                    $staff_id =  (int) filter_var($pre_dialysis_data->technician, FILTER_SANITIZE_NUMBER_INT);
                    if (Staff::where('id', $staff_id)->select('username')->count())
                        $staff_name = Staff::where('id', $staff_id)->select('username')->first()->username;
                    else $staff_name = "";

                    $bp_systolic = $pre_dialysis_data->bp_systolic;
                    $bp_diasystolic = $pre_dialysis_data->bp_diasystolic;
                    $heart_rate = $pre_dialysis_data->heart_rate;
                    $weight = $pre_dialysis_data->weight;
                    $spo2 = $pre_dialysis_data->spo2;

                    //conditions
                    $conditions = '';
                    if ($pre_dialysis_data->bp_high == 1) {
                        $conditions .= 'bp high' . ',';
                    }
                    if ($pre_dialysis_data->bp_low == 1) {
                        $conditions .= 'bp low' . ',';
                    }
                    if ($pre_dialysis_data->nausea == 1) {
                        $conditions .= 'nausea' . ',';
                    }
                    if ($pre_dialysis_data->vomiting == 1) {
                        $conditions .= 'vomiting' . ',';
                    }
                    if ($pre_dialysis_data->short_breath == 1) {
                        $conditions .= 'short breath' . ',';
                    }
                    if ($pre_dialysis_data->bleeding == 1) {
                        $conditions .= 'bleeding' . ',';
                    }
                    if ($pre_dialysis_data->edema == 1) {
                        $conditions .= 'edema' . ',';
                    }
                    if ($pre_dialysis_data->stomach_distend == 1) {
                        $conditions .= 'stomach_distend' . ',';
                    }
                    if ($pre_dialysis_data->diarrhea == 1) {
                        $conditions .= 'diarrhea' . ',';
                    }

                    $conditions = rtrim($conditions, ',');

                    $data[] = [
                        'appointment_id' => $val->appointment_id,
                        'patient' => $patient_name,
                        'staff' => $staff_name,
                        'bp_systolic' => $bp_systolic,
                        'bp_diasystolic' => $bp_diasystolic,
                        'heart_rate' => $heart_rate,
                        'weight' => $weight,
                        'spo2' => $spo2,
                        'conditions' => $conditions,
                        'status' => 'Dialysis Ongoing',
                        'datetime' => $val->start_time,
                        'patient_parameters' => 'In progress',
                    ];
                } else {
                    $patient_name = Patient::select('name')->where('patient_id', $val->patient_id)->first()->name;

                    $post_dialysis_data = Post_dialysis::where('appointment_id', $val->appointment_id)->first();
                    $pre_dialysis_data = Pre_dialysis::select('spo2')->where('appointment_id', $val->appointment_id)->first();

                    $staff_id =  (int) filter_var($post_dialysis_data->technician, FILTER_SANITIZE_NUMBER_INT);
                    if (Staff::where('id', $staff_id)->select('username')->count())
                        $staff_name = Staff::where('id', $staff_id)->select('username')->first()->username;
                    else $staff_name = "";

                    $bp_systolic = $post_dialysis_data->bp_systolic;
                    $bp_diasystolic = $post_dialysis_data->bp_diasystolic;
                    $heart_rate = $post_dialysis_data->heart_rate;
                    $weight = $post_dialysis_data->weight;
                    $spo2 = $pre_dialysis_data->spo2;

                    //conditions
                    $conditions = '';
                    if ($post_dialysis_data->bp_high == 1) {
                        $conditions .= 'bp high' . ',';
                    }
                    if ($post_dialysis_data->bp_low == 1) {
                        $conditions .= 'bp low' . ',';
                    }
                    if ($post_dialysis_data->nausea == 1) {
                        $conditions .= 'nausea' . ',';
                    }
                    if ($post_dialysis_data->vomiting == 1) {
                        $conditions .= 'vomiting' . ',';
                    }
                    if ($post_dialysis_data->short_breath == 1) {
                        $conditions .= 'short breath' . ',';
                    }
                    if ($post_dialysis_data->bleeding == 1) {
                        $conditions .= 'bleeding' . ',';
                    }
                    if ($post_dialysis_data->edema == 1) {
                        $conditions .= 'edema' . ',';
                    }
                    if ($post_dialysis_data->hypoglycemia == 1) {
                        $conditions .= 'hypoglycemia' . ',';
                    }
                    if ($post_dialysis_data->diarrhea == 1) {
                        $conditions .= 'diarrhea' . ',';
                    }
                    if ($post_dialysis_data->orthostatic_hypotension == 1) {
                        $conditions .= 'orthostatic hypotension' . ',';
                    }
                    if ($post_dialysis_data->dizziness == 1) {
                        $conditions .= 'dizziness' . ',';
                    }

                    $conditions = rtrim($conditions, ',');

                    $data[] = [
                        'appointment_id' => $val->appointment_id,
                        'patient' => $patient_name,
                        'staff' => $staff_name,
                        'bp_systolic' => $bp_systolic,
                        'bp_diasystolic' => $bp_diasystolic,
                        'heart_rate' => $heart_rate,
                        'weight' => $weight,
                        'spo2' => $spo2,
                        'conditions' => $conditions,
                        'status' => 'Dialysis Completed',
                        'datetime' => $val->start_time,
                        'patient_parameters' => 'Visit',
                    ];
                }
            }

            if ($data != null) {
                return $this->success($data, 200);
            }

            return $this->error('not found', 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //doctor amount
    public function doctor_amount(Request $req)
    {
        try {
            $doc = Auth::user();

            $branch_array = explode(',', $doc->branch);
            $doc_amount = 0;
            $doc_dmy = $doc->perdmy;
            $doc_id = $doc->id;

            if ($req->code != null) {

                if (!in_array($req->code, $branch_array)) {
                    return $this->error('invalid code', 404);
                }


                if ($doc_dmy == 'year') {
                    $doc_amount = $doc->amount / 12;
                } elseif ($doc_dmy == 'month') {
                    $doc_amount = $doc->amount;
                } else {

                    $patient_id = Patient::select('patient_id')->where('doctor', $doc_id)->where('branch_name', $req->code)->get();

                    $pid = [];
                    foreach ($patient_id as $val)
                        $pid[] = $val->patient_id;


                    $distinct_patient_id = Appointment::select('patient_id')->whereIn('patient_id', $pid)->distinct('patient_id')->get();

                    $distinct_patient_id_array = [];
                    foreach ($distinct_patient_id as $val)
                        $distinct_patient_id_array[] = $val->patient_id;

                    $new_patient = Patient::select('patient_id')->whereNotIn('patient_id', $distinct_patient_id_array)->where('doctor', $doc_id)->where('branch_name', $req->code)->count();

                    // -------------------------


                    $a_id = Appointment::select('appointment_id', 'start_time')->whereIn('patient_id', $pid)->whereMonth('start_time', date('m'))->where('end_time', '!=', null)->get();

                    $a_id_array = [];
                    foreach ($a_id as $val)
                        $a_id_array[] = $val->appointment_id;

                    $emergency_patient = Pre_dialysis::whereIn('appointment_id', $a_id_array)->where('scheduled_emergency', 'emergency')->count();

                    // -------------------------


                    $a_id = Appointment::select('appointment_id')->whereIn('patient_id', $pid)->whereMonth('start_time', date('m'))->where('end_time', '!=', null)->get();

                    $a_id_array = [];
                    foreach ($a_id as $val)
                        $a_id_array[] = $val->appointment_id;

                    $scheduled_patient = Pre_dialysis::whereIn('appointment_id', $a_id_array)->where('scheduled_emergency', 'scheduled')->count();


                    $npc = $doc->new_patient;
                    $epc = $doc->emergency_pay;
                    $spc = $doc->scheduled_pay;


                    $doc_amount = $scheduled_patient * $spc + $emergency_patient * $epc + $new_patient * $npc;
                }
                return $this->success($doc_amount, 200);
            }



            if ($req->id != null) {

                $check_patient_related_to_doctor = Patient::where([['doctor', $doc->id], ['patient_id', $req->id]])->count();
                if (!$check_patient_related_to_doctor) {
                    return $this->error('invalid patient id');
                }

                if ($doc_dmy == 'year') {
                    $doc_amount = $doc->amount / 12;
                } elseif ($doc_dmy == 'month') {
                    $doc_amount = $doc->amount;
                } else {
                    $patient_id = Patient::select('patient_id')->where([['doctor', $doc->id], ['patient_id', $req->id]])->get();

                    $pid = [];
                    foreach ($patient_id as $val)
                        $pid[] = $val->patient_id;


                    $distinct_patient_id = Appointment::select('patient_id')->whereIn('patient_id', $pid)->distinct('patient_id')->get();

                    $distinct_patient_id_array = [];
                    foreach ($distinct_patient_id as $val)
                        $distinct_patient_id_array[] = $val->patient_id;

                    $new_patient = Patient::select('patient_id')->whereNotIn('patient_id', $distinct_patient_id_array)->where([['doctor', $doc->id], ['patient_id', $req->id]])->count();

                    // -------------------------

                    $a_id = Appointment::select('appointment_id', 'start_time')->whereIn('patient_id', $pid)->whereMonth('start_time', date('m'))->where('end_time', '!=', null)->get();

                    $a_id_array = [];
                    foreach ($a_id as $val)
                        $a_id_array[] = $val->appointment_id;

                    $emergency_patient = Pre_dialysis::whereIn('appointment_id', $a_id_array)->where('scheduled_emergency', 'emergency')->count();

                    // -------------------------

                    $a_id = Appointment::select('appointment_id')->whereIn('patient_id', $pid)->whereMonth('start_time', date('m'))->where('end_time', '!=', null)->get();

                    $a_id_array = [];
                    foreach ($a_id as $val)
                        $a_id_array[] = $val->appointment_id;

                    $scheduled_patient = Pre_dialysis::whereIn('appointment_id', $a_id_array)->where('scheduled_emergency', 'scheduled')->count();


                    $npc = $doc->new_patient;
                    $epc = $doc->emergency_pay;
                    $spc = $doc->scheduled_pay;


                    $doc_amount = $scheduled_patient * $spc + $emergency_patient * $epc + $new_patient * $npc;
                }
                return $this->success($doc_amount, 200);
            }




            if ($doc_dmy == 'year') {
                $doc_amount = $doc->amount / 12;
            } elseif ($doc_dmy == 'month') {
                $doc_amount = $doc->amount;
            } else {

                $patient_id = Patient::select('patient_id')->where('doctor', $doc_id)->get();

                $pid = [];
                foreach ($patient_id as $val)
                    $pid[] = $val->patient_id;


                $distinct_patient_id = Appointment::select('patient_id')->whereIn('patient_id', $pid)->distinct('patient_id')->get();

                $distinct_patient_id_array = [];
                foreach ($distinct_patient_id as $val)
                    $distinct_patient_id_array[] = $val->patient_id;

                $new_patient = Patient::select('patient_id')->whereNotIn('patient_id', $distinct_patient_id_array)->where('doctor', $doc_id)->count();

                // -------------------------

                $a_id = Appointment::select('appointment_id', 'start_time')->whereIn('patient_id', $pid)->whereMonth('start_time', date('m'))->where('end_time', '!=', null)->get();

                $a_id_array = [];
                foreach ($a_id as $val)
                    $a_id_array[] = $val->appointment_id;

                $emergency_patient = Pre_dialysis::whereIn('appointment_id', $a_id_array)->where('scheduled_emergency', 'emergency')->count();

                // -------------------------

                $a_id = Appointment::select('appointment_id')->whereIn('patient_id', $pid)->whereMonth('start_time', date('m'))->where('end_time', '!=', null)->get();

                $a_id_array = [];
                foreach ($a_id as $val)
                    $a_id_array[] = $val->appointment_id;

                $scheduled_patient = Pre_dialysis::whereIn('appointment_id', $a_id_array)->where('scheduled_emergency', 'scheduled')->count();


                $npc = $doc->new_patient;
                $epc = $doc->emergency_pay;
                $spc = $doc->scheduled_pay;


                $doc_amount = $scheduled_patient * $spc + $emergency_patient * $epc + $new_patient * $npc;
            }
            return $this->success($doc_amount, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
