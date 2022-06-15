<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    protected $guarded = [];
    protected $table = 'payment_methods';

    public function sells()
    {
        return $this->hasMany(Sell::class,'sell_id');
    }
}