<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Sell;

class SellController extends Controller
{
    protected $sell;

    public function __construct(Sell $sell)
    {
        $this->sell = $sell; 
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
        
        $sells = $this->cart
        ->where('carts.fingerprint', $fingerprint)
        ->where('carts.active', 1)
        ->where('carts.sell_id', null)
       ->join('carts', 'sell.id', '=' ,'sells.total_price')
        ->join('prices', 'prices.id', '=', 'sells.total_base_price')
        ->join('taxes', 'taxes.id', '=', 'sells.total_tax_price')
        ->select(DB::raw('sum(prices.base_price) as base_total'), DB::raw('round(sum(prices.base_price * taxes.multiplicator),2) as total') )
        ->first();
            
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
        
        $view = View::make('admin.panel.sell.index')
        ->with('sell', $sell)
        ->with('products', $this->sell->where('active', 1)->get());

        
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
            ->with('products', $this->sell->where('active', 1)->get())

            ->renderSections();
        
        return response()->json([
            'table' => $view['table'],
            'form' => $view['form']
        ]);
    }
}