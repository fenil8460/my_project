<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\HomeDialysis\HomeDialysisController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


// Route::get('/{company_name?}',function(Request $req){
//     // return $req->getHost(
//     // return $parsedUrl = parse_url($req->url());
//      $company = DB::table('company_details')
//      ->where('company_name',parse_url($req->url())['port'])
//     ->get();

//     // return $company[0]->id;
//     // return $company[0]['id'];

//     if(!$company->count()){
//         return response()->json([
//             'message'=> 'unauthorized'
//         ],404);
//     }


//     $plan_check = DB::table('company_plans as cp')
//                   ->where('company_id',$company[0]->id)
//                   ->join('company_details as cd','cd.id','cp.company_id')
//                   ->join('plans as p','p.id','cp.plan_id')
//                   ->select('accessible_routes')
//                   ->get();


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
//             'message' => 'plan kharido'
//         ],404);
//     }

//     return $plan_check;

//     return $company->count();
// });

// Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');


Route::get('homeDialysisList',[HomeDialysisController::class,'homeDialysisList']);




Route::get('fetchHomePatientByDate',[HomeDialysisController::class,'fetchHomePatientByDate']);

Route::get('/', function () {
    return view('application');
});
