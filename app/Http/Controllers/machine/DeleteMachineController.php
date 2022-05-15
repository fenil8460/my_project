<?php

namespace App\Http\Controllers\machine;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Machine;
use App\Models\Activity_log;
use Illuminate\Support\Facades\Auth;
use App\Traits\ResponseAPI;
use Exception;

/**
 * @group Apis For Machine
 *
 * Apis for managing machine
 *
 * 1. Deleting mahcine .
 */
class DeleteMachineController extends Controller
{

    use ResponseAPI;

    /**
     * For deleting machine.

     *
     * This endpoint allows you to delete machine .
     *  @authenticated
     *  @urlParam id integer required The ID of the machne
     *
     *@response{
     *          "message": "machine Deleted successfully"
     *      }
     *@response status=404{
     *          'message':'machine not found'
     *      }
     */

    public function deleteMachine(Request $req, $id = null)
    {
        try {
            if (!Machine::where('machine_id', $id)->get()->count()) {
                return $this->error('machine not found', 404);
            }
            // return $id;
            $add = Machine::find($id);
            $machine_type = $add->machine_type;
            $machine_serial_number = $add->machine_serial_number;
            $del = $add->delete();
            if ($del) {
                $who = Auth::user();
                $check_user = substr($who->profile_pic, 0, 3);

                $check_user = substr($who->profile_pic, 0, 3);
                $activity_log = new Activity_log();
                $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has deleted  machine - ' . $machine_type . ' and serial no. ' . $machine_serial_number;
                $activity_log->action = 'delete work';
                $activity_log->save();

                return $this->success("machine Deleted successfully");
            }

            return $this->error('cant delete this machine', 400);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }



    public function ban_unban(Request $req, $machine_id = null)
    {
        try {
            $who = Auth::user();

            if (Machine::where("machine_id", $machine_id)->get()->count() == 0) {
                return $this->error('machine not found', 404);
            }

            $machine = Machine::where("machine_id", $machine_id)->first();

            $machine_type = $machine->machine_type;
            $machine_serial_number = $machine->machine_serial_number;
            $check = $machine->ban;

            if ($check == 0) {
                $machine->ban = 1;
                $ban = $machine->update();

                if ($ban) {
                    $check_user = substr($who->profile_pic, 0, 3);

                    $check_user = substr($who->profile_pic, 0, 3);
                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has banned  machine - ' . $machine_type . ' and serial no. ' . $machine_serial_number;
                    $activity_log->action = 'delete work';
                    $activity_log->save();

                    return $this->success("machine banned successfully");
                }


                return $this->error('serve error,unable to ban machine', 500);
            } elseif ($check == 1) {
                $machine->ban = 0;
                $unban = $machine->update();

                if ($unban) {
                    $check_user = substr($who->profile_pic, 0, 3);
                    $activity_log = new Activity_log();
                    $activity_log->log = $who->username . (($check_user == 'MID') ? ' (Manager)' : ' (Admin)') . '  has banned  machine - ' . $machine_type . ' and serial no. ' . $machine_serial_number;
                    $activity_log->action = 'delete work';
                    $activity_log->save();

                    return $this->success("machine unbanned successfully");
                }

                return $this->error('serve error,unable to unban machine', 500);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
