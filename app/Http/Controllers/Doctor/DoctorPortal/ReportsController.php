<?php

namespace App\Http\Controllers\doctor\doctorportal;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\Patient_Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\ResponseAPI;
use Exception;

use function PHPUnit\Framework\isEmpty;

class ReportsController extends Controller
{
    use ResponseAPI;
    public function userReport($patient_id = null)
    {
        try {
            $doctor_id = Auth::user()->id;

            $patient = Patient::select('patient_id')->where([['patient_Id', $patient_id], ['blocked', 0], ['doctor', $doctor_id]])->get();

            if (!$patient->count()) {
                return $this->error('patient not found', 404);
            }

            $data = Patient_Report::where([['patient_id', $patient_id], ['file_link', '!=', 'No']])->get();

            if ($data->isEmpty()) {
                return $this->error('no record found', 404);
            }

            return response()->json([
                'message' => 'record fetched',
                'data' => $data,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }




    public function bloodReport($patient_id = null)
    {
        try {
            $doctor_id = Auth::user()->id;

            $patient = Patient::select('patient_id')->where([['patient_Id', $patient_id], ['blocked', 0], ['doctor', $doctor_id]])->get();

            if (!$patient->count()) {
                return $this->error('patient not found', 404);
            }

            $data = Patient_Report::where([['patient_id', $patient_id], ['file_link', 'No']])->get();

            if ($data->isEmpty()) {
                return $this->error('no record found', 404);
            }

            return response()->json([
                'message' => 'record fetched',
                'data' => $data,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
