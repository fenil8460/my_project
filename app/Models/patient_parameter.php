<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient_parameter extends Model
{
    use HasFactory;
    public $table = 'patient_parameter';
    public $timestamps = false;
    public $primaryKey = 'sr';

    public $fillable = [
        'time',
        'bps',
    ];
}
