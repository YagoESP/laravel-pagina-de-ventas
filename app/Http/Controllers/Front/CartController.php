<?php
namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Fingerprint;
use Illuminate\Support\Facades\DB;
use Debugbar;

class CartController extends Controller
{
    protected $cart;
    protected $fingerprint;
    
    public function __construct(Cart $cart, Fingerprint $fingerprint)
    {
        $this->cart = $cart;
        $this->fingerprint = $fingerprint;
    }
 

    public function index()
    {
        $view = View::make('front.pages.carrito.index');

        return $view;
    }

    public function show(Cart $cart,Fingerprint $fingerprint)
    {
        $view = View::make('front.pages.carrito.index')
        ->with('cart', $cart)
        ->with('fingerprint', $fingerprint);

        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    
    }

    public function store(Request $request )
    {
        

        for($i = 0; $i < request('quantity'); $i++){

            $cart = $this->cart->create([
                'id' => request('id'),
                'price_id' => request('price_id'),
                'fingerprint' => $request->cookie('fp'),
                'customer_id' => NULL,
                'sell_id' => null,
                'active' => 1,
            ]);
        }

        
        $carts = $this->cart->select(DB::raw('count(price_id) as quantity'),'price_id')
        ->groupByRaw('price_id')
        ->where('active', 1)
        ->where('fingerprint',  $request->cookie('fp'))
        ->where('sell_id', null)
        ->orderBy('price_id', 'desc')
        ->get();

        $totals = $this->cart
        ->where('carts.fingerprint', $request->cookie('fp'))
        ->where('carts.active', 1)
        ->where('carts.sell_id', null)
        ->join('prices', 'prices.id', '=', 'carts.price_id')
        ->join('taxes', 'taxes.id', '=', 'prices.tax_id')
        ->select(DB::raw('sum(prices.base_price) as base_total'), DB::raw('round(sum(prices.base_price * taxes.multiplicator),2) as total') )
        ->first();

        $view = View::make('front.pages.carrito.index')
        ->with('carts', $carts)
        ->with('base_total', $totals->base_total)
        ->with('tax_total', ($totals->total - $totals->base_total))
        ->with('total', $totals->total)
        ->with('fingerprint', $request->cookie('fp'))
        ->renderSections();

        return response()->json([
            'content' => $view['content'],
        ]);

    }

    
    public function plus(Request $request, $price_id)
    {
        $cart = $this->cart->create([
            'price_id' => $price_id,
            'fingerprint' => $request->cookie('fp'),
            'active' => 1,
        ]);

        $total_base = 0;
        $total_tax = 0;

        $carts = $this->cart->select(DB::raw('count(price_id) as quantity'),'price_id')
        ->groupByRaw('price_id')
        ->where('active', 1)
        ->where('fingerprint', $request->cookie('fp'))
        ->where('sell_id', null)
        ->orderBy('price_id', 'desc')
        ->get();

        $totals = $this->cart
        ->where('carts.fingerprint', $request->cookie('fp'))
        ->where('carts.active', 1)
        ->where('carts.sell_id', null)
        ->join('prices', 'prices.id', '=', 'carts.price_id')
        ->join('taxes', 'taxes.id', '=', 'prices.tax_id')
        ->select(DB::raw('sum(prices.base_price) as base_total'), DB::raw('round(sum(prices.base_price * taxes.multiplicator),2) as total') )
        ->first();

        $view = View::make('front.pages.carrito.index')
        ->with('carts', $carts)
        ->with('fingerprint', $request->cookie('fp'))
        ->with('base_total', $totals->base_total)
        ->with('tax_total', ($totals->total - $totals->base_total))
        ->with('total', $totals->total)
        ->renderSections();

        return response()->json([
            'content' => $view['content'],
        ]);
    }

    
    public function minus(Request $request, $price_id)
    {
      
        $resume = $this->cart
        ->where('active', 1)
        ->where('fingerprint', $request->cookie('fp'))
        ->where('price_id', $price_id)
        ->first();

        $resume->active = 0;
        $resume->save();

        

        $carts = $this->cart->select(DB::raw('count(price_id) as quantity'),'price_id')
        ->groupByRaw('price_id')
        ->where('active', 1)
        ->where('fingerprint',  $request->cookie('fp'))
        ->where('sell_id', null)
        ->orderBy('price_id', 'desc')
        ->get();

        $totals = $this->cart
        ->where('carts.fingerprint', $request->cookie('fp'))
        ->where('carts.active', 1)
        ->where('carts.sell_id', null)
        ->join('prices', 'prices.id', '=', 'carts.price_id')
        ->join('taxes', 'taxes.id', '=', 'prices.tax_id')
        ->select(DB::raw('sum(prices.base_price) as base_total'), DB::raw('round(sum(prices.base_price * taxes.multiplicator),2) as total') )
        ->first();

        $view = View::make('front.pages.carrito.index')
        ->with('carts', $carts)
        ->with('fingerprint', $request->cookie('fp'))
        ->with('base_total', $totals->base_total)
        ->with('tax_total', ($totals->total - $totals->base_total))
        ->with('total', $totals->total)
        ->renderSections();

        return response()->json([
            'content' => $view['content'],
        ]);
    }

}                                                      