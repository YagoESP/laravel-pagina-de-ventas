<?php
namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Http\Requests\Front\ProductRequest;
use Debugbar;

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
}                        
                               