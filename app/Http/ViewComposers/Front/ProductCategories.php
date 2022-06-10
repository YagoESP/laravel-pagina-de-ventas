<?php

namespace App\Http\ViewComposers\Front;

use Illuminate\View\View;
use App\Models\ProductCategory;

class ProductCategories
{
    static $composed;

    public function __construct(ProductCategory $product_category)
    {
        $this->product_category = $product_category;
    }

    public function compose(View $view)
    {

        if(static::$composed)
        {
            return $view->with('product_categories', static::$composed);
        }

        static::$composed = $this->product_category->where('active', 1)->orderBy('title', 'asc')->get();

        $view->with('product_categories', static::$composed);

    }
 }