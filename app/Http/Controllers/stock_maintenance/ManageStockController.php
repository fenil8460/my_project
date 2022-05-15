<?php

namespace App\Http\Controllers\stock_maintenance;

use App\Http\Controllers\Controller;
use App\Models\Centre;
use App\Models\Activity_log;
use App\Models\StockMaintenance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Traits\ResponseAPI;
use Exception;
use function PHPUnit\Framework\isEmpty;

class ManageStockController extends Controller
{
    use ResponseAPI;
    //for deleting stock
    public function delete_stock(Request $req, $branch_name = null)
    {
        try {
            $check_branch = Centre::where('code', $branch_name)->count();

            if ($branch_name == null || !$check_branch) {
                return response()->json([
                    'message' => 'invalid branch name',
                ], 404);
            }

            $product = $req->product_name;
            $brand = $req->brand;

            $check = StockMaintenance::where([['brand', $req->brand], ['product_name', $req->product_name], ['branch_name', $branch_name]])->count();
            if ($check) {
                $del = StockMaintenance::where([['brand', $req->brand], ['product_name', $req->product_name], ['branch_name', $branch_name]])->delete();
                if ($del) {
                    $who = Auth::user();
                    $check_user = substr($who->profile_pic, 0, 3);

                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has deleted  stock - ' . $product . ' of brand- ' . $brand;
                    $activity_log->action = 'Deleted stock';
                    $activity_log->save();
                    return response()->json([
                        'message' => 'stock deleted',
                    ], 200);
                }
                return response()->json([
                    'message' => 'unable to delete stock',
                ], 400);
            }
            return response()->json([
                'message' => 'stock not found',
            ], 404);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //remove stock
    public function remove_stock(Request $req, $branch_name = null)
    {
        try {

            $validator = Validator::make($req->all(), [
                'count' => 'required',
                'brand' => 'required',
                'product_name' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }


            $check_branch = Centre::where('code', $branch_name)->count();

            if ($branch_name == null || !$check_branch) {
                return response()->json([
                    'message' => 'invalid branch name',
                ], 404);
            }


            $check_product = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $req->product_name], ['brand', $req->brand]])->count();
            $to_remove = $req->count;

            if ($check_product) {
                $stocks = StockMaintenance::select(DB::raw("SUM(available_count) as brand_available_count"))->where([['branch_name', $branch_name], ['product_name', $req->product_name], ['brand', $req->brand]])->first();
                if ($stocks->brand_available_count == 0) {
                    return response()->json([
                        'message' => 'product has zero count',
                    ], 400);
                }
                if ($stocks->brand_available_count >= $req->count) {
                    $remove_stock = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $req->product_name], ['brand', $req->brand]])->get();
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

                    $who = Auth::user();
                    $check_user = substr($who->profile_pic, 0, 3);

                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has removed - ' . $req->count . ' stocks from ' . $branch_name . ' -(' . $req->product_name . '-' . $req->brand . ')';
                    $activity_log->action = 'Removed stock';
                    $activity_log->save();
                    return response()->json([
                        'message' => 'removed ' . $req->count . ' stocks'
                    ], 200);
                } else {
                    return response()->json([
                        'message' => 'count should be less then ' . $stocks->brand_available_count,
                    ], 404);
                }
            } else {
                return response()->json([
                    'message' => 'product not found',
                ], 404);
            }


            return $req->all();
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    //shift stock
    public function shift_stock(Request $req)
    {
        try {

            $validator = Validator::make($req->all(), [
                'from' => 'required',
                'to' => 'required',
                'product' => 'required',
                'brand' => 'required',
                'count' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $check_from = Centre::where('code', $req->from)->count();
            $check_to = Centre::where('code', $req->to)->count();
            if (!$check_from) {
                return response()->json([
                    'message' => 'invalid from branch',
                ], 404);
            }
            if (!$check_to) {
                return response()->json([
                    'message' => 'invalid to branch',
                ], 404);
            }
            $check_product = StockMaintenance::select(DB::raw("SUM(available_count) as brand_available_count"))->where([['branch_name', $req->from], ['product_name', $req->product], ['brand', $req->brand]])->first();

            if ($req->count > $check_product->brand_available_count) {
                return response()->json([
                    'message' => 'count must be less then ' . $check_product->brand_available_count,
                ], 403);
            }

            $branch1 = $req->from;
            $branch2 = $req->to;
            $to_remove = $req->count;

            if ($check_product->brand_available_count > 0) {
                $remove_stock = StockMaintenance::where([['branch_name', $branch1], ['product_name', $req->product], ['brand', $req->brand]])->get();
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

                //after removing stocks from from branch , adding stocks in 'to' branch
                $stock_data = StockMaintenance::where([['branch_name', $branch1], ['product_name', $req->product], ['brand', $req->brand]])->first();

                $save_in_branch2 = new StockMaintenance();
                $save_in_branch2->product_name = $stock_data->product_name;
                $save_in_branch2->branch_name = $branch2;
                $save_in_branch2->category = $stock_data->category;
                $save_in_branch2->brand = $stock_data->brand;
                $save_in_branch2->billable = $stock_data->billable;
                $save_in_branch2->cost = $stock_data->cost;
                $save_in_branch2->gst = $stock_data->gst;
                $save_in_branch2->calculated_cost_price = $stock_data->calculated_cost_price;
                $save_in_branch2->arrived = $req->count;
                $save_in_branch2->available_count = $req->count;
                $save_in_branch2->total = $stock_data->calculated_cost_price * $req->count;
                $save_in_branch2->private_selling_price = $stock_data->private_selling_price;
                $save_in_branch2->mjpjay_selling_price = $stock_data->mjpjay_selling_price;

                $saved = $save_in_branch2->save();

                if ($saved) {
                    $who = Auth::user();
                    $check_user = substr($who->profile_pic, 0, 3);

                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has shifted - ' . $req->count . ' stocks from ' . $branch1 . ' to ' . $branch2 . ' -(' . $req->product . '-' . $req->brand . ')';
                    $activity_log->action = 'Shifted stocks';
                    $activity_log->save();
                    return response()->json([
                        'message' => 'shifted ' . $req->count . ' stocks'
                    ], 200);
                }

                return response()->json([
                    'message' => 'unable to update stock',
                ], 500);
            } elseif ($check_product == 0) {
                return response()->json([
                    'message' => 'product count is 0',
                ], 404);
            } else {
                return response()->json([
                    'message' => 'product not found',
                ], 404);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
    
    public function default_stocks()
    {
        try {
            $stocks['consumables'] = [
                '16g Needle' => ['billable' => 0],           // Consumables
                '17g Needle' => ['billable' => 0],
                'Bed Sheet' => ['billable' => 0],
                'Gloves' => ['billable' => 0],
                'Blood Tubing' => ['billable' => 1],         // billable
                'Chemical M/C' => ['billable' => 0],
                'Chemical D&T' => ['billable' => 0],
                'Dialyzer' => ['billable' => 1],             // billable
                'Heparin' => ['billable' => 0],
                'IV Set' => ['billable' => 0],
                'NS1000 ML' => ['billable' => 0],
                'NS500 ML' => ['billable' => 0],
                'Syringe 10 ML' => ['billable' => 0],
                'Syringe 5 ML' => ['billable' => 0],
                'A/B part' => ['billable' => 0],
                'Transducer protector' => ['billable' => 0],
            ];

            $stocks['pharmaceuticals'] = [
                'Inj Dextrose 25% 100ml' => ['billable' => 1],   // |
                'Inj Multi Vit' => ['billable' => 1],            // |
                'EPO 4K' => ['billable' => 1],                   // |
                'EPO 10K' => ['billable' => 1],                  // |  Pharmaceuticals (billable)
                'Inj Iron' => ['billable' => 1],                 // |
                'Inj Antibiotics' => ['billable' => 1],          // |
                'Inj Amino Acid' => ['billable' => 1],
            ];

            $success['message'] = 'default stocks';
            $success['stocks'] = $stocks;
            return $this->success($success);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
