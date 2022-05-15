<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ActivityLogMiddleware
{

    public function handle(Request $request,Closure $next)
    {

        $result = validate_routes($request,$request->route()->getName());
        // return response()->json([
        //     'msg'=>$result
        // ]);
        if($result == 'validated')
            return $next($request);
        else
            return route_validation_switch_case($result);
    }
}
