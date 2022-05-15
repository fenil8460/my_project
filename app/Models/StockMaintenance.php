<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class StockMaintenance extends Model
{
    use HasFactory;
    public $timestamps = false;
    public $primaryKey = 'product_id';
    protected $table = 'sm';
    protected $guarded = ['update'];

    public $fillable = [
        'branch_name',
        'product_name',
    ];

    public function brand(){
        return $this->hasMany(StockMaintenance::class,'product_name');
    }

}
