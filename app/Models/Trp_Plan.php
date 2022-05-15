<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trp_Plan extends Model
{
    public $connection = 'mysql_super_admin';
    public $table = 'trp_plans';
    public $timestamps = false;
    use HasFactory;
}
