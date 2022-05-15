<?php

namespace App\Http\Controllers\patient;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Patient_parameter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class PatientParameterController extends Controller
{
    use ResponseAPI;
    function show_patient_parameter(Request $req, $app_id = null)
    {
        try {
            $patient_parameter = Patient_parameter::where('appointment_id', $app_id)->get();

            if (!$patient_parameter->count()) {
                return response()->json([
                    'message' => 'invalid appointment id',
                ], 404);
            }

            return response()->json([
                'message' => 'patient parameter fetched',
                'data' => $patient_parameter,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }




    function enter_patient_parameter(Request $req, $app_id = null)
    {
        try {

            $patient_parameter = Patient_parameter::where('appointment_id', $app_id)->get();

            if (!$patient_parameter->count()) {
                return response()->json([
                    'message' => 'invalid appointment id',
                ], 404);
            }

            if (Patient_parameter::where([['appointment_id', $app_id], ['time', '!=', '00:00:00'], ['id', 7]])->count()) {
                return response()->json([
                    'message' => 'invalid attempt',
                ], 400);
            }

            $patient_parameter_id = Patient_parameter::where([['appointment_id', $app_id], ['time', '00:00:00']])->first()->id;
            $data = $req->data[$patient_parameter_id - 1];
            $validator = Validator::make($req->data[$patient_parameter_id - 1], [
                "bps" => 'required',
                "bpd" => 'required',
                "pulse" => 'required',
                "uf_rate" => 'required',
                "uf_volume" => 'required',
                "bf_rate" => 'required',
                "ap" => 'required',
                "vp" => 'required',
                "tmp" => 'required',
                "kv/t" => 'required',
                "actions" => 'required'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $updated = $patient_parameter = DB::table('patient_parameter')
                ->where([['appointment_id', $app_id], ['time', '00:00:00'], ['id', $patient_parameter_id]])
                ->update(["time" => date('H:i:s'), "bps" => $data['bps'], "bpd" => $data['bpd'], "pulse" => $data['pulse'], "uf_rate" => $data['uf_rate'], "uf_volume" => $data['uf_volume'], "bf_rate" => $data['bf_rate'], "ap" => $data['ap'], "vp" => $data['vp'], "tmp" => $data['tmp'], "kv/t" => $data['kv/t'], "actions" => $data['actions']]);


            if ($updated) {
                return response()->json([
                    'message' => 'patient parameter saved',
                ], 200);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
