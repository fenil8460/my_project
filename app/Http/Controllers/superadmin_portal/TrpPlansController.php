<?php

namespace App\Http\Controllers\superadmin_portal;

use App\Http\Controllers\Controller;
use App\Models\Trp_plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TrpPlanController extends Controller
{
    //add plan
    function add_plan(Request $req){
        $rules = [
            "plan_name"=>"required",
            "stripe_id_monthly"=>"required",
            "stripe_id_annually"=>"required",
            "price_monthly"=>"required",
            "price_annually"=>"required",
            "start_user"=>"required",
            "end_user"=>"required",
        ];

       $validator = Validator::make($req->all(),$rules);

       if($validator->fails()){
           return response()->json([
               'message'=>'validation error',
               'errors'=>$validator->errors(),
           ],403);
       }

       $data = new Trp_plan();
       $data->plan_name = $req->plan_name;
       $data->stripe_id_monthly = $req->stripe_id_monthly;
       $data->stripe_id_annually = $req->stripe_id_annually;
       $data->price_monthly = $req->price_monthly;
       $data->price_annually = $req->price_annually;
       $data->start_user = $req->start_user;
       $data->end_user = $req->end_user;
       $saved = $data->save();
       if($saved){
           return response()->json([
               'message'=>'plan saved successfully',
           ],200);
       }

        return response()->json([
            'message'=>'unable to save ',
        ],500);

    }

    //edit plan
    function edit_plan(Request $req , $plan_id=null){

        $check_plan = Trp_plan::find($plan_id);

        if($check_plan==null){
            return response()->json([
                'message'=>"invalid plan id",
            ],404);
        }

        $rules = [
            "plan_name"=>"required",
            "stripe_id_monthly"=>"required",
            "stripe_id_annually"=>"required",
            "price_monthly"=>"required",
            "price_annually"=>"required",
            "start_user"=>"required",
            "end_user"=>"required",
            "is_enabled"=>"required|numeric|max:1|min:0",
        ];

       $validator = Validator::make($req->all(),$rules);

       if($validator->fails()){
           return response()->json([
               'message'=>'validation error',
               'errors'=>$validator->errors(),
           ],403);
       }

       $data = $check_plan;
       $data->plan_name = $req->plan_name;
       $data->stripe_id_monthly = $req->stripe_id_monthly;
       $data->stripe_id_annually = $req->stripe_id_annually;
       $data->price_monthly = $req->price_monthly;
       $data->price_annually = $req->price_annually;
       $data->start_user = $req->start_user;
       $data->end_user = $req->end_user;
       $data->is_enabled = $req->is_enabled;
       $saved = $data->update();
       if($saved){
           return response()->json([
               'message'=>'plan updated successfully',
           ],200);
       }

        return response()->json([
            'message'=>'unable to update ',
        ],500);

    }


    //enable or disable plan
    function enable_disable_plan($plan_id=null){

        $check_plan = Trp_plan::find($plan_id);

        if($check_plan==null){
            return response()->json([
                'message'=>"invalid plan id",
            ],404);
        }

       $data = $check_plan;

       if($data->is_enabled==0){
           $data->is_enabled = 1;
           $saved = $data->update();
           if($saved){
               return response()->json([
                   'message'=>'plan enabled successfully',
               ],200);
           }
       }else{
            $data->is_enabled = 0;
            $saved = $data->update();
            if($saved){
                return response()->json([
                    'message'=>'plan disabled successfully',
                ],200);
            }
       }

        return response()->json([
            'message'=>'unable to perform action ',
        ],500);

    }


    //fetch plan
    function fetch_plan($plan_id=null){

        if(is_numeric($plan_id)){
            $data = Trp_plan::find($plan_id);
            if($data==null){
                return response()->json([
                    'message'=>'invlaid plan id',
                ],404);
            }
        }

        $data = Trp_plan::find($plan_id);
        if($data!=null){
            return response()->json([
                'message'=>'plan fetched',
                'data'=>$data
            ],200);
        }else{
            $data = Trp_plan::all();
            return response()->json([
                'message'=>'plan fetched',
                'data'=>$data
            ],200);
        }

        return response()->json([
            'message'=>'unable to perform action ',
        ],500);

    }
}
