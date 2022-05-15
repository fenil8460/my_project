<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trp_Section extends Model
{
    use HasFactory;
    public $table = 'trp_sections';
    public $connection = 'mysql_super_admin';
    public $timestamps = false;

}
