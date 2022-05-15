<?php

namespace App\Http\Controllers\superadmin_portal;

use App\Http\Controllers\Controller;
use App\Models\Trp_Section;
use App\Models\Trp_Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TrpSectionController extends Controller
{
    //add section
    function add_section(Request $req){
        $rules = [
            "section"=>"required",
            "plan_id"=>"required",
        ];

        $validator = Validator::make($req->all(),$rules);

        if($validator->fails()){
            return response()->json([
                'message'=>'validation error',
                'errors'=>$validator->errors(),
            ],403);
        }

        $check_plan = Trp_Plan::find($req->plan_id);
        if($check_plan==null){
            return response()->json([
                'message'=>'invalid plan id',
            ],404);
        }

        $data = new Trp_Section();
        $data->section = $req->section;
        $data->plan_id = $req->plan_id;
        $saved = $data->save();
        if($saved){
            return response()->json([
                'message'=>'section saved successfully',
            ],200);
        }

        return response()->json([
            'message'=>'unable to save ',
        ],500);

    }

    //edit plan
    function edit_section(Request $req , $section_id=null){

        $check_section = Trp_Section::find($section_id);

        if($check_section==null){
            return response()->json([
                'message'=>"invalid section id",
            ],404);
        }

        $rules = [
            "section"=>"required",
            "plan_id"=>"required",
        ];

        $validator = Validator::make($req->all(),$rules);

        if($validator->fails()){
            return response()->json([
                'message'=>'validation error',
                'errors'=>$validator->errors(),
            ],403);
        }

        $check_plan = Trp_Plan::find($req->plan_id);
        if($check_plan==null){
            return response()->json([
                'message'=>'invalid plan id',
            ],404);
        }

        $data = $check_section;
        $data->section = $req->section;
        $data->plan_id = $req->plan_id;
        $saved = $data->update();
        if($saved){
            return response()->json([
                'message'=>'section updated successfully',
            ],200);
        }

        return response()->json([
            'message'=>'unable to update ',
        ],500);

    }
    //fetch plan
    function fetch_section($section_id=null){

        if(is_numeric($section_id)){
            $data = Trp_Section::find($section_id);
            if($data==null){
                return response()->json([
                    'message'=>'invlaid section id',
                ],404);
            }
        }

        $data = Trp_Section::find($section_id);
        if($data!=null){
            return response()->json([
                'message'=>'section fetched',
                'data'=>$data
            ],200);
        }else{
            $data = Trp_Section::all();
            return response()->json([
                'message'=>'section fetched',
                'data'=>$data
            ],200);
        }

    }
}
