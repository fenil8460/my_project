<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserPermission extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('doctor', function (Blueprint $table) {
            //
            $table->string('permission_id')->nullable()->default(1);
        });

        Schema::table('staff', function (Blueprint $table) {
            //
            $table->string('permission_id')->nullable()->default(1);
        });

        Schema::table('manager', function (Blueprint $table) {
            //
            $table->string('permission_id')->nullable()->default(1);
        });

        Schema::table('admin', function (Blueprint $table) {
            //
            $table->string('permission_id')->nullable()->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('doctor', function (Blueprint $table) {
            $table->dropColumn("permission_id")->default(1);
        });
        Schema::table('staff', function (Blueprint $table) {
            $table->dropColumn("permission_id")->default(1);
        });
        Schema::table('manager', function (Blueprint $table) {
            $table->dropColumn("permission_id")->default(1);
        });
        Schema::table('admin', function (Blueprint $table) {
            $table->dropColumn("permission_id")->default(1);
        });
    }
}
