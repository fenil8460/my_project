<?php

namespace App\Http\Controllers\microcentre;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Centre;
use App\Models\staff;
use App\Models\Patient;
use App\Models\Activity_log;
use App\Models\Centre_Detail;
use App\Traits\ResponseAPI;
use Exception;
use App\Models\StockMaintenance;
use Illuminate\Support\Facades\DB;
/**
 * @group Apis For Microcentre
 *
 */

class ManageMicroCentreController extends Controller
{

    use ResponseAPI;

    function show_single_Microcentre($id, Request $req)
    {
        try {
            $mc = Centre::find($id);
            if ($mc != null) {
                $center_details = Centre_Detail::where('centre_name',$mc->code)->first();
                $mc['additional_charges']=  isset($center_details) ? $center_details : 0;
                return $this->success($mc);
            } elseif ($mc == null) {
                return $this->error('request record not found with this id');
            }
            return $this->error('server error, unable to get requested centre record');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    public function editMicrocentre($id, Request $request)
    {
        try {

            if (Centre::find($id) == null) {
                return $this->error('not found');
            }

            //assiging input data to req variable
            $req = $request->data[0];
            // return $req;
            $validator = Validator::make($req, [
                'date' => 'required',
                'region' => 'required',
                'beds_count' => 'required|numeric',
                'registration_fee' => 'required|numeric',
                'normal_fee' => 'required|numeric',
                'emergency_fee' => 'required|numeric',
                'per_hour_fee' => 'required|numeric',
                'ap' => 'required',
                'amount' => 'required|numeric',
                'percentage' => 'required',
                'perdmy' => 'required',
                'scheme' => 'required',
                'm_scheduled' => 'nullable|numeric',
                'm_emergency' => 'nullable|numeric',
                'm_eh' => 'nullable|numeric',
            ]);



            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $add = Centre::find($id);

            //for centre code
            $centre_code = $add->code;


            $add->region = $req['region'];
            $add->beds_count = $req['beds_count'];

            $add->registration_fee = $req['registration_fee'];

            //for private patient
            $add->normal_fee = $req['normal_fee'];
            $add->emergency_fee = $req['emergency_fee'];
            $add->per_hour_fee = $req['per_hour_fee'];

            $add->ap = $req['ap'];
            if ($req['ap'] == 0) {
                $add->amount = $req['amount'];
                $add->percentage = 0;
            } else {
                $add->amount = 0;
                $add->percentage = $req['percentage'];
            }
            $add->perdmy = $req['perdmy'];

            $add->scheme = $req['scheme'];
            //patient under scheme
            if ($req['scheme'] == 'yes') {
                if ($req['m_scheduled'] == null)
                    return $this->error('m_scheduled cannot be empty');
                if ($req['m_eh'] == null)
                    return $this->error('m_eh cannot be empty');
                if ($req['m_emergency'] == null)
                    return $this->error('m_emergency cannot be empty');
                $add->m_scheduled = $req['m_scheduled'];
                $add->m_eh = $req['m_eh'];
                $add->m_emergency = $req['m_emergency'];
            } else {
                $add->m_scheduled = 0;
                $add->m_eh = 0;
                $add->m_emergency = 0;
            }


            // return 'save';
            $saved = $add->update();

            $updated_centre = Centre::find($add->id)->first();
            $centreName = $updated_centre->centre_name;


            //for additional expenses

            if (!empty($request->data[1])) {
                $validator = Validator::make($request->data[1], [
                    '*.centre_name' => 'required',
                    '*.name' => 'required',
                    '*.amount' => 'required',
                    '*.perdmy' => 'required',
                ]);

                if ($validator->fails()) {
                    return $this->error($validator->errors());
                }

                if ($request->data[1][0]['centre_name'] != $centre_code) {
                    return $this->error('centre code must be same as adding centre');
                }

                foreach ($request->data[1] as $data) {
                    $save_centre_details = Centre_Detail::create($data);
                }
            }





            if (!$saved) {
                return $this->error('Server error , unable to update data');
            }

            $who = Auth::user();
            $check_user = substr($who->profile_pic, 0, 3);

            $activity_log = new Activity_log();
            $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has updated microcentre - ' . $centreName;
            $activity_log->action = 'updated microcentre';
            $activity_log->save();
            return $this->success("Microcentre updated successfully");
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    function deleteMicrocentre($id = null, Request $req)
    {
        try {

            if (!Centre::where('id', $id)->get()->count()) {

                return $this->error('centre not found');
            }
            $centre = Centre::where("id", $id)->first();
            $centre_name = $centre->centre_name;
            $centre_code = $centre->code;
            $delete = $centre->delete();

            if ($delete) {
                $patient_deleted = 0;
                $staff_deleted = 0;

                $check_patient = Patient::where('branch_name', $centre_code)->get()->count();
                $check_staff = Staff::where('branch', $centre_code)->get()->count();
                if ($check_staff > 0) {
                    $staff = Staff::where('branch', $centre_code)->get();
                    $staff->remove = 1;
                    $staff_deleted = $staff->update();
                }
                if ($check_patient > 0) {
                    $patient = Patient::where('branch_name', $centre_code)->get();
                    $patient->blocked = 1;
                    $patient_deleted = $patient->update();
                }

                if (($patient_deleted) && $staff_deleted) {
                    $who = Auth::user();
                    $check_user = substr($who->profile_pic, 0, 3);

                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has deleted microcentre - ' . $centre_name;
                    $activity_log->action = 'Deleted microcentre';
                    $activity_log->save();
                    return $this->success('centre deleted successfully');
                }
                return $this->success('centre deleted successfully');
            }

            return $this->error('server error, unable to delete this microcentre');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }




    public function viewMicrocentre()
    {
        try {
            $centres = Centre::get();
            $data = [];
            if ($centres) {
                foreach($centres as $index=>$centre){
                    $center_details = Centre_Detail::where('centre_name',$centre->code)->first();
                    $data[$index] = [
                        "id" => $centre->id,
                        "date" => $centre->date,
                        "centre_name" => $centre->centre_name,
                        "code" => $centre->code,
                        "region" => $centre->region,
                        "beds_count" => $centre->beds_count,
                        "registration_fee" => $centre->registration_fee,
                        "normal_fee" => $centre->normal_fee,
                        "emergency_fee" => $centre->emergency_fee,
                        "per_hour_fee" => $centre->per_hour_fee,
                        "ap" => $centre->ap,
                        "amount" => $centre->amount,
                        "percentage" => $centre->percentage,
                        "perdmy" => $centre->perdmy,
                        "scheme" => $centre->scheme,
                        "m_scheduled" => $centre->m_scheduled,
                        "m_emergency" => $centre->m_emergency,
                        "m_eh" => $centre->m_eh,
                        "additional_charges"=> isset($center_details) ? $center_details : []
                    ];
                }

                return $this->success($data);
            }
            return $this->error('server error, unlable to fetch microcentre');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }




    public function get_all_branch_name_and_code()
    {
        try {
            $all_branch = Centre::select('centre_name', 'code')->get();

            if ($all_branch != null) {
                return $this->success($all_branch);
            }
            return $this->error("no record found");
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function fetch_last_microcentre()
    {
        try {
            $mc = Centre::orderBy('id', 'desc')->first();
            if ($mc != null) {
                return $this->success($mc);
            }
            return $this->error('serve error , unable to fetch last centre record');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function addMicrocentre(Request $req)
    {
        try {
            $validator = Validator::make($req->data[0], [
                'date' => 'required',
                'centre_name' => 'required',
                'code' => 'required|max:4',
                'region' => 'required',
                'beds_count' => 'required',
                'registration_fee' => 'required',
                'normal_fee' => 'required',
                'emergency_fee' => 'required',
                'per_hour_fee' => 'required',
                'ap' => 'required',
                'amount' => 'required',
                'percentage' => 'required',
                'perdmy' => 'required',
                'scheme' => 'required',
                'm_scheduled' => 'nullable',
                'm_emergency' => 'nullable',
                'm_eh' => 'nullable',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            if ($req->data[1][0]['centre_name'] != $req->data[0]['code']) {
                return $this->error('centre code must be same as adding centre');
            }

            //validation for unique code and centre name
            $check_code = Centre::where('code', $req->data[0]['code'])->get()->count();
            $check_branch_name = Centre::where('centre_name', $req->data[0]['centre_name'])->get()->count();

            if ($check_branch_name && $check_code) {
                return $this->error('Centre with this name and code  already exist');
            }
            if ($check_branch_name) {
                return $this->error('Centre with this name already exist');
            }
            if ($check_code) {
                return $this->error('Centre with this code already exist');
            }
            $add = new Centre();
            $add->date = $req->data[0]['date'];

            $add->centre_name = $req->data[0]['centre_name'];

            $add->code = $req->data[0]['code'];

            $add->region = $req->data[0]['region'];
            $add->beds_count = $req->data[0]['beds_count'];

            $add->registration_fee = $req->data[0]['registration_fee'];

            //for private patient
            $add->normal_fee = $req->data[0]['normal_fee'];
            $add->emergency_fee = $req->data[0]['emergency_fee'];
            $add->per_hour_fee = $req->data[0]['per_hour_fee'];

            $add->ap = $req->data[0]['ap'];
            if ($req->ap == 0) {
                $add->amount = $req->data[0]['amount'];
                $add->percentage = 0;
            } else {
                $add->amount = 0;
                $add->percentage = $req->data[0]['percentage'];
            }
            $add->perdmy = $req->data[0]['perdmy'];

            $add->scheme = $req->data[0]['scheme'];
            //patient under scheme
            if ($req->data[0]['scheme'] == 'yes') {
                if ($req->data[0]['m_scheduled'] == null)
                    return $this->error('m_scheduled cannot be empty');
                if ($req->data[0]['m_eh'] == null)
                    return $this->error('m_eh cannot be empty');
                if ($req->data[0]['m_emergency'] == null)
                    return $this->error('m_emergency cannot be empty');
                $add->m_scheduled = $req->data[0]['m_scheduled'];
                $add->m_eh = $req->data[0]['m_eh'];
                $add->m_emergency = $req->data[0]['m_emergency'];
            } else {
                $add->m_scheduled = 0;
                $add->m_eh = 0;
                $add->m_emergency = 0;
            }


            // return 'save';
            $saved = $add->save();


            //for additional expenses for microcentre
            if (!empty($req->data[1])) {
                $validator = Validator::make($req->data[1], [
                    '*.centre_name' => 'required',
                    '*.name' => 'required',
                    '*.amount' => 'required',
                    '*.perdmy' => 'required|in:dialysis,month,year',
                ]);

                if ($validator->fails()) {
                    return $this->error($validator->errors());
                }

                foreach ($req->data[1] as $data) {
                    $save_centre_details = Centre_Detail::create($data);
                }
            }

            if (!empty($req->data[2])) {

                $stocks = $req->data[2];
                foreach ($stocks as $s) {
                    if ($s != null) {
                        foreach ($s as $cat => $item) {
                            $cat;
                            foreach ($item as $product_name => $i) {
                                if ($i['billable'] == 0) {
                                    $billable = 0;
                                } else {
                                    $billable = 1;
                                }
                                $default_stock = new StockMaintenance();
                                $default_stock->branch_name = $req->data[0]['code'];;
                                $default_stock->product_name = $product_name;
                                $default_stock->date = date('Y-m-d');
                                $default_stock->category = $cat;
                                $default_stock->brand = " ";
                                $default_stock->billable = $billable;
                                $default_stock->cost = 0;
                                $default_stock->gst = 0;
                                $default_stock->calculated_cost_price = 0;
                                $default_stock->arrived = 0;
                                $default_stock->available_count = 0;
                                $default_stock->total = 0;
                                $default_stock->private_selling_price = 0;
                                $default_stock->mjpjay_selling_price = 0;
                                $default_stock->save();
                            }
                        }
                    } else {
                        continue;
                    }
                }
            }


            if ($saved) {
                $who = Auth::user();
                $check_user = substr($who->profile_pic, 0, 3);

                $activity_log = new Activity_log();
                $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has added  new microcentre - ' . $req->centre_name . ' and serial no. ' . $req->code;
                $activity_log->action = 'Added microcentre';
                $activity_log->save();

                return $this->success("Microcentre inserted successfully");
            }
            return $this->error("Server error , unable to save data");
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
