<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Centre_Detail extends Model
{
    use HasFactory;
    public $timestamps = false;
    public $table = 'centre_details';
    public $guarded = [];
}
