<?php

namespace App\Http\Controllers\staff;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Staff;
use App\Models\Activity_log;
use App\Models\Manager;
use App\Models\Patient;
use App\Models\Centre;
use App\Models\Doctor;
use App\Models\Appointment;
use App\Models\booked_appointments;
use App\Models\Pre_dialysis;
use App\Models\Machine;
use App\Models\patient_bill;
use App\Models\StockMaintenance;
use App\Models\patient_parameter;
use App\Models\Post_dialysis;
use App\Traits\ResponseAPI;
use Exception;

class ManageStaffController extends Controller
{
    use ResponseAPI;
    public function removeStaff($staff_id = null)
    {
        try {
            if ($staff_id == null) {
                return response()->json([
                    'message' => 'staff not found',
                ], 404);
            } elseif (Staff::find($staff_id) == null) {
                return response()->json([
                    'message' => 'invalid staff id',
                ], 404);
            }

            $staff = Staff::find($staff_id);
            $staff->remove = 1;
            $remove = $staff->update();


            if ($remove) {
                $who = Auth::user();
                $check_user = substr($who->profile_pic, 0, 3);

                $activity_log = new Activity_log();
                $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has removed staff - ' . $staff->username;
                $activity_log->action = 'Removed Staff';
                $activity_log->save();
                return response()->json([
                    'success' => 'staff deleted successfully',
                ], 200);
            }

            return response()->json([
                'error' => "serve error,unable to delete staff",
            ], 500);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function ban_unban($staff_id = null)
    {
        try {
            if ($staff_id == null) {
                return response()->json([
                    'message' => 'not found',
                ], 404);
            } elseif (Staff::find($staff_id) == null) {
                return response()->json([
                    'message' => 'invalid staff id',
                ], 404);
            }

            $who = Auth::user();
            $check_user = substr($who->profile_pic, 0, 3);

            $staff = Staff::find($staff_id);
            $check = $staff->ban;

            if ($check == 0) {
                $staff->ban = 1;
                $ban = $staff->update();

                if ($ban) {

                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has removed staff - ' . $staff->username;
                    $activity_log->action = 'Banned Staff';
                    $activity_log->save();
                    return response()->json([
                        'success' => 'staff banned successfully',
                    ], 200);
                }

                return response()->json([
                    'error' => "serve error,unable to ban staff",
                ], 500);
            } elseif ($check == 1) {
                $staff->ban = 0;
                $unban = $staff->update();

                if ($unban) {
                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has removed staff - ' . $staff->username;
                    $activity_log->action = 'Unbanned Staff';
                    $activity_log->save();
                    return response()->json([
                        'success' => 'staff unbanned successfully',
                    ], 200);
                }

                return response()->json([
                    'error' => "serve error,unable to unban staff",
                ], 500);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    //API for Staff Portal >> Manage Patient
    public function getManagePatient(Request $req)
    {
        try {
            //API is used to display the patient details based on the branch provided
            $validator = Validator::make($req->all(), [
                "branch" => "required",
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }
            $branch = $req->branch;
            $raw_data = Manager::select('Patient.patient_id as patient_id', 'Patient.name as patient_name', 'branch_name')->where([['branch', "$branch"], ["blocked", "=", 0]])->join('Patient', 'Patient.branch_name', '=', 'Manager.branch')->distinct()->get();

            if ($raw_data->isEmpty()) {
                return response()->json([
                    'message' => 'not found',
                ], 404);
            }

            $data = [];
            foreach ($raw_data as $rd) {
                $pid = 'PID' . $rd['branch_name'] . $rd['patient_id'];
                $data[] = [
                    'pid' => $rd['patient_id'],
                    'patient_id' => $pid,
                    'patient_name' => $rd['patient_name'],
                ];
            }


            return response()->json([
                'message' => 'patient fetched',
                'data' => $data,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //get single patient
    public function listPatient(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), [
                "id" => "required"
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }
            $dataShow = Patient::select('Patient.patient_id as Patient_id', 'Doctor.id as DocId', 'Doctor.username as DocName', 'Patient.name as Patient', 'Patient.dob', 'Patient.age', 'Patient.gender', 'Patient.email', 'Patient.phone_number', 'Patient.address', 'Patient.covid', 'Patient.hhh', 'Patient.dpw', 'Patient.awaiting_transplantation', 'Patient.blood_group', 'patient.CKD_5D_HTN', 'Patient.stability', 'Patient.heart_function', 'Patient.injection', 'Patient.urea', 'Patient.creatinine', 'Patient.bun', 'Patient.ecg', 'Patient.bp_stable', 'Patient.habits', 'Patient.diet', 'Patient.a', 'Patient.v', 'Patient.n', 'Patient.s', 'Patient.d', 'Patient.access', 'Patient.blocked')->where([['Patient_id', $req->id], ['blocked', 0]])->join('Doctor', 'Doctor.id', '=', 'Patient.doctor')->get();

            if ($dataShow->isEmpty()) {
                return response()->json([
                    'message' => 'not found',
                ], 404);
            }

            return response()->json(['data' => $dataShow], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function updatePatientDetails(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), [
                "patient_id" => "required",
                "name" => "required",
                "dob" => "required",
                "age" => "required",
                "gender" => "required",
                "email" => "required",
                "phone_number" => "required|unique:Patient",
                "address" => "required",
                "hhh" => "required",
                "covid" => "required|numeric|min:0|max:1",
                "doctor" => "required",
                "dialysis_per_week" => "required",
                "awaiting_transplantation" => "required|numeric|min:0|max:1",
                "blood_group" => "required",
                "CKD_5D_HTN" => "required",
                "stability" => "required|numeric|min:0|max:1",
                "heart_function" => "required",
                "injection" => "required|numeric|min:0|max:1",
                "urea" => "required",
                "creatinine" => "required",
                "bun" => "required",
                "ecg" => "required|numeric|min:0|max:1",
                "bp_stable" => "required|numeric|min:0|max:1",
                "habits" => "required",
                "diet" => "required",
                "anorexia" => "required",
                "vomiting" => "required",
                "nausea" => "required",
                "swelling" => "required",
                "diarrhea" => "required",
                "access" => "required",
                "blocked" => "required"

            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }


            $update = Patient::find($req->patient_id);
            $update->name = $req->name;
            $update->dob = $req->dob;
            $update->age = $req->age;
            $update->gender = $req->gender;
            $update->email = $req->email;
            $update->phone_number = $req->phone_number;
            $update->address = $req->address;
            $update->hhh = $req->hhh;
            $update->dpw = $req->dialysis_per_week;
            $update->covid = $req->covid;
            $update->doctor = $req->doctor;
            $update->awaiting_transplantation = $req->awaiting_transplantation;
            $update->blood_group = $req->blood_group;
            $update->CKD_5D_HTN = $req->CKD_5D_HTN;
            $update->stability = $req->stability;
            $update->heart_function = $req->heart_function;
            $update->injection = $req->injection;
            $update->urea = $req->urea;
            $update->creatinine = $req->creatinine;
            $update->bun = $req->bun;
            $update->ecg = $req->ecg;
            $update->bp_stable = $req->bp_stable;
            $update->habits = $req->habits;
            $update->diet = $req->diet;
            $update->a = $req->anorexia;
            $update->v = $req->vomiting;
            $update->n = $req->nausea;
            $update->s = $req->swelling;
            $update->d = $req->diarrhea;
            $update->access = $req->access;
            $update->blocked = $req->blocked;
            $updateStatus = $update->save();

            if ($updateStatus == 1) {
                return response()->json(['message' => 'Update Success'], 200);
            } else {
                return response()->json(['message' => 'Insertion Failure'], 404);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function offlineRecordFetchOne(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), [
                'branch_name' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }
            //here branc will be matched
            $staff = Staff::select('id as StaffId', 'username', 'branch')->where([['branch', $req->branch_name], ["remove", 0]])->get();
            if ($staff->isEmpty()) {
                return response()->json([
                    'message' => 'not found'
                ], 404);
            }
            return response()->json([
                'message' => 'staff fetched',
                'data' => $staff
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function offlineRecordFetchTwo(Request $req)
    {
        try {
            /*this api will return offline record , dialysis start time, dialysis end time and also arrival date*/
            $appointment  = Patient::select('appointments.start_time', 'appointments.end_time', 'Patient.patient_id')->where('Patient.patient_id', $req->id)->join('appointments', 'appointments.patient_id', '=', 'Patient.patient_id')->get();

            return response()->json($appointment);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function offlineRecordFetchThree(Request $req)
    {
        return response()->json(Appointment::select('appointments.appointment_id as AppointmentId', 'appointments.patient_id as PatientId', 'appointments.start_time as AppointmentStartTime', 'appointments.end_time as AppointmentEndTime', 'appointments.record_type as AppoinenetRecordType', 'Pre_dialysis.bp_systolic as PreDialysisBPSystolic', 'Pre_dialysis.bp_diasystolic  as PreDialysisBPDystolic', 'Pre_dialysis.heart_rate  as PreDialysisHeartRate', 'Pre_dialysis.weight   as PreDialysisWeight', 'Pre_dialysis.spo2   as PreDialysisSPO2', 'Pre_dialysis.reused_dialyzer   as PreDialysisReusedDialyzer', 'Pre_dialysis.reused_tubing   as PreDialysisReusedTubing', 'Pre_dialysis.bp_high   as PreDialysisBPHigh', 'Pre_dialysis.bp_low   as PreDialysisBPLow', 'Pre_dialysis.nausea   as PreDialysisNausea', 'Pre_dialysis.vomiting   as PreDialysisVomiting', 'Pre_dialysis.short_breath   as PreDialysisShortBreath', 'Pre_dialysis.bleeding   as PreDialysisBleeding', 'Pre_dialysis.edema   as PreDialysisEdema', 'Pre_dialysis.stomach_distend   as PreDialysisStomachDistend', 'Pre_dialysis.diarrhea   as PreDialysisDiarrhea', 'Pre_dialysis.other   as PreDialysisOther', 'Pre_dialysis.machine_id   as PreDialysisMachine_id', 'Pre_dialysis.scheduled_emergency   as PreDialysisScheduledEmergency', 'Pre_dialysis.access_av   as PreDialysisAccess_AV', 'Pre_dialysis.remarks   as PreDialysisRemarks', 'Pre_dialysis.site_condition   as PreDialysisSiteCondition', 'Pre_dialysis.explain   as PreDialysisExplain', 'Pre_dialysis.private   as PreDialysisPrivate', 'machines.machine_id as MachineId', 'machines.machine_type as MachineType', 'patient_parameter.time', 'patient_parameter.bps', 'patient_parameter.bpd', 'patient_parameter.pulse', 'patient_parameter.uf_rate', 'patient_parameter.uf_volume', 'patient_parameter.bf_rate', 'patient_parameter.ap', 'patient_parameter.vp', 'patient_parameter.tmp', 'patient_parameter.kv/t', 'Post_dialysis.*')->where('patient_id', $req->id)->join('Pre_dialysis', 'Pre_dialysis.appointment_id', '=', 'appointments.appointment_id')->join('machines', 'machines.machine_id', '=', 'Pre_dialysis.machine_id')->join('patient_parameter', 'patient_parameter.appointment_id', '=', 'appointments.appointment_id')->join('Post_dialysis', 'Post_dialysis.appointment_id', '=', 'appointments.appointment_id')->get());
    }


    public function offlineRecordFetchConsuPharma(Request $req)
    {
        try {
            if ($req->type == "consumable") {
                return response()->json(StockMaintenance::where([['category', 'consumable'], ["branch_name", $req->branch_name]])->get());
            } else if ($req->type == "pharmaceutical") {
                return response()->json(StockMaintenance::where([['category', 'pharmaceutical'], ["branch_name", $req->branch_name]])->get());
            } else {
                return response()->json("Invalid Input");
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    function who_has_performed()
    {
        try {
            $who = Auth::user();
            $check_user = substr($who->profile_pic, 0, 3);
            if ($check_user == 'SID') {
                return ' (SID)';
            } elseif ($check_user == 'MID') {
                return ' (MID)';
            } elseif ($check_user == 'AID') {
                return ' (AID)';
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function offlineRecordInsert(Request $req)
    {
        try {


            $rules = [
                "basic_details" => [
                    'patient_id' => "required",
                    'opening_staff' => "required",
                    'closing_staff' => "required",
                    'arrival_date' => "required|date",
                    "start_time" => "required|date_format:H:i",
                    "end_time" =>  "required|date_format:H:i",
                ],


                "pre_dialysis" => [
                    'bp_systolic' => 'required|numeric|min:110:|max:140',
                    'bp_diasystolic' => 'required|numeric|min:70|max:90',
                    'heart_rate' => 'required|numeric|min:60|max:100',
                    "weight" => "required",
                    "spo2"  => "required",
                    'spo2' => 'required|min:95|max:100|numeric',
                    'reused_dialyzer' => 'required|min:0|max:10|numeric',
                    'reused_tubing' => 'required|min:0|max:10|numeric',
                    "machine_id" => "required",
                    "scheduled_emergency" => "required",
                    "access_av" => "required",
                    "bp_high" => "required|numeric|min:0|max:1",
                    "bp_low" => "required|numeric|min:0|max:1",
                    "nausea" => "required|numeric|min:0|max:1",
                    "vomiting" => "required|numeric|min:0|max:1",
                    "short_breath" => "required|numeric|min:0|max:1",
                    "bleeding" => "required|numeric|min:0|max:1",
                    "edema" => "required|numeric|min:0|max:1",
                    "stomach_distend" => "required|numeric|min:0|max:1",
                    "diarrhea" => "required|numeric|min:0|max:1",
                    "other" => "nullable",
                    "remarks" => "nullable",
                    "site_condition" => "nullable",
                    "explain" => "nullable",
                ],

                "patient_parameter" => [
                    "*.time" => "required|date_format:H:i:s",
                    "*.bps" => "required",
                    "*.bpd" => "required",
                    "*.pulse" => "required",
                    "*.uf_rate" => "required",
                    "*.uf_volume" => "required",
                    "*.ap" => "required",
                    "*.vp" => "required",
                    "*.tmp" => "required",
                    "*.kvt" => "required",
                    "*.actions" => "required",
                ],

                "post_dialysis" => [
                    'bp_systolic' => 'required|numeric|min:110:|max:140',
                    'bp_diasystolic' => 'required|numeric|min:70|max:90',
                    'heart_rate' => 'required|numeric|min:60|max:100',
                    "weight" => "required",
                    "eh" => "required",
                    "mode_of_transport" => "required",
                    "bp_high" => "required|numeric|min:0|max:1",
                    "bp_low" => "required|numeric|min:0|max:1",
                    "nausea" => "required|numeric|min:0|max:1",
                    "vomiting" => "required|numeric|min:0|max:1",
                    "short_breath" => "required|numeric|min:0|max:1",
                    "bleeding" => "required|numeric|min:0|max:1",
                    "edema" => "required|numeric|min:0|max:1",
                    "hypoglycemia" => "required|numeric|min:0|max:1",
                    "diarrhea" => "required|numeric|min:0|max:1",
                    "other" => "nullable",
                    "remarks" => "nullable",
                    "dizziness" => "required|numeric|min:0|max:1",
                    "orthostatic_hypotension" => "required|numeric|min:0|max:1",
                    'early_discharge' => 'required|numeric:min:0|max:1',

                ]
            ];

            $errors = [];

            $validate_basic_details = Validator::make($req->all()['basic_details'], $rules['basic_details']);
            $validate_patient_parameter = Validator::make($req->all()['patient_parameter'], $rules['patient_parameter']);
            $validate_pre_dialysis = Validator::make($req->all()['pre_dialysis'], $rules['pre_dialysis']);
            $validate_post_dialysis = Validator::make($req->all()['post_dialysis'], $rules['post_dialysis']);


            if ($validate_basic_details->fails())
                $errors['validate_basic_details'] = $validate_basic_details->errors();

            if ($validate_patient_parameter->fails())
                $errors['validate_patient_parameter'] = $validate_patient_parameter->errors();

            if ($validate_pre_dialysis->fails())
                $errors['validate_pre_dialysis'] = $validate_pre_dialysis->errors();

            if ($validate_post_dialysis->fails())
                $errors['validate_post_dialysis'] = $validate_post_dialysis->errors();

            if ($validate_basic_details->fails() || $validate_patient_parameter->fails() || $validate_pre_dialysis->fails() || $validate_post_dialysis->fails()) {
                return response()->json([
                    'message' => 'validation error',
                    'errors' => $errors,
                ], 403);
            }



            $postdialysis_data = $req->all()['post_dialysis'];
            //start stock validation
            $branch_name = Auth::user()->branch;
            $failed_consumables = [];
            foreach ($postdialysis_data['consumables'] as $key => $val) {
                $stock_count = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $key], ['brand', $val['brand']]])->sum('available_count');

                $check = ($stock_count >= $val['count']) ? 1 : 0;

                if (!$check) {
                    $failed_consumables[] = $key;
                }
            }

            $failed_pharmaceuticals = [];
            foreach ($postdialysis_data['pharmaceuticals'] as $key => $val) {
                $stock_count = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $key], ['brand', $val['brand']]])->sum('available_count');

                $check = ($stock_count >= $val['count']) ? 1 : 0;

                if (!$check) {
                    $failed_pharmaceuticals[] = $key;
                }
            }

            if ($failed_pharmaceuticals != null && $failed_consumables != null) {
                return response()->json([
                    'message' => 'something went wrong',
                    'failed' => [
                        'pharmaceuticals' => $failed_pharmaceuticals,
                        'consumables' => $failed_consumables
                    ]
                ], 404);
            } elseif ($failed_pharmaceuticals != null) {
                return response()->json([
                    'message' => 'something went wrong',
                    'failed' => [
                        'pharmaceuticals' => $failed_pharmaceuticals,
                    ]
                ], 404);
            } elseif ($failed_consumables != null) {
                return response()->json([
                    'message' => 'something went wrong',
                    'failed' => [
                        'consumables' => $failed_consumables
                    ]
                ], 404);
            }
            //end stock validation




            $arrival_date = $req->all()['basic_details']['arrival_date'];
            $start_time = $arrival_date . " " . $req->all()['basic_details']['start_time'] . ":00";
            $end_time = $arrival_date . " " . $req->all()['basic_details']['end_time'] . ":00";
            $patient_id = $req->all()['basic_details']['patient_id'];

            $appointment_insert = new Appointment();
            $appointment_insert->patient_id = $patient_id;
            $appointment_insert->start_time = $start_time;
            $appointment_insert->end_time = $end_time;
            $appointment_insert->record_type = "pre_dialysis";
            $saved_appointment = $appointment_insert->save();
            $apid = $appointment_insert->appointment_id;

            if (!$saved_appointment) {
                return response()->json([
                    'meessage' => 'unable to save record'
                ], 500);
            }


            //pre dialysis
            $opening_staff = $req->all()['basic_details']['opening_staff'];
            $predialysis_data = $req->all()['pre_dialysis'];
            $predialysis_insert = new Pre_dialysis();
            $predialysis_insert->appointment_id = $apid;
            $predialysis_insert->bp_systolic = $predialysis_data['bp_systolic'];
            $predialysis_insert->bp_diasystolic  = $predialysis_data['bp_diasystolic'];
            $predialysis_insert->heart_rate = $predialysis_data['heart_rate'];
            $predialysis_insert->weight = $predialysis_data['weight'];
            $predialysis_insert->spo2 = $predialysis_data['spo2'];
            $predialysis_insert->reused_dialyzer = $predialysis_data['reused_dialyzer'];
            $predialysis_insert->dialyzer  = $predialysis_data['dialyzer'];
            $predialysis_insert->reused_tubing = $predialysis_data['reused_tubing'];
            $predialysis_insert->machine_id = $predialysis_data['machine_id'];
            $predialysis_insert->scheduled_emergency = $predialysis_data['scheduled_emergency'];
            $predialysis_insert->access_av = $predialysis_data['access_av'];
            $predialysis_insert->bp_high = $predialysis_data['bp_high'];
            $predialysis_insert->bp_low = $predialysis_data['bp_low'];
            $predialysis_insert->nausea = $predialysis_data['nausea'];
            $predialysis_insert->vomiting = $predialysis_data['vomiting'];
            $predialysis_insert->short_breath = $predialysis_data['short_breath'];
            $predialysis_insert->bleeding = $predialysis_data['bleeding'];
            $predialysis_insert->edema = $predialysis_data['edema'];
            $predialysis_insert->stomach_distend = $predialysis_data['stomach_distend'];
            $predialysis_insert->diarrhea = $predialysis_data['diarrhea'];
            $predialysis_insert->other = $predialysis_data['other'];
            $predialysis_insert->remarks = $predialysis_data['remarks'];
            $predialysis_insert->site_condition = $predialysis_data['site_condition'];
            $predialysis_insert->explain = $predialysis_data['explain'];
            $predialysis_insert->private = $predialysis_data['private'];
            $predialysis_insert->technician = $opening_staff;
            $saved_predialysis = $predialysis_insert->save();


            //post dialysis
            $postdialysis_insert = new Post_dialysis();
            $postdialysis_insert->bp_systolic = $postdialysis_data['bp_systolic'];
            $postdialysis_insert->appointment_id = $apid;
            $postdialysis_insert->bp_diasystolic  = $postdialysis_data['bp_diasystolic'];
            $postdialysis_insert->heart_rate = $postdialysis_data['heart_rate'];
            $postdialysis_insert->weight = $postdialysis_data['weight'];
            $postdialysis_insert->eh = $postdialysis_data['eh'];
            $postdialysis_insert->mode_of_transport = $postdialysis_data['mode_of_transport'];
            $postdialysis_insert->bp_high = $postdialysis_data['bp_high'];
            $postdialysis_insert->bp_low = $postdialysis_data['bp_low'];
            $postdialysis_insert->nausea = $postdialysis_data['nausea'];
            $postdialysis_insert->vomiting = $postdialysis_data['vomiting'];
            $postdialysis_insert->short_breath = $postdialysis_data['short_breath'];
            $postdialysis_insert->bleeding = $postdialysis_data['bleeding'];
            $postdialysis_insert->edema = $postdialysis_data['edema'];
            $postdialysis_insert->hypoglycemia = $postdialysis_data['hypoglycemia'];
            $postdialysis_insert->diarrhea = $postdialysis_data['diarrhea'];
            $postdialysis_insert->other = $postdialysis_data['other'];
            $postdialysis_insert->remarks = $postdialysis_data['remarks'];
            $postdialysis_insert->dizziness = $postdialysis_data['dizziness'];
            $postdialysis_insert->orthostatic_hypotension = $postdialysis_data['orthostatic_hypotension'];





            // saving consumables in patient bill

            foreach ($postdialysis_data['consumables'] as $key => $val) {

                $patient_bill = new patient_bill();

                if ($predialysis_data['private'] == 'yes') {
                    $sp_and_cp = StockMaintenance::select('calculated_cost_price', 'private_selling_price')->where([['product_name', $key], ['brand', $val['brand']], ['available_count', '>=', $val['count']], ['branch_name', $branch_name]])->first();
                    $cp = $sp_and_cp->calculated_cost_price;
                    $sp = $sp_and_cp->private_selling_price;
                } else {
                    $sp_and_cp = StockMaintenance::select('calculated_cost_price', 'mjpjay_selling_price')->where([['product_name', $key], ['brand', $val['brand']], ['available_count', '>=', $val['count']], ['branch_name', $branch_name]])->first();
                    $cp = $sp_and_cp->calculated_cost_price;
                    $sp = $sp_and_cp->mjpjay_selling_price;
                }

                $patient_bill->appointment_id = $apid;
                $patient_bill->name = $key;
                $patient_bill->brand = $val['brand'];
                $patient_bill->count = $val['count'];
                $patient_bill->selling_price = $sp;
                $patient_bill->cost_price = $cp;

                $patient_bill->save();
            }

            //end saving consumables in patient bill



            // saving pharmaceuticals in patient bill

            foreach ($postdialysis_data['pharmaceuticals'] as $key => $val) {

                $patient_bill = new Patient_Bill();

                if ($predialysis_data['private'] == 'yes') {
                    $sp_and_cp = StockMaintenance::select('calculated_cost_price', 'private_selling_price')->where([['product_name', $key], ['brand', $val['brand']], ['available_count', '>=', $val['count']], ['branch_name', $branch_name]])->first();
                    $cp = $sp_and_cp->calculated_cost_price;
                    $sp = $sp_and_cp->private_selling_price;
                } else {
                    $sp_and_cp = StockMaintenance::select('calculated_cost_price', 'mjpjay_selling_price')->where([['product_name', $key], ['brand', $val['brand']], ['available_count', '>=', $val['count']], ['branch_name', $branch_name]])->first();
                    $cp = $sp_and_cp->calculated_cost_price;
                    $sp = $sp_and_cp->mjpjay_selling_price;
                }

                $patient_bill->appointment_id = $apid;
                $patient_bill->name = $key;
                $patient_bill->brand = $val['brand'];
                $patient_bill->count = $val['count'];
                $patient_bill->selling_price = $sp;
                $patient_bill->cost_price = $cp;

                $patient_bill->save();
            }


            //end saving pharmaceuticals in patient bill




            // amount and additonal amount work

            //charges
            $centre_charge = Centre::where('code', $branch_name)->first();

            // reg fee
            $is_patient_first_time = Appointment::where('patient_id', $patient_id)->count();
            $reg_fee = 0;
            if ($is_patient_first_time == 1)
                $reg_fee = $centre_charge->registration_fee;


            //  fee
            if ($predialysis_data['private'] == 'yes') {   //if yes

                $scheduled_emergency = $predialysis_data['scheduled_emergency'];

                if ($scheduled_emergency == 'scheduled')
                    $fee = $centre_charge->normal_fee;
                else
                    $fee = $centre_charge->emergency_fee;
            } else {

                $scheduled_emergency = $predialysis_data['scheduled_emergency'];

                if ($scheduled_emergency == 'scheduled')
                    $fee = $centre_charge->m_scheduled;
                else
                    $fee = $centre_charge->m_emergency;
            }


            // extra hour
            if ($predialysis_data['private'] == 'yes')   //if yes
                $extra_hour_fee = $centre_charge->per_hour_fee * $postdialysis_data['eh'];
            else
                $extra_hour_fee = $centre_charge->m_eh * $postdialysis_data['eh'];


            // total selling price
            $stock = Patient_Bill::select('selling_price', 'count')->where('appointment_id', $apid)->get();
            $stock_amount = 0;
            foreach ($stock as $val) {
                $stock_amount += $val->selling_price * $val->count;
            }


            //total amount
            $total_amount = $extra_hour_fee + $fee;
            $total_additional_amount = $stock_amount + $reg_fee;

            //end amount and additonal amount work


            $postdialysis_insert->amount = $total_amount;
            $postdialysis_insert->additional_amount = $total_additional_amount;
            $postdialysis_insert->paid = '0';
            $postdialysis_insert->mop = ' ';
            $closing_staff = $req->all()['basic_details']['closing_staff'];
            $postdialysis_insert->technician = $closing_staff;
            $postdialysis_insert->remarks = ($postdialysis_data['remarks'] == null) ? ' ' : $postdialysis_data['remarks'];
            $postdialysis_insert->early_discharge = $postdialysis_data['early_discharge'];
            $saved_postdialysis = $postdialysis_insert->save();

            //stock removing
            foreach ($postdialysis_data['pharmaceuticals'] as $key => $val) {
                $to_remove = $val['count'];
                $remove_stock = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $key], ['brand', $val['brand']]])->get();
                foreach ($remove_stock as $rs) {
                    if ($rs->available_count == 0) {
                        continue;
                    }
                    if ($to_remove <= $rs->available_count) {
                        $rs->available_count = $rs->available_count - $to_remove;
                        $rs->update();
                        break;
                    } elseif ($to_remove >= $rs->available_count) {
                        $temp_count = $rs->available_count;
                        $rs->available_count = 0;
                        $rs->update();
                        $to_remove -= $temp_count;
                    }
                }
            }

            foreach ($postdialysis_data['consumables'] as $key => $val) {
                $to_remove = $val['count'];
                $remove_stock = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $key], ['brand', $val['brand']]])->get();
                foreach ($remove_stock as $rs) {
                    if ($rs->available_count == 0) {
                        continue;
                    }
                    if ($to_remove <= $rs->available_count) {
                        $rs->available_count = $rs->available_count - $to_remove;
                        $rs->update();
                        break;
                    } elseif ($to_remove >= $rs->available_count) {
                        $temp_count = $rs->available_count;
                        $rs->available_count = 0;
                        $rs->update();
                        $to_remove -= $temp_count;
                    }
                }
            }

            // end stock removing

            //patient_parameter
            $parameter = $req->all()['patient_parameter'];
            $x = 1;
            foreach ($parameter as $p) {
                $data = [
                    'id' => $x,
                    'appointment_id' => 1864,
                    'time' => $p['time'],
                    "bps" => $p['bps'],
                    "bpd" => $p['bpd'],
                    "pulse" => $p['pulse'],
                    "uf_rate" => $p['uf_rate'],
                    "uf_volume" => $p['uf_volume'],
                    "bf_rate" => $p['bf_rate'],
                    "ap" => $p['ap'],
                    "vp" => $p['vp'],
                    "tmp" => $p['tmp'],
                    "kv/t" => $p['kvt'],
                    "actions" => $p['actions']
                ];
                $patient_parameter = new patient_parameter();
                $patient_parameter->create($data);
                $x++;
            }




            if ($saved_postdialysis && $saved_predialysis) {

                $who = Auth::user();
                $activity_log = new Activity_log();
                $activity_log->log = $who->username . $this->who_has_performed() . '  has uploaded offline record : patient_id - ' . $patient_id;
                $activity_log->action = 'submitted offline record';
                $activity_log->save();

                return response()->json([
                    'message' => 'offline record saved saved'
                ], 200);
            } else {
                return response()->json([
                    'message' => 'unable to save record'
                ], 500);
            }






            //     $validator = Validator::make($req->all(),
            //     [

            //         "patient_id" => "required",

            //         "start_time" => "required",
            //         "end_time" =>  "required",
            //          "appointment_id" => "required",

            //          "bp_systolic" => "required",
            //          "bp_diasystolic"  => "required",
            //          "heart_rate" =>"required",
            //          "weight" => "required",
            //          "spo2"  => "required",
            //          "reused_dialyzer" => "required",
            //          "dialyzer"  => "required",
            //          "reused_tubing" => "required",
            //          "machine_id" => "required",
            //          "scheduled_emergency" => "required",
            //          "access_av" => "required",
            //          "bp_high" => "required",
            //          "bp_low" => "required",
            //          "nausea" => "required",
            //          "vomiting" => "required",
            //          "short_breath" => "required",
            //         "bleeding" => "required",
            //          "edema" => "required",
            //          "stomach_distend" => "required",
            //          "diarrhea" => "required",
            //          "other" => "required",
            //          "remarks" => "required",
            //          "site_condition" => "required",
            //          "explain" => "required",

            //          "time" => "required",
            //          "bps" => "required",
            //          "bpd" => "required",
            //          "pulse" => "required",
            //          "uf_rate" => "required",
            //          "uf_volume" => "required",
            //          "ap" => "required",
            //          "vp" => "required",
            //          "tmp" => "required",
            //        "kvt" => "required",
            //        "actions" => "required" ,

            //        "bp_systolic" => "required",
            //        "bp_diasystolic"  => "required",
            //        "heart_rate" => "required",
            //        "weight" => "required",
            //        "eh" => "required",
            //        "mode_of_transport" => "required",
            //        "bp_high" => "required",
            //        "bp_low" => "required",
            //        "nausea" => "required",
            //        "vomiting" => "required",
            //        "short_breath" => "required",
            //        "bleeding" => "required",
            //        "edema" => "required",
            //        "hypoglycemia" => "required",
            //      "diarrhea" => "required",
            //        "other" => "required",
            //        "remarks" => "required",
            //        "dizziness" => "required",
            //      "orthostatic_hypotension" => "required"

            //     ]);

            //     foreach($validator->messages()->getMessages() as $field_name => $messages)
            //     {
            //       foreach($messages AS $message)
            //       {
            //           return response()->json(['message'=>$message],200);
            //       }

            //     }


            //   $appointment = new Appointment();
            //   $appointment->patient_id = $req->patient_id;
            //   $appointment->start_time = $req->start_time;
            //   $appointment->end_time = $req->end_time;
            //   $appointment->record_type = "pre_dialysis";

            //     //   return $apid = Appointment::orderBy('appointment_id','desc')->first()->appointment_id+1;

            //     $predialysis = new Pre_dialysis();
            //     $predialysis->appointment_id = $req->appointment_id;
            //       $predialysis->bp_systolic = $req->bp_systolic;
            //       $predialysis->bp_diasystolic  = $req->bp_diasystolic;
            //       $predialysis->heart_rate = $req->heart_rate;
            //       $predialysis->weight = $req->weight;
            //       $predialysis->spo2 = $req->spo2;
            //       $predialysis->reused_dialyzer = $req->reused_dialyzer;
            //       $predialysis->dialyzer  = $req->dialyzer;
            //       $predialysis->reused_tubing = $req->reused_tubing;
            //       $predialysis->machine_id = $req->machine_id;
            //       $predialysis->scheduled_emergency = $req->scheduled_emergency;
            //       $predialysis->access_av = $req->access_av;
            //       $predialysis->bp_high = $req->bp_high;
            //       $predialysis->bp_low = $req->bp_low;
            //       $predialysis->nausea = $req->nausea;
            //       $predialysis->vomiting = $req->vomiting;
            //       $predialysis->short_breath = $req->short_breath;
            //       $predialysis->bleeding = $req->bleeding;
            //       $predialysis->edema = $req->edema;
            //       $predialysis->stomach_distend = $req->stomach_distend;
            //       $predialysis->diarrhea = $req->diarrhea;
            //       $predialysis->other = $req->other;
            //       $predialysis->remarks = $req->remarks;
            //       $predialysis->site_condition = $req->site_condition;
            //       $predialysis->explain = $req->explain;
            //      // $predialysis->save();

            //      $patientPara = new patient_parameter();
            //       $patientPara->time = $req->time;
            //       $patientPara->bps = $req->bps;
            //       $patientPara->bpd = $req->bpd;
            //       $patientPara->pulse = $req->pulse;
            //       $patientPara->uf_rate = $req->uf_rate;
            //       $patientPara->uf_volume = $req->uf_volume;
            //       $patientPara->ap = $req->ap;
            //       $patientPara->vp = $req->vp;
            //       $patientPara->tmp = $req->tmp;
            //       //below column name need to be changed in db(patient_parameter) as there it is kv/t.
            //       //please uncomment it after making changes in db
            //     $patientPara->kvt = $req->kvt;
            //     $patientPara->actions = $req->actions;
            //    // $patientPara->save();

            //     //$postdialysis = Post_dialysis::find($req->id);
            //     $postdialysis = new Post_dialysis();
            //     $postdialysis->bp_systolic = $req->bp_systolic;
            //     $postdialysis->bp_diasystolic  = $req->bp_diasystolic;
            //     $postdialysis->heart_rate = $req->heart_rate;
            //     $postdialysis->weight = $req->weight;
            //     $postdialysis->eh = $req->eh;
            //     $postdialysis->mode_of_transport = $req->mode_of_transport;
            //     $postdialysis->bp_high = $req->bp_high;
            //     $postdialysis->bp_low = $req->bp_low;
            //     $postdialysis->nausea = $req->nausea;
            //     $postdialysis->vomiting = $req->vomiting;
            //     $postdialysis->short_breath = $req->short_breath;
            //     $postdialysis->bleeding = $req->bleeding;
            //     $postdialysis->edema = $req->edema;
            //     $postdialysis->hypoglycemia = $req->hypoglycemia;
            //     $postdialysis->diarrhea = $req->diarrhea;
            //     $postdialysis->other = $req->other;
            //     $postdialysis->remarks = $req->remarks;
            //     $postdialysis->dizziness = $req->dizziness;
            //     $postdialysis->orthostatic_hypotension = $req->orthostatic_hypotension;


            //       if((  $appointment->save()) && ( $predialysis->save())  && (  $patientPara->save()) &&($postdialysis->save()) )
            //       {
            //            return response()->json(['message'=>'Insertion Success'],200);
            //       }
            //       else
            //       {
            //         return response()->json(['message'=>'Insertion Failure'],200);
            //       }


        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    public function staff_home_dialysis(Request $req)
    {
        try {
            $name = Patient::select('name', 'appointments.start_time')->where([['Patient.name', 'like', "$req->name%"], ["blocked", "=", 0]])->join('home_dialysis', 'home_dialysis.patient_id', '=', 'Patient.patient_id')->join('appointments', 'appointments.patient_id', '=', 'Patient.patient_id')->get();
            return response()->json(['data' => $name], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    public function upcomingAppointment(Request $req)
    {
        try {
            $who = substr(Auth::user()->profile_pic, 0, 3);

            if ($who == 'SID') {
                $staff_branch = Auth::user()->branch;
                $appointment = booked_appointments::where('branch_code', $staff_branch)->select('booked_appointments.id', 'booked_appointments.patient_id', 'Patient.name', 'booked_appointments.date', 'booked_appointments.slot', 'booked_appointments.cancelled', 'Centre.beds_count', 'booked_appointments.bed_id')->join('Patient', 'Patient.patient_id', '=', 'booked_appointments.patient_id')->join('Centre', 'Centre.code', '=', 'booked_appointments.branch_code')->get();
            } else {
                $appointment = booked_appointments::select('booked_appointments.id', 'booked_appointments.patient_id', 'Patient.name', 'booked_appointments.date', 'booked_appointments.slot', 'booked_appointments.cancelled', 'Centre.beds_count', 'booked_appointments.bed_id')->join('Patient', 'Patient.patient_id', '=', 'booked_appointments.patient_id')->join('Centre', 'Centre.code', '=', 'booked_appointments.branch_code')->get();
            }

            if ($appointment->isEmpty()) {
                return response()->json([
                    'message' => 'not found'
                ], 404);
            }

            return response()->json(['data' => $appointment], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    public function upcomingAppointmentById($upcoming_app_id = null)
    {
        try {
            if ($upcoming_app_id != null) {
                $check = booked_appointments::find($upcoming_app_id);
                if (is_null($check)) {
                    return response()->json([
                        'message' => 'not found',
                    ], 404);
                }
            } else {
                return response()->json([
                    'message' => 'invalid appointment id',
                ], 403);
            }

            $who = substr(Auth::user()->profile_pic, 0, 3);
            if ($who == 'SID') {
                $staff_branch = Auth::user()->branch;
                if ($check->branch_code == $staff_branch)
                    $appointment = booked_appointments::where('booked_appointments.id', $upcoming_app_id)->select('booked_appointments.id', 'booked_appointments.patient_id', 'Patient.name', 'booked_appointments.date', 'booked_appointments.slot', 'booked_appointments.cancelled', 'Centre.beds_count', 'booked_appointments.bed_id')->join('Patient', 'Patient.patient_id', '=', 'booked_appointments.patient_id')->join('Centre', 'Centre.code', '=', 'booked_appointments.branch_code')->get();
                else {
                    return response()->json([
                        'message' => 'not found',
                    ], 404);
                }
            } else {
                $appointment = booked_appointments::where('id', $upcoming_app_id)->select('booked_appointments.id', 'booked_appointments.patient_id', 'Patient.name', 'booked_appointments.date', 'booked_appointments.slot', 'booked_appointments.cancelled', 'Centre.beds_count', 'booked_appointments.bed_id')->join('Patient', 'Patient.patient_id', '=', 'booked_appointments.patient_id')->join('Centre', 'Centre.code', '=', 'booked_appointments.branch_code')->get();
            }

            if ($appointment->isEmpty()) {
                return response()->json([
                    'message' => 'not found'
                ], 404);
            }

            return response()->json(['data' => $appointment], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function updateUpcomingAppointment(Request $req)
    {
        try {
            $curr_time = date('H:i');
            $curr_date = date('Y-m-d');

            // return $req->all();

            $rules = [
                'upcoming_app_id' => 'required',
                'date' => 'required|date_format:Y-m-d|after:' . $curr_date,
                'slot' => "required|numeric|min:1|max:3",
                'bed_counter' => 'required|min:1|max:3',
                'time' => "required|date_format:H:i|after:$curr_time"
            ];

            $validator = Validator::make($req->all(), $rules);
            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            // return booked_appointments::where('id', $req->upcoming_app_id)->get();

            $app_date = $req->date . ' ' . $req->time . ':00';

            $updbappointment = booked_appointments::where('id', $req->upcoming_app_id)->update([
                "date" => $app_date,
                "slot" => $req->slot,
                "bed_id" => $req->bed_counter,
            ]);


            if ($updbappointment) {
                return response()->json([
                    'message' => 'Updated successfully'
                ], 200);
            } else {
                return response()->json([
                    'message' => 'unable to update'
                ], 500);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //Staff Portal >> Home dialysis >> Patients (search)
    //Staff Portal >> Home dialysis >> Patients (search)
    public function HDPatient_search(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), [
                "patient_name" => "nullable"
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }
            $details = Patient::where([['name', 'like', "%$req->patient_name%"], ['blocked', 0]])->join('home_dialysis', 'home_dialysis.patient_id', '=', 'Patient.patient_id',)->get();

            if ($details->isEmpty()) {
                return response()->json([
                    'message' => 'not found'
                ], 404);
            }

            return response()->json(['data' => $details], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
