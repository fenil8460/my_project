<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patient_bill extends Model
{
    public $table = 'patient_bill';
    public $timestamps = false;
    use HasFactory;

    public $fillable = [
        'name',
        'brand',
    ];
}
