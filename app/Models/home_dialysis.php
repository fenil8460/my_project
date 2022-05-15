<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class home_dialysis extends Model
{
    use HasFactory;
    protected $table = "home_dialysis";
    public $timestamps = false;

    public $fillable = [
        'per_hour_fee',
        'location',
    ];
}
