<?php

namespace App\Http\Controllers\stock_maintenance;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\StockMaintenance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Centre;
use App\Models\Activity_log;
use Illuminate\Support\Facades\Auth;
use App\Traits\ResponseAPI;
use Exception;

class  AddStockController extends Controller
{

    use ResponseAPI;
    //add stocks
    public function add_stocks(Request $req, $branch_name = null)
    {
        try {
            $check_branch = Centre::where('code', $branch_name)->count();

            if ($branch_name == null || !$check_branch) {
                return response()->json([
                    'message' => 'invalid branch name',
                ], 404);
            }


            $data = $req->all();


            $validator = Validator::make($data, [
                'data.*.branch_name' => 'required',
                'data.*.product_name' => 'required',
                'data.*.date' => 'required',
                'data.*.category' => 'required',
                'data.*.brand' => 'required',
                // 'data.*.billable'=>'required',
                'data.*.cost' => 'required',
                'data.*.gst' => 'required',
                'data.*.calculated_cost_price' => 'required',
                'data.*.arrived' => 'required',
                'data.*.available_count' => 'required',
                'data.*.private_selling_price' => 'required',
                'data.*.mjpjay_selling_price' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }
            $success = [];
            $error = [];


            //updating default stocks
            foreach ($data['data'] as $stock) {
                $check_product = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $stock['product_name']]])->count();
                if ($check_product) {
                    $billable = StockMaintenance::select('billable')->where([['branch_name', $branch_name], ['product_name', $stock['product_name']]])->first()->billable;
                }



                $check_brand = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $stock['product_name']], ['brand', " "]])->count();
                if ($check_product && $stock['head_count'] != null && $stock['arrived'] > 0 && $stock['arrived'] == $stock['available_count'] && !$check_brand) {

                    //closing costt means last add cost
                    $closing_cost = StockMaintenance::orderBy('date', 'desc')->where([['branch_name', $branch_name], ['product_name', $stock['product_name']]])->first();
                    $closing_count = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $stock['product_name']]])->sum('available_count');

                    $add = new StockMaintenance();
                    $add->branch_name = $stock['branch_name'];
                    $add->date = $stock['date'];
                    $add->product_name = $stock['product_name'];
                    $add->category = $stock['category'];
                    $add->brand = $stock['brand'];
                    $add->billable = $billable;
                    $add->cost = $stock['cost'];
                    $add->gst = $stock['gst'];
                    $add->private_selling_price = $stock['private_selling_price'];
                    $add->mjpjay_selling_price = $stock['mjpjay_selling_price'];

                    $add->arrived = $stock['arrived'];
                    $add->available_count = $stock['available_count'];
                    $success[] = $stock['product_name'];

                    $add->save();


                    //adding stock in account table
                    $add_data_for_acc_table = [
                        'date' => date('Y-m-d H:i:s'),
                        'stock_name' => $add->product_name,
                        'brand' => $add->brand,
                        'branch' => $add->branch_name,
                        'new_cost' => $add->cost,
                        'closing_cost' => $closing_cost->cost, //70
                        'new_count' => $add->arrived,
                        'closing_count' => $closing_count //71
                    ];
                    $adding_removed_data_in_acc_table = Account::create($add_data_for_acc_table);
                } elseif ($check_product && $stock['arrived'] > 0 && $stock['arrived'] == $stock['available_count'] && $check_brand) {

                    $update_stock = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $stock['product_name']], ['brand', " "]])->first();

                    $update_stock->branch_name = $stock['branch_name'];
                    $update_stock->product_name = $stock['product_name'];
                    $update_stock->date = $stock['date'];
                    $update_stock->category = $stock['category'];
                    $update_stock->brand = $stock['brand'];
                    $update_stock->billable = $billable;
                    $update_stock->cost = $stock['cost'];
                    $update_stock->gst = $stock['gst'];
                    $update_stock->private_selling_price = $stock['private_selling_price'];
                    $update_stock->mjpjay_selling_price = $stock['mjpjay_selling_price'];

                    $update_stock->arrived = $stock['arrived'];
                    $update_stock->available_count = $stock['available_count'];
                    $success[] = $stock['product_name'];

                    $update_stock->update();
                } elseif ($check_product && $stock['arrived'] > 0 && $stock['arrived'] == $stock['available_count'] && !$check_brand) {

                    //closing costt means last add cost
                    $closing_cost = StockMaintenance::orderBy('date', 'desc')->where([['branch_name', $branch_name], ['product_name', $stock['product_name']]])->first();
                    $closing_count = StockMaintenance::where([['branch_name', $branch_name], ['product_name', $stock['product_name']]])->sum('available_count');

                    $add = new StockMaintenance();
                    $add->branch_name = $stock['branch_name'];
                    $add->product_name = $stock['product_name'];
                    $add->date = $stock['date'];
                    $add->category = $stock['category'];
                    $add->brand = $stock['brand'];
                    $add->billable = $billable;
                    $add->cost = $stock['cost'];
                    $add->gst = $stock['gst'];
                    $add->private_selling_price = $stock['private_selling_price'];
                    $add->mjpjay_selling_price = $stock['mjpjay_selling_price'];

                    $add->arrived = $stock['arrived'];
                    $add->available_count = $stock['available_count'];
                    $success[] = $stock['product_name'];

                    $add->save();

                    //adding stock in account table
                    $add_data_for_acc_table = [
                        'date' => date('Y-m-d H:i:s'),
                        'stock_name' => $add->product_name,
                        'brand' => $add->brand,
                        'branch' => $add->branch_name,
                        'new_cost' => $add->cost,
                        'closing_cost' => $closing_cost->cost,
                        'new_count' => $add->arrived,
                        'closing_count' => $closing_count
                    ];
                    $adding_removed_data_in_acc_table = Account::create($add_data_for_acc_table);
                } else {
                    $error[] = $stock['product_name'];
                }
            }
            $s = '';
            $e = '';
            foreach ($success as $str) {
                $s .= $str . ',';
            }
            $s = rtrim($s, ",");
            foreach ($error as $str) {
                $e .= $str . ',';
            }
            $e = rtrim($e, ",");

            $who = Auth::user();
            $check_user = substr($who->profile_pic, 0, 3);

            $activity_log = new Activity_log();
            $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has added  stock - ' . $s;
            $activity_log->action = 'Added stock';
            $activity_log->save();
            return response()->json([
                'message' => [
                    'added' => $success,
                    'mot_added' => $error
                ],
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    public function showStocks($branch_name = null)
    {
        try {

            $check_centre = Centre::where('code', $branch_name)->get()->count();

            if ($check_centre == 0) {
                return response()->json([
                    'message' => 'invalid branch name',
                ], 400);
            }




            $sc = StockMaintenance::select('product_name', 'brand')->where([['branch_name', $branch_name], ['category', 'consumable']])->distinct()->groupBy('product_name')->get();
            foreach ($sc as $s_c) {
                $brand = StockMaintenance::select('brand as brand_name', 'cost', 'private_selling_price', 'mjpjay_selling_price', 'gst', 'category', DB::raw('sum(available_count) as total'))->distinct()->groupBy('brand')->where([['product_name', $s_c->product_name], ['branch_name', $branch_name]])->get();
                $stock_consumable[] = [
                    "product" => $s_c->product_name,
                    'brand' => $brand,
                ];
            }


            $sp = StockMaintenance::select('product_name', 'brand')->where([['branch_name', $branch_name], ['category', 'pharmaceutical']])->distinct()->groupBy('product_name')->get();
            foreach ($sp as $s_p) {
                $brand = StockMaintenance::select('brand as brand_name', 'cost', 'private_selling_price', 'mjpjay_selling_price', 'gst', 'category', DB::raw('sum(available_count) as total'))->distinct()->groupBy('brand')->where([['product_name', $s_p->product_name], ['branch_name', $branch_name]])->get();
                $stock_pharmaceutical[] = [
                    "product" => $s_p->product_name,
                    'brand' => $brand,
                ];
            }


            if ($stock_pharmaceutical == null || $stock_consumable == null) {
                return response()->json([
                    'message' => 'stocks not found',
                ], 400);
            }

            return response()->json([
                'message' => 'available stock ',
                'consumable_stock_data' => $stock_consumable,
                'pharmaceutical_stock_data' => $stock_pharmaceutical,
            ], 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
