<?php
namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Cart;

class CartController extends Controller
{
    protected $cart;
    
    public function __construct(Cart $cart)
    {
        $this->cart = $cart;
    }

    public function index()
    {
        $view = View::make('front.pages.carrito.index')
        ->with('carts', $this->cart->where('active', 1)->where('visible',1)->get());
        
        return $view;
    }

    public function store(Cart $cart)
    {
        $view = View::make('front.pages.carrito.index')
        ->with('cart', $cart);

        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    }
}                                                      