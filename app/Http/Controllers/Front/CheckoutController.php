<?php

namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Front\CheckoutRequest;
use App\Models\Checkout;
use App\Models\Cart;
use App\Models\Customer;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    protected $checkout;
    protected $cart;
    protected $customer;

    public function __construct(Checkout $checkout, Cart $cart)
    {
        $this->checkout = $checkout;
        $this->cart = $cart;
    }
    
    public function index($fingerprint)
    {
        $totals = $this->cart
        ->where('carts.fingerprint', $fingerprint)
        ->where('carts.active', 1)
        ->where('carts.sell_id', null)
        ->join('prices', 'prices.id', '=', 'carts.price_id')
        ->join('taxes', 'taxes.id', '=', 'prices.tax_id')
        ->select(DB::raw('sum(prices.base_price) as base_total'), DB::raw('round(sum(prices.base_price * taxes.multiplicator),2) as total') )
        ->first();

        $view = View::make('front.pages.caja.index')
        ->with('fingerprint', $fingerprint)
        ->with('base_total', $totals->base_total)
        ->with('tax_total', ($totals->total - $totals->base_total))
        ->with('total', $totals->total)
        ->renderSections();

       
        return response()->json([
            'content' => $view['content'],
        ]);
    }

    public function purchase()
    {
        $view = View::make('front.pages.compra-realizada.index');
              
        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    }

    public function show(Checkout $checkout)
    {
        $view = View::make('front.pages.caja.index')
        ->with('checkout', $checkout);

        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    }

    public function store(CheckoutRequest $request)
    {            
        
        $checkout = $this->checkout->create([
            'name' => request('name'),
            'surname' => request('surname'),
            'telephone' => request('telephone'),
            'email' => request('email'),
            'city' => request('city'),
            'cp' => request('cp'),
            'adress' =>request('address'),
            'active' => 1,
        ]);
            
        $view = View::make('front.pages.caja.index')->renderSections();        

        return response()->json([
            'content' => $view['content'],
        ]);
    }
    
}                        
                               