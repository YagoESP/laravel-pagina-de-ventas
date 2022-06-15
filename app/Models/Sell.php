<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sell extends Model
{
    protected $guarded = [];
    protected $table = 'sells';

    public function paymentmethods()
    {
        return $this->belongsTo(PaymentMethod::class,'')->where('active',1);
    }

    public function customers()
    {
        return $this->belongsTo(Customer::class)->where('active',1);
    }

    public function carts()
    {
        return $this->hasMany(Cart::class)->where('active',1);
    }

}