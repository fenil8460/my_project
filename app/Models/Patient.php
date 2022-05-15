<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;


class Patient extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasFactory;

    protected $primaryKey = 'patient_id';
    protected $table = 'patient';
    public $timestamps = false;

    public  $fillable = [
        'name','phone_number','dob','email','age','gender','address','doctor','dpw',
        'awaiting_transplantation','blood_group','CKD_5,HTN','stability','heart_function',
        'injection','urea','bun','ecg','bp_stable','habits','diet','a','v','n','s','d',
        'access','covid','profile_link','branch_name','creatinine','hhh','coin','knowing_source'
    ];

    public function appointments(){
        return $this->hasMany(Appointment::class,'patient_id','patient_id');
    }

    public function doctor(){
        return $this->hasOne(Doctor::class,"id","doctor");
    }
    
    public function brnach_name(){
        return $this->hasOne(Centre::class,"code","branch_name");
    }

}
