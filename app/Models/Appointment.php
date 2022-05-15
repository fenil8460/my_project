<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    public $primaryKey = 'appointment_id';
    public $timestamps = false;

    protected $table = "appointments";

    protected $fillable = [
        'patient_id',
        'start_time',
        'end_time',
        'record_type',
    ];

    public function patient(){
        return $this->hasOne(Patient::class,'patient_id','patient_id');
    }
    
}
