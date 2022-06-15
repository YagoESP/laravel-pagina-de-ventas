<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $guarded = [];
    protected $table = 'carts';
    protected $table = 'customers';
    protected $table = 'products';

    public function prices()
    {
        return $this->belongsTo(Price::class,'cart_id');
    }

    public function customers()
    {
        return $this->belongsTo(Customer::class,'customer_id');
    }

    public function sells()
    {
        return $this->belongsTo(Sell::class,'sell_id');
    }

    public function fingerprints()
    {
        return $this->belongsTo(Fingerprint::class,'fingerprint_id');
    }
}