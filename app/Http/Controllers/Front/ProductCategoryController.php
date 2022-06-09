<?php

namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use App\Http\Requests\Front\ProductCategoryRequest;
use Debugbar;

class ProductCategoryController extends Controller
{
    protected $productcategory;
    
    public function __construct(ProductCategory $productcategory)
    {
        $this->productcategory = $productcategory; 
    }
    
    public function index()
    {   
        $view = View::make('admin.panel.tienda.index')
                ->with('productcategory', $this->productcategory)
                ->with('productscategories', $this->productcategory->where('active',1)->get());


        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'table' => $sections['table'],
                'form' => $sections['form'],
            ]); 
        }

        return $view;
    }

    public function category(ProductCategory $productcategory)
    {

        
        $view = View::make('front.pages.tienda.desktop.tienda')
        ->with('productscategories', $product->where('active', 1)->where('category', $product_category->id)->get());
        
        
        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    }
}