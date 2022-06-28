<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Sell;
use App\Models\Cart;
use App\Models\Customer;
use Illuminate\Support\Facades\DB;

class SellController extends Controller
{
    protected $sell;

    public function __construct(Sell $sell, Cart $cart , Customer $customer)
    {
        $this->sell = $sell;
        $this->cart = $cart;
        $this->customer = $customer;
    }
  
    public function index()
    {


        $view = View::make('admin.panel.sell.index')
        ->with('sell', $this->sell)
        ->with('sells', $this->sell->where('active',1)->get());

        if(request()->ajax()) {
                
            $sections = $view->renderSections(); 
        
            return response()->json([
                'table' => $sections['table'],
                'form' => $sections['form'],
            ]); 
        }

        return $view;
    }

    public function create()
    {

       $view = View::make('admin.panel.sell.index')
        ->with('sell', $this->sell)
        ->renderSections();


        return response()->json([
            'form' => $view['form']
            
        ]);
    }

    public function store(Request $request)
    {            
        
        $sell = $this->sell->create([
            'id' => request('id'),
            'name' => request('name'),
        ]);

            
        $view = View::make('admin.panel.sell.index')
        ->with('products', $this->sell->where('active', 1)->get())
        ->with('sell', $sell)

        ->renderSections();       

        return response()->json([
            'table' => $view['table'],
            'form' => $view['form'],
            'id' => $sell->id,
        ]);
    }

    public function edit(Sell $sell)
    {
        
        $carts = $this->cart->select(DB::raw('count(price_id) as quantity'),'price_id')
        ->groupByRaw('price_id')
        ->where('active', 1)
        ->where('sell_id', null)
        ->orderBy('price_id', 'desc')
        ->get();

        $totals = $this->cart
        ->where('carts.active', 1)
        ->where('carts.sell_id', null)
        ->join('prices', 'prices.id', '=', 'carts.price_id')
        ->join('taxes', 'taxes.id', '=', 'prices.tax_id')
        ->select(DB::raw('prices.base_price as base_total'), DB::raw('round(sum(prices.base_price * taxes.multiplicator),2) as total') )
        ->first();

        $view = View::make('admin.panel.sell.index')
        ->with('sell', $sell)
        ->with('sells', $this->sell->where('active', 1)->get())
        ->with('cart', $cart)
        ->with('carts', $this->sell->where('active', 1)->get())
        ->with('base_total', $totals->base_total)
        ->with('tax_total', ($totals->total - $totals->base_total))
        ->with('total', $totals->total)
        ->renderSections();

        if(request()->ajax()) {

            $sections = $view->renderSections(); 
    
            return response()->json([
                'form' => $sections['form'],
            ]); 
        }
                
        return $view;
    }

    public function show(Sell $sell){

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