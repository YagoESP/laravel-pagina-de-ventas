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
        ->with('products', $this->product->where('active', 1)
        ->where('visible',1)->get());
        
        return $view;
    }

    public function shop(Product $product)
    {
        $view = View::make('front.pages.tienda.index')
        ->with('products', $this->product->where('active', 1)
        ->where('visible',1)->get());

        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

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

    public function filter($filter){
      

        $products =  $this->product->where('visible', 1)
        ->join('prices', 'prices.product_id', '=', 'products.id')
        ->select('products.*', 'prices.base_price')
        ->orderBy('base_price', $filter)
        ->get();

        $view = View::make('front.pages.tienda.index')
        ->with('products', $products);
        
        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    }
}                                                      