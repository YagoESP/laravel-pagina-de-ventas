<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    protected $guarded = [];
    protected $table = 'prices';

    public function price()
    {
        return $this->hasMany(Price::class,'price_id');
    }
}