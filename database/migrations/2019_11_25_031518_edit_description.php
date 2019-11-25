<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EditDescription extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('causes', function (Blueprint $table) {
            $table->text('description')->nullable()->change();
        });
        Schema::table('categories', function (Blueprint $table) {
            $table->text('description')->nullable()->change();
        });
        Schema::table('charities', function (Blueprint $table) {
            $table->text('description')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
