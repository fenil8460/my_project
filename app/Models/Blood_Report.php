<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blood_Report extends Model
{
    use HasFactory;
    public $timestamps = false;
    public $table = 'blood_report';
    // public $guarded = ['blood_report'];
    public $fillable = [
        'patient_id',
        'haemoglobin',
        'rbc',
        'pcv',
        'corp_volume',
        'corp_hb',
        'corp_hb_conc',
        'platelet',
        'rdw',
        'wbc',
        'neutro',
        'lympho',
        'mono',
        'eosino',
        'baso',
        'ab_wbc',
        'ab_rbc',
        'remark',
        'protein',
        'albumin',
        'globulin',
        'albu_glob',
    ];
}
