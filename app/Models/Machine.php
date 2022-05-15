<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Machine extends Model
{
    public $timestamps = false;
    public $primaryKey = 'machine_id';
     protected $table = "machines";
    use HasFactory;

    
    public $fillable = [
        'code',
        'provider',
    ];

}
