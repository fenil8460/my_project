<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Activity_log;
use Illuminate\Support\Facades\Validator;
use App\Traits\ResponseAPI;
use Exception;

class ActivityLogController extends Controller
{
    use ResponseAPI;

    public function activityLog(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), [
                'filter_action' => 'nullable',
                'date' => 'date_format:Y-m-d|nullable'
            ]);

            if ($validator->fails()) {
                return $this->error($validator->errors());
            }

            $start_date = $req->date . ' 00:00:00';
            $end_date = $req->date . ' 23:59:59';

            if ($req->filter_action == null && $req->date == null) {
                $activity_log = Activity_log::orderBy('time', 'desc')->get();
            } elseif ($req->filter_action != null && $req->date == null) {
                $activity_log = Activity_log::orderBy('time', 'desc')->where('action', $req->filter_action)->get();
            } elseif ($req->filter_action == null && $req->date != null) {
                $activity_log = Activity_log::orderBy('time', 'desc')->whereDate('time', '<=', $end_date)
                    ->whereDate('time', '>=', $start_date)
                    ->get();
            } elseif ($req->filter_action != null && $req->date != null) {
                $activity_log = Activity_log::orderBy('time', 'desc')->whereDate('time', '<=', $end_date)
                    ->whereDate('time', '>=', $start_date)
                    ->where('action', $req->filter_action)
                    ->get();
            } else {
                return $this->error('not found', 404);
            }

            if ($activity_log->isEmpty()) {
                return $this->error('not found', 404);
            }

            return $this->success($activity_log, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function activity_log_filter_list()
    {
        try {
            $activity_log_filter_list = Activity_log::groupBy('action')->select('action')->pluck('action');
            if ($activity_log_filter_list->isEmpty()) {
                return $this->error('not found', 404);
            }

            return $this->success($activity_log_filter_list, 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
