<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuperAdminTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('super_admin', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('category');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('phone');
            $table->string('emphone');
            $table->string('profile_pic');
            $table->boolean('active');
            $table->boolean('remove');
            $table->boolean('ban');
            $table->timestamps();   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('super_admin');
    }
}
