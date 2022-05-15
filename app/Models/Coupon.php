<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    public $primaryKey = 'patient_id';
    public $timestamps = false;
    public $table = 'coupon';
    use HasFactory;

    public $fillable = [
        'code',
        'amount',
    ];
}
