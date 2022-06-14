<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sells', function (Blueprint $table) {
            $table->id();
            $table->string('ticket_number');
            $table->string('date_emision');
            $table->string('time_emision');
            $table->string('payment_method_id');
            $table->string('total_base_price');
            $table->string('total_tax_price');
            $table->string('total_price');
            $table->string('customer_id');
            $table->boolean('active');
            $table->boolean('visible');
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
        Schema::dropIfExists('sells');
    }
};
