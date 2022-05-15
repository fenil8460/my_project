<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Passport\HasApiTokens;


class Staff extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = "staff";
    public $timestamps = false;
    public $hidden = [
        'password',
    ];
    public $fillable = [
        'username',
        'designation',
    ];

    use HasFactory;
}
