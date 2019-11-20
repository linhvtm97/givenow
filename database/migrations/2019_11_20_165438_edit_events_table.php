<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EditEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->renameColumn('avatar', 'image')->change();
        });
        Schema::table('items', function (Blueprint $table) {
            $table->renameColumn('avatar', 'image')->change();
        });
        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('avatar', 'image')->change();
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
