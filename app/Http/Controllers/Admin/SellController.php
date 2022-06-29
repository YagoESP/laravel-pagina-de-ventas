<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Sell;
use App\Models\Cart;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SellController extends Controller
{
    protected $sell;
    protected $cart;
    protected $customer;

    public function __construct(Sell $sell, Cart $cart, Customer $customer)
    {
        $this->sell = $sell;
        $this->cart = $cart;
        $this->customer = $customer;
    }

    public function index()
    {
        $view = View::make('admin.panel.sell.index')
        ->with('sell', $this->sell)
        ->with('sells', $this->sell->where('active',1)->get())
        ->with('customer', $this->customer)
        ->with('customers', $this->customer->where('active',1)->get());

        if(request()->ajax()) {
                
            $sections = $view->renderSections(); 
        
            return response()->json([
                'table' => $sections['table'],
                'form' => $sections['form'],
            ]); 
        }

        return $view;
    }

    public function edit(Request $request,Sell $sell, Cart $cart, Customer $customer)
    {    

        $carts = $this->cart->select(DB::raw('count(price_id) as quantity'),'price_id')
        ->groupByRaw('price_id')
        ->where('active', 1)
        ->where('sell_id', $sell->id)
        ->orderBy('price_id', 'desc')
        ->get();

        $view = View::make('admin.panel.sell.index')
        ->with('sell', $sell)
        ->with('sells', $this->sell->where('active', 1)->get())
        ->with('customer', $customer)
        ->with('customers', $this->customer->where('active', 1)->get())
        ->with('carts', $carts);

        if(request()->ajax()) {

            $sections = $view->renderSections(); 
    
            return response()->json([
                'form' => $sections['form'],
            ]); 
        }
                
        return $view;
    }

    public function destroy(Sell $sell)
    {
        $sell->active = 0;
        $sell->save();

        $view = View::make('admin.panel.sell.index')
            ->with('sell', $this->sell)
            ->with('sells', $this->sell->where('active', 1)->get())

            ->renderSections();
        
        return response()->json([
            'table' => $view['table'],
            'form' => $view['form']
        ]);
    }
}