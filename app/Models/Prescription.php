<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    public $timestamps = false;
    use HasFactory;

    public $fillable = [
        'prescription',
        'date',
    ];
}
