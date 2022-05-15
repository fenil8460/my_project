<?php

namespace App\Http\Controllers\superadmin_portal;

use App\Http\Controllers\Controller;
use App\Models\Trp_Company_Detail;
use App\Models\Trp_Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class TrpCompanyDetailsController extends Controller
{
    //add company details
    function add_company_details(Request $req){

        $rules = [
            "company_name"=>"required",
            "company_logo"=>"required|mimes:jpg,png,jpeg|max:10000|image",
            "login"=>"required",
            "package"=>"required|numeric|min:1",
        ];

       $validator = Validator::make($req->all(),$rules);

       if($validator->fails()){
           return response()->json([
               'message'=>'validation error',
               'errors'=>$validator->errors(),
           ],403);
       }

       $check_plan = Trp_Plan::find($req->package);
       if($check_plan==null){
           return response()->json([
               'message'=>'invalid package',
           ],404);
       }

       $data = new Trp_Company_Detail();
       $data->company_name = $req->company_name;

       $id = Trp_Company_Detail::orderBy('id','desc')->first()->id + 1;
       $logo = $req->company_name . "_" . $id . '.' . $req->file('company_logo')->getClientOriginalExtension();
       $data->company_logo = $logo;
       $a =  $req->company_logo->move(public_path('company_logo'),$logo);

       $data->created_on = date("Y-m-d H:i:s");

       $data->package = $req->package;
       $data->login = $req->login;

       $saved = $data->save();
       if($saved){
           return response()->json([
               'message'=>'company details saved successfully',
           ],200);
       }

        return response()->json([
            'message'=>'unable to save ',
        ],500);

    }

    //edit company details
    function edit_company_details(Request $req , $company_id = null){

        $check_company = Trp_Company_Detail::find($company_id);

        if($check_company==null){
            return response()->json([
                'message'=>"invalid company id",
            ],404);
        }
        $rules = [
            "company_name"=>"required",
            "company_logo"=>"nullable|mimes:jpg,png,jpeg|max:10000|image",
            "login"=>"required",
            "package"=>"required|numeric|min:1",
            "is_active"=>"required|numeric|min:0|max:1",
        ];

       $validator = Validator::make($req->all(),$rules);

       if($validator->fails()){
           return response()->json([
               'message'=>'validation error',
               'errors'=>$validator->errors(),
           ],403);
       }

       $check_plan = Trp_Plan::find($req->package);
       if($check_plan==null){
           return response()->json([
               'message'=>'invalid package',
           ],404);
       }

       $data = $check_company;

       $str = $data->company_logo;
       $extension = substr($str, strpos($str, ".") + 1);
       $extension;

       if($req->company_name!=$data->company_name){
           if($req->hasFile('company_logo')){
                $image_path = "/company_logo/$data->company_logo";
                if(File::exists($image_path)) {
                    File::delete($image_path);
                }
                $logo = $req->company_name . "_" . $data->id . '.' . $req->file('company_logo')->getClientOriginalExtension();
                $a =  $req->company_logo->move(public_path('company_logo'),$logo);
                $data->company_logo = $logo;
            }else{
                // return 2;
                $logo = $req->company_name . "_" . $data->id . '.' . $extension;
                $old_path = public_path("/company_logo/$data->company_logo");
                $new_path = public_path("/company_logo/$logo");
                if(file::exists($old_path))
                    rename(public_path("/company_logo/$data->company_logo"), public_path("/company_logo/$logo"));
                $data->company_logo = $logo;

            }
       }elseif($req->company_name==$data->company_name && $req->hasFile('company_logo')){
        //    return 3;
            $image_path = "/company_logo/$data->company_logo";
            if(File::exists($image_path)) {
                File::delete($image_path);
            }
            $logo = $req->company_name . "_" . $data->id . '.' . $extension;
            $a =  $req->company_logo->move(public_path('company_logo'),$logo);
            $data->company_logo = $logo;
       }
       $data->company_name = $req->company_name;


       $data->package = $req->package;
       $data->login = $req->login;

       $saved = $data->update();
       if($saved){
           return response()->json([
               'message'=>'company details updated successfully',
           ],200);
       }

        return response()->json([
            'message'=>'unable to update ',
        ],500);

    }

    //delete company details
    public function delete_company_details($company_id = null){
        if($company_id != null){
            $check_company = Trp_Company_Detail::find($company_id);
            if($check_company==null){
                return response()->json([
                    'message'=>'invalid company id',
                ],404);
            }
            $data = $check_company;
            $data->is_deleted = 1;
            $data->update();
            return response()->json([
                'message'=>'company deleted',
            ],200);
        }

    }

    //enable or disable company details
    public function enable_disable_company_details($company_id = null){
        if($company_id != null){
            $check_company = Trp_Company_Detail::find($company_id);
            if($check_company==null){
                return response()->json([
                    'message'=>'invalid company id',
                ],404);
            }

            $data = $check_company;
            if($check_company->is_active){
                $data->is_active = 0;
                $msg = "successfully disabled";
            }else{
                $data->is_active = 1;
                $msg = "successfully enabled";
            }

            $data->update();
            return response()->json([
                'message'=>$msg,
            ],200);
        }

    }


    //fetch company details
    public function fetch_company_details($company_id = null){
        if($company_id != null){
            $check_company = Trp_Company_Detail::with('package')->where('is_deleted',0)->get();;
            if($check_company==null){
                return response()->json([
                    'message'=>'invalid company id',
                ],404);
            }
            return response()->json([
                'message'=>'data fetched',
                'data'=>$check_company
            ],200);
        }

        $data = Trp_Company_Detail::with('package')->where('is_deleted',0)->get();
        if($data->isEmpty()){
            return response()->json([
                'message'=>'not found',
            ],404);
        }
        return response()->json([
            'message'=>'data fetched',
            'dadta'=>$data,
        ],200);
    }
}
