<?php

namespace App\Http\Controllers\resource;

use App\Http\Controllers\Controller;

use App\Models\Centre;
use App\Models\Machine;
use App\Models\Staff;
use App\Models\doctor;
use App\Models\sm;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Traits\ResponseAPI;
use Exception;

class resourceController extends Controller
{
    use ResponseAPI;

    public function getResource(Request $req)
    {
        try {

            $data = centre::select('centre.id', 'centre.centre_name', 'machines.provider', 'machines.machine_type', 'machines.machine_serial_number', 'machines.counter', 'machines.emi', 'staff.id', 'staff.username', 'staff.email', 'staff.designation', 'staff.phone', 'staff.emphone', 'staff.salary', 'sm.product_id', 'sm.product_name', 'sm.available_count')->where('centre.code', '=', $req)->join('machines', 'machines.code', '=', 'centre.code',)->join('staff', 'staff.branch', '=', 'machines.code')->join('sm', 'sm.branch_name', '=', 'staff.branch')->get();
            $dg = doctor::get();
            $result = $data->merge($dg);
            return $result;
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
