<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];
    protected $table = 'products';

    public function productCategory()
    {
        return $this->belongsTo(ProductCategory::class,'category');
    }
}