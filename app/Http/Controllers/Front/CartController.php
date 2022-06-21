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




        $view = $this->cart->select(DB::raw('price_id'))
        ->join('prices', 'prices.id', '=', 'carts.price_id')
        ->join('taxes', 'taxes.id', '=', 'prices.tax_id')
        ->where('taxes.type', '*', 'carts.quantity')
        ->where('taxes.multiplicator', '/', 'taxes.type')
        ->get();

        $view = $this->cart->select(DB::raw('price_id'))
        ->join('prices', 'prices.id', '=', 'carts.price_id')
        ->where('prices.base_price', '*', 'carts.quantity')
        ->get();

        $view = $this->cart->select(DB::raw('price_id'))
        ->join('prices', 'prices.id', '=', 'carts.price_id')
        ->join('taxes', 'taxes.id', '=', 'prices.tax_id')
        ->where('prices.base_price', '*', 'carts.quantity')
        ->where('taxes.type', '*', 'carts.quantity')
        ->where('taxes.multiplicator', '/', 'taxes.type')
        ->get();
       
        Debugbar::info($view);
        


        $view = View::make('front.pages.carrito.index')
        ->with('carts', $carts)
        ->with('fingerprint', $cart->fingerprint)
        ->renderSections();    
        
        return response()->json([
            'content' => $view['content'],
        ]);


    }

    
    public function plus($fingerprint, $price_id)
    {
        $cart = $this->cart->update([
            'price_id' => $price_id,
            'fingerprint' => $fingerprint,
            'active' => 1,
        ]);

        $carts = $this->cart->select(DB::raw('count(price_id) as quantity'),'price_id')
        ->groupByRaw('price_id')
        ->where('active', 1)
        ->where('fingerprint',  $fingerprint)
        ->orderBy('price_id', 'desc')
        ->get();

        $view = View::make('front.pages.carrito.index')
        ->with('carts', $carts)
        ->with('fingerprint', $cart->fingerprint)
        ->renderSections();

        return response()->json([
            'content' => $view['content'],
        ]);
    }

    
    public function minus($fingerprint, $price_id)
    {
      
        $carts = $this->cart
        ->where('active', 1)
        ->where('fingerprint', $fingerprint)
        ->where('price_id', $price_id)
        ->find();

        $cart->active = 0;

        $cart->save();



        $carts = $this->cart->select(DB::raw('count(price_id) as quantity'),'price_id')
        ->groupByRaw('price_id')
        ->where('active', 1)
        ->where('fingerprint',  $fingerprint)
        ->get();

        $view = View::make('front.pages.carrito.index')
        ->with('carts', $carts)
        ->with('fingerprint', $fingerprint)
        ->renderSections();

        return response()->json([
            'content' => $view['content'],
        ]);
    }

}                                                      