<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    protected $guarded = [];
    protected $table = 'products_categories';
    protected $with = ['products'];
    

    public function products()
    {
        return $this->hasMany(Product::class,'category')->where('active',1);
    }
}