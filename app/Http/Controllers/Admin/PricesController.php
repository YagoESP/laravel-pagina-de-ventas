<?php
namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Price;
use App\Http\Requests\Front\PriceRequest;
use DebugBar;

class PriceController extends Controller
{
    protected $price;
    
    public function __construct(Price $price)
    {
        $this->price = $price;
    }

    public function index()
    {
        $view = View::make('front.pages.tienda.index')
        ->with('products', $this->price->where('active', 1)->where('visible',1)->get())
        ->with('title', 'Tienda');
        
        return $view;
    }

    public function show(Price $price)
    {
        $view = View::make('front.pages.producto.index')
        ->with('price', $price);

        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    
    }

    public function filter($filter){
        $view = View::make('front.pages.tienda.index')
        ->with('products', $this->products->where('active', 1)->orderBy('price', $filter)->get());
        
        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    }
}                                                      