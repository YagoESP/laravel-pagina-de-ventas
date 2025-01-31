<?php
namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Http\Requests\Front\ProductRequest;
use DebugBar;

class ProductController extends Controller
{
    protected $cart;
    
    public function __construct(Cart $cart)
    {
        $this->cart = $cart;
    }

    public function index()
    {
        $view = View::make('front.pages.tienda.index')
        ->with('products', $this->cart->where('active', 1)->where('visible',1)->get())
        ->with('title', 'Tienda');
        
        return $view;
    }
}                                                      