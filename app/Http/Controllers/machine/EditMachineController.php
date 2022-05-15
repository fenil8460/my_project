<?php

namespace App\Http\Controllers\machine;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Machine;
use App\Models\Centre;
use App\Models\Activity_log;
use App\Traits\ResponseAPI;
use Exception;


/**
 * @group Apis For Machine
 *
 */
class EditMachineController extends Controller
{
    use ResponseAPI;



    public function editMachine(Request $req, $id = null)
    {
        try {

            if (!Machine::where('machine_id', $id)->get()->count()) {
                return $this->error('machine not found', 404);
            }
            $validator = Validator::make($req->all(), [
                'installation_date' => 'required',
                'machine_serial_number' => 'required|unique:machines',
                'machine_type' => 'required',
                'emi' => 'required',
                'counter' => 'required',
                'provider' => 'required',
                'dmy_machine' => 'required',
            ]);

            $bn = $req->bn;

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }


            if (is_null($bn) || !(Centre::where('code', $bn)->get()->count())) {
                return $this->error("Branch not found , enter valid branch name");
            }

            $add = Machine::find($id);

            $add->provider = $req->provider;
            $add->installation_date = $req->installation_date;
            $add->machine_type = $req->machine_type;
            $add->emi = $req->emi;
            $add->dmy_machine = $req->dmy_machine;
            $add->counter = $req->counter;
            $add->code = $bn;
            $add->machine_serial_number = $req->machine_serial_number;

            $add->ban = 0;

            $edited = $add->update();
            $updated_machine = Machine::find($add->machine_id)->first();
            $machine_type = $updated_machine->machine_type;
            $machine_serial_number = $updated_machine->machine_serial_number;

            if ($edited) {
                $who = Auth::user();
                $check_user = substr($who->profile_pic, 0, 3);

                $activity_log = new Activity_log();
                $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has updated  machine - ' . $machine_type . ' and serial no. ' . $machine_serial_number;
                $activity_log->action = 'Updated machine';
                $activity_log->save();

                return $this->success('machine updated successfully');
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
