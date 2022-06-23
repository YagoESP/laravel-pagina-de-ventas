<?php

namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Checkout;
use App\Models\Cart;
use App\Models\Customer;
use App\Models\Sell;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    protected $checkout;
    protected $cart;
    protected $customer;
    protected $sell;

    public function __construct(Checkout $checkout, Cart $cart , Sell $sell, Customer $customer)
    {
        $this->checkout = $checkout;
        $this->cart = $cart;
        $this->customer = $customer;
        $this->sell = $sell;
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

    public function store()
    {            
        

        $checkout = $this->checkout->create([
            'id' => request('id'),
            'name' => request('name'),
            'surname' => request('surname'),
            'telephone' => request('telephone'),
            'email' => request('email'),
            'city' => request('city'),
            'cp' => request('cp'),
            'adress' =>request('address'),
            'active' => 1,
        ]);

        $sell = $this->sell->create([
            'id' => request('id'),
            'ticket_number' => request('ticket_number'),
            'date_emision' => request('date_emision'),
            'time_emision' => request('time_emision'),
            'payment_method_id' => request('payment_method_id'),
            'total_base_price' => $total_base_price,
            'total_tax_price' => $total_tax_price,
            'total_price' => $total_price,
            'active' => 1,
            
        ]);

        $customer = $this->customer->create([
            'id' => request('id'),
            'customer_id' => $customer_id,
            'name' => request('name'),
            'email' => request('email'),
            'phone' => request('phone'),
            'address' => request('address'),
            'city' => request('city'),
            'country' => request('country'),
            'postal_code' => request('postal_code'),
            'active' => 1,
        ]);

        
            
        $view = View::make('front.pages.compra-realizada.index')
        ->with('checkout', $checkout)
        ->with('sell', $sell)
        ->with('customer', $customer)
        ->select(DB::raw(''),DB::raw('') )
        ->renderSections();        

        return response()->json([
            'content' => $view['content'],
        ]);
    }
    
}                        
                               