<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
class PlanValidatorMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    // {

    //     $company = DB::table('company_details')
    //                 // ->where('company_name',parse_url($request->url())['port'])
    //                 ->where('company_name',request()->getHost())
    //                 ->get();

    //     if(!$company->count()){
    //         return response()->json([
    //             'message'=> 'unauthorized'
    //         ],404);
    //     }

    //     // return $company;

    //     $plan_check = DB::table('company_plans as cp')
    //     ->where('company_id',$company[0]->id)
    //     ->join('company_details as cd','cd.id','cp.company_id')
    //     ->join('plans as p','p.id','cp.plan_id')
    //     ->select('accessible_routes')
    //     ->get();

    //     if(!$plan_check->count()){
    //         return response()->json([
    //             'message' => 'plan kharido',
    //         ],404);
    //     }


    //     foreach($plan_check as $pc){
    //         $trimed = trim($pc->accessible_routes);
    //         $plan_arr = explode(',',$trimed);

    //         $verified = in_array(Route::currentRouteName(),$plan_arr);

    //         if($verified){
    //             break;
    //         }

    //     }

    //     if(!$verified){
    //         return response()->json([
    //             'message' => 'plan kharido',
    //         ],404);
    //     }

    //     return $next($request);
    // }





    {

        $company = DB::table('company_details')
                    // ->where('company_name',parse_url($request->url())['port'])
                    ->where('company_name',request()->getHost())
                    ->get();

        if(!$company->count()){
            return response()->json([
                'message'=> 'unauthorized'
            ],404);
        }

        // return $company;

        $plan_check = DB::table('company_plan_route as cpr')
        ->where('company_id',$company[0]->id)
        ->join('route_plan as rp','rp.id','cpr.plan_id')
        ->join('route_name as rn','rn.id','rp.id')
        ->join('plan_name as pn','pn.id','rp.id')
        ->where('rn.route_name',Route::currentRouteName())
        ->get();

        if(!$plan_check->count()){
            return response()->json([
                'message' => 'plan kharido',
            ],404);
        }


        // foreach($plan_check as $pc){
        //     $trimed = trim($pc->accessible_routes);
        //     $plan_arr = explode(',',$trimed);

        //     $verified = in_array(Route::currentRouteName(),$plan_arr);

        //     if($verified){
        //         break;
        //     }

        // }

        // if(!$verified){
        //     return response()->json([
        //         'message' => 'plan kharido',
        //     ],404);
        // }

        return $next($request);
    }
}
