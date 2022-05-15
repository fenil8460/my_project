<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post_dialysis extends Model
{
    use HasFactory;
    public $primaryKey = 'appointment_id';
    public $timestamps = false;
    public $table = 'post_dialysis';

    public $fillable = [
        'heart_rate',
        'weight',
    ];
}
