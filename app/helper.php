<?php

namespace App\Http\Middleware;

// use Closure;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

function validate_routes($req,$route_name)
{
    $company_name = 'srpp';
    $check_company_name = DB::connection('mysql_super_admin')->table('trp_company_details as tcd')
                    ->where('company_name',$company_name)
                    // ->join('trp_plans as tp','tp.id','tcd.package')
                    ->select('tcd.company_name','tcd.package')
                    ->get();

    if(!$check_company_name->count())
        return "invalid_company_details";

    $plan_id = [];
    foreach($check_company_name as $pid)
        $plan_id[] = $pid->package;

    $redirect_to = DB::connection('mysql_super_admin')->table('trp_sections')
                    ->where('section',$route_name)
                    ->whereIn('plan_id',$plan_id)
                    ->get();

    if(!$redirect_to->count())
        return 'invalid_plan';

    return 'validated';

}

function route_validation_switch_case($result){
    switch($result){
        case "invalid_company_details":
            return response()->json([
                'mwssage'=>'invalid_company_details'
            ],401);
        break;

        case "invalid_plan":
            return response()->json([
                'mwssage'=>'invalid_plan'
            ],404);
        break;

        default :
            return response()->json([
                'message'=>'invalid attempt',
            ],404);
    }
}


