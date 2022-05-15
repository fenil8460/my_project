<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Centre extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "centre";
    public $fillable = [
        'centre_name',
        'code',
    ];
}
