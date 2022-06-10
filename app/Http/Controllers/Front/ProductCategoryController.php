<?php

namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\ProductCategory;

class ProductCategoryController extends Controller
{
    protected $productcategory;
    
    public function __construct(ProductCategory $productcategory)
    {
        $this->productcategory = $productcategory; 
    }
    
    public function show(ProductCategory $product_category){

        $view = View::make('front.pages.tienda.index')
        ->with('category', $product_category)
        ->with('products', $product_category->products->where('visible', 1));
    
        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    }
}