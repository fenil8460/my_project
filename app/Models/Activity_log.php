<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Activity_log extends Model
{
    use HasFactory;
    public $timestamps = false ;
    public $table = 'activity_logs';

    protected $fillable = [
        'log',
        'action',
    ];

    public function getTimeAttribute($time)
{

    return[
        'date'=>$time,
        'time'=>Carbon::parse($time)->diffForHumans()
    ];
}

}
