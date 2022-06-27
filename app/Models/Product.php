<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];
    protected $table = 'products';


    public function category()
    {
        return $this->belongsTo(ProductCategory::class)->where('active',1);
    }

    public function price()
    {
        return $this->hasMany(Price::class)->where('valid',1)->where('active',1);
    }
}