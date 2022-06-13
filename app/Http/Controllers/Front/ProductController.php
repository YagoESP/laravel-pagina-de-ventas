<?php
namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Http\Requests\Front\ProductRequest;
use DebugBar;

class ProductController extends Controller
{
    protected $product;
    
    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function index()
    {
        $view = View::make('front.pages.tienda.index')
        ->with('products', $this->product->where('active', 1)->where('visible',1)->get())
        ->with('title', 'Tienda');
        
        return $view;
    }

    public function show(Product $product)
    {
        $view = View::make('front.pages.producto.index')
        ->with('product', $product);

        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    
    }

    public function filter(Product $filter){
        $view = View::make('front.pages.tienda.index')
        ->with('products', $filter);

        if('price_desc'){
            $view->with('price_desc', $filter->products->where('visible', 1)->orderBy('price', 'desc'));
        }elseif('price_asc'){
            $view->with('price_asc', $filter->products->where('visible', 1)->orderBy('price', 'asc'));
        }
        
        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    }
}                        
                               