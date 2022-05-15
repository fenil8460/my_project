<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pre_dialysis extends Model
{
    use HasFactory;
    public $primaryKey = 'appointment_id';
    public $timestamps = false;
    protected $table = 'pre_dialysis';

    public $fillable = [
        'heart_rate',
        'weight',
    ];
}
