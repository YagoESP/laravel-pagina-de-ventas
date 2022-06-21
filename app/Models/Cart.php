<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $guarded = [];

    public function price()
    {
        return $this->belongsTo(Price::class)-> where('active',1)-> where('valid',1);
    }

    public function customers()
    {
        return $this->belongsTo(Customer::class,'customer_id');
    }

    public function sells()
    {
        return $this->belongsTo(Sell::class)-> where('active',1)-> where('valid',1);
    }

    public function fingerprints()
    {
        return $this->belongsTo(Fingerprint::class,'fingerprint_id');
    }
}