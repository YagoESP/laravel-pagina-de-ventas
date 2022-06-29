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

    public function __construct(Cart $cart , Sell $sell, Customer $customer)
    {
        $this->cart = $cart;
        $this->customer = $customer;
        $this->sell = $sell;
    }
    
    public function index(Request $request)
    {
        $totals = $this->cart
        ->where('carts.fingerprint', $request->cookie('fp'))
        ->where('carts.active', 1)
        ->where('carts.sell_id', null)
        ->join('prices', 'prices.id', '=', 'carts.price_id')
        ->join('taxes', 'taxes.id', '=', 'prices.tax_id')
        ->select(DB::raw('sum(prices.base_price) as base_total'), DB::raw('round(sum(prices.base_price * taxes.multiplicator),2) as total') )
        ->first();

        $view = View::make('front.pages.caja.index')
        ->with('fingerprint',$request->cookie('fp'))
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

    public function store(Request $request)
    {            

        date_default_timezone_set('Europe/Madrid');

        $totals = $this->cart
        ->where('carts.fingerprint', $request->cookie('fp'))
        ->where('carts.active', 1)
        ->where('carts.sell_id', null)
        ->join('prices', 'prices.id', '=', 'carts.price_id')
        ->join('taxes', 'taxes.id', '=', 'prices.tax_id')
        ->select(DB::raw('sum(prices.base_price) as base_total'), DB::raw('round(sum(prices.base_price * taxes.multiplicator),2) as total') )
        ->first();

        $ticket_number = $this-> sell->latest()->ticket_number;

        if(content($ticket_number) == null) {
            $ticket_number += 1;
            
        } else {
            $ticket_number = date('Ymd')  + '001';
            
        }

        $customer = $this->customer->create([
            'name' => request('name'),
            'surname' => request('surname'),
            'phone' => request('phone'),
            'email' => request('email'),
            'city' => request('city'),
            'postal_code' => request('postal_code'),
            'address' =>request('address'),
            'visible' => 1,
            'active' => 1,
        ]);

        $sell = $this->sell->create([
            'id' => 1,
            'ticket_number' => $ticket_number,
            'date_emision' => date('Y-m-d'),
            'time_emision' => date('H:i:s'),
            'payment_method_id' => request('payment_method_id'),
            'customer_id' => $customer->id,
            'total_base_price' => $total_base_price = $totals->base_total,
            'total_tax_price' => $total_tax_price = $totals->total - $totals->base_total,
            'total_price' => $total_price = $totals->total,
            'visible' => 1,
            'active' => 1,
        ]);

        $cart = $this->cart
        ->where('sell_id', NULL)
        ->where('fingerprint', $request->cookie('fp'))
        ->where('active', 1)
        ->update([
            'sell_id' => $sell->id,
            'customer_id' => $customer->id,
        ]);
            
        $view = View::make('front.pages.compra-realizada.index')
        ->renderSections();        

        return response()->json([
            'content' => $view['content'],
        ]);
    }
    
}                        
                               