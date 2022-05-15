<?php

namespace App\Http\Controllers\stock_maintenance;

use App\Http\Controllers\Controller;
use App\Models\StockMaintenance;
use App\Models\Activity_log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Traits\ResponseAPI;
use Exception;

class AddNewProductController extends Controller
{
    use ResponseAPI;
    public function addProduct(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), [
                'branch_name' => 'required',
                'product_name' => 'required',
                // 'date'=>'required',
                'category' => 'required',
                'brand' => 'required',
                'billable' => 'required',
                'cost' => 'required',
                'gst' => 'required',
                // 'calculated_cost_price'=>'required',
                'arrived' => 'required',
                // 'available_count'=>'required',
                'private_selling_price' => 'required',
                'mjpjay_selling_price' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $add = new StockMaintenance();
            $add->branch_name = $req->branch_name;
            $add->product_name = $req->product_name;
            $add->category = $req->category;
            $add->brand = $req->brand;
            $add->billable = $req->billable;
            $add->cost = $req->cost;
            $add->gst = $req->gst;
            $add->arrived = $req->arrived;
            $add->private_selling_price = $req->private_selling_price;
            $add->mjpjay_selling_price = $req->mjpjay_selling_price;
            // $add->date = $req->date;
            $calculated_cost_price = (($req->cost * $req->gst) / 100) + $req->cost;
            $add->calculated_cost_price = $calculated_cost_price;
            $add->available_count = $req->arrived;
            $add->total = $req->arrived * $calculated_cost_price;

            $saved = $add->save();

            if ($saved) {
                $who = Auth::user();
                $check_user = substr($who->profile_pic, 0, 3);
                $activity_log = new Activity_log();
                $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has added new product - ' . $req->product_name . ' in branch - ' . $req->branch_name;
                $activity_log->action = 'Banned Staff';
                $activity_log->save();
                return response()->json([
                    'message' => 'successfully saved ',
                ], 200);
            } else {
                return response()->json([
                    'error' => 'server error , unable to save  ',
                ], 500);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
