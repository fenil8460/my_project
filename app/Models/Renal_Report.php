<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Renal_Report extends Model
{
    use HasFactory;
    public $timestamps = false;
    public $table = 'renal_report';
    // public $guarded = ['renal_report'];
    public $fillable = [
        'patient_id',
        'protein',
        'albumin',
        'globulin',
        'alu_glo',
        'uric_acid',
        'urea',
        'creatinine',
        'calcium',
        'phosphorous',
        'sodium',
        'potassium',
        'chloride',
        'ionised_cal',
        'bio_protein',
        'bio_albumin',
        'bio_globulin',
        'ag_ratio',
    ];
}
