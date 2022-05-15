<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class booked_appointments extends Model
{
    use HasFactory;
    public $timestamps = false;

    public $fillable = [
        'branch_name',
        'branch_code',
    ];
}
