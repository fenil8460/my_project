<?php

namespace App\Http\Controllers\doctor\DoctorPortal;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\Prescription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\Traits\ResponseAPI;
use Exception;

use function PHPUnit\Framework\isEmpty;

class PrescriptionController extends Controller
{

    use ResponseAPI;

    public function add_prescription(Request $req, $patient_id = null)
    {
        try {

            $validator = Validator::make($req->all(), [
                'prescription' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $current_date_time = Carbon::now()->toDateTimeString();
            $doctor_id = Auth::user()->id;

            $patient = Patient::select('patient_id')->where([['patient_Id', $patient_id], ['blocked', 0], ['doctor', $doctor_id]])->get();
            // $patient = Patient::select('patient_id')->where([['patient_Id',$patient_id],['blocked',0]])->get();

            if (!$patient->count()) {
                return $this->error('patient not found');
            }

            $prescription = new Prescription();
            $prescription->patient_id = $patient_id;
            $prescription->prescription = $req->prescription;
            $prescription->date = $current_date_time;
            $prescription->viewed = 0;
            $saved = $prescription->save();

            if ($saved) {
                return response()->json([
                    'message' => 'prescription saved',
                ], 200);
            }

            return $this->error('failed to save prescription');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function show_prescription($patient_id = null)
    {
        try {
            $doctor_id = Auth::user()->id;

            $patient = Patient::select('patient_id')->where([['patient_Id', $patient_id], ['blocked', 0], ['doctor', $doctor_id]])->get();
            // $patient = Patient::select('patient_id')->where([['patient_Id',$patient_id],['blocked',0]])->get();

            if (!$patient->count()) {
                return $this->error('patient not found');
            }

            $data = Prescription::select('prescription', 'date')->where('patient_id', $patient_id)->get();

            if (is_null($data)) {
                return $this->error('no prescription found');
            }

            return response()->json([
                'message' => 'prescription fetched',
                'data' => $data,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
