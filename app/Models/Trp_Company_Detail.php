<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trp_Company_Detail extends Model
{
    public $connection = 'mysql_super_admin';
    public $table = 'trp_company_details';
    public $timestamps = false;

    public function package(){

        return $this->hasOne(Trp_Plan::class, 'id', 'package');

    }

    use HasFactory;
}
