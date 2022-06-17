<?php
namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Support\Facades\DB;
use Debugbar;

class CartController extends Controller
{
    protected $cart;
    
    public function __construct(Cart $cart)
    {
        $this->cart = $cart;
    }

    public function index()
    {
        $view = View::make('front.pages.carrito.index');

        return $view;
    }

    public function show(Cart $cart)
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

    public function store(Request $request)
    {

        
        for($i = 0; $i < request('quantity'); $i++){

            $cart = $this->cart->create([
                'price_id' => request('price_id'),
                'fingerprint' => '1',
                'active' => 1
            ]);
        }
        
        $carts = $this->cart->select(DB::raw('count(price_id) as quantity'),'price_id')
        ->groupByRaw('price_id')
        ->where('fingerprint', 1)
        ->get();

        foreach($carts as $cart) {
            $cart->cart = $this->cart->where('price_id', $cart->price_id)->where('fingerprint', 1)->get();
            Debugbar::info($cart->cart);
        }

        $view = View::make('front.pages.carrito.index')->renderSections();        

        return response()->json([
            'content' => $view['content'],
        ]);
    }
}                                                      