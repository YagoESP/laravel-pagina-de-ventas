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
                'active' => 1,
            ]);
        }
        
        $carts = $this->cart->select(DB::raw('count(price_id) as quantity'),'price_id')
        ->groupByRaw('price_id')
        ->where('fingerprint', $cart->fingerprint)
        ->get();

        $view = View::make('front.pages.carrito.index')
        ->with('carts', $carts)
        ->with('fingerprint', $cart->fingerprint)
        ->renderSections();    
        
        return response()->json([
            'content' => $view['content'],
        ]);


    }

    
    public function plus(Request $request)
    {

        if( $cart < 0 ){

            $cart= $this->cart->update([
                'quantity' => $cart->quantity + 1,
            ]);
        }

        $view = View::make('front.pages.carrito.index')
        ->with('carts', $carts)
        ->with('fingerprint', $cart->fingerprint)
        ->renderSections(); 

        return response()->json([
            'content' => $view['conten,t'],
        ]);

    }

    
    public function minus(Request $request)
    {

        if( $cart > 0 ){

            $cart= $this->cart->first()->update([
                'quantity' => $cart->quantity - 1,
            ]);
        }

        $cart = $this->cart->find($request->id);

        $view = View::make('front.pages.carrito.index')
        ->with('carts', $carts)
        ->with('fingerprint', $cart->fingerprint)
        ->renderSections(); 

        return response()->json([
            'content' => $view['content'],
        ]);

    }
}                                                      