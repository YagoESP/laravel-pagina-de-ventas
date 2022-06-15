<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];
    protected $table = 'products';


    public function productCategory()
    {
        return $this->belongsTo(ProductCategory::class)->where('active',1);
    }

    public function prices()
    {
        return $this->hasMany(Price::class)->where('valid',1)->where('active',1);
    }
}