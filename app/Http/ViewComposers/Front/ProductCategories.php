<?php

namespace App\Http\ViewComposers\Front;

use Illuminate\View\View;
use App\Models\ProductCategory;

class ProductCategories
{
    static $compose;

    public function __construct(ProductCategory $productcategory)
    {
        $this->productcategory = $productcategory;
    }

    public function compose(View $view)
    {

        if(static::$compose)
        {
            return $view->with('product_categories', static::$compose);
        }

        static::$compose = $this->productcategory->where('active', 1)->orderBy('category', 'asc')->get();

        $view->with('product_categories', static::$compose);

    }
}