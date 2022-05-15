<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location_Report extends Model
{
    use HasFactory;
    public $table = 'location_report';
    public $timestamps = false;

    public $fillable = [
        'address',
        'coordinate',
    ];
}
