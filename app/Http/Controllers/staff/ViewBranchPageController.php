<?php

namespace App\Http\Controllers\staff;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Models\Centre;
use App\Traits\ResponseAPI;
use Exception;

class ViewBranchPageController extends Controller
{
    use ResponseAPI;

    public function view_branch_details()
    {
        try {
            $staff = Auth::user();

            if (!is_null($staff)) {

                $branch_details = centre::select('centre_name', 'code', 'normal_fee', 'emergency_fee', 'registration_fee', 'per_hour_fee')->where('code', $staff->branch)->first();
                if (!is_null($branch_details)) {
                    return response()->json([
                        'message' => 'success , fetched branch detsils',
                        'data' => $branch_details,
                    ], 200);
                }
            } else {
                return response()->json([
                    'message' => 'invalid , not logged in'
                ], 400);
            }

            return response()->json([
                'message' => 'failed to fetch detsils'
            ], 400);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
