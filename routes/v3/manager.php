<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:sanctum')->group(function(){

    Route::middleware(['auth:manager'])->group(function(){

        

    });

// });


