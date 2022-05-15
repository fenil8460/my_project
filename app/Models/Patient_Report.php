<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient_Report extends Model
{
    use HasFactory;
    public $timestamps = false;
    public $table = 'patient_reports';

    public $fillable = [
        'patient_id',
        'description',
    ];
}
