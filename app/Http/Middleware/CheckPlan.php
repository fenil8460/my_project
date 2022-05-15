<?php

namespace App\Http\Middleware;

use App\Traits\ResponseAPI;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CheckPlan
{
    use ResponseAPI;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next,$role)
    {
        $company_name = $request->segment(3);
        $data = [
            'companyName'=>$company_name
        ];
        $response = Http::post('http://127.0.0.1:8080/api/checkPlan',$data);
        $plan = json_decode($response);
        
        if (in_array($role, $plan->results))
        {
            return $next($request);
        }
        else
        {
            return $this->error('Please Subscribe the Plan');
        }
        
    }
}
