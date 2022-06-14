<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Http\Requests\Admin\ProductRequest;

class CartController extends Controller
{
    protected $cart;

    public function __construct(Cart $cart)
    {
        $this->cart = $cart; 
    }
    
    public function index()
    {

        $view = View::make('admin.panel.cart.index')
                ->with('cart', $this->cart)
                ->with('products', $this->cart->where('active',1)->get());
                

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

       $view = View::make('admin.panel.cart.index')
        ->with('cart', $this->cart)
        ->renderSections();


        return response()->json([
            'form' => $view['form']
            
        ]);
    }

    public function store(CartRequest $request)
    {            
        

        $cart = $this->cart->updateOrCreate([
                'id' => request('id')],[
                'name' => request('name'),
                'title' => request('title'),
                'price' => request('price'),
                'category' => request('category'),
                'description' => request('description'),
                'features' => request('features'),
                'visible' => 1,
                'active' => 1,
        ]);
            
        $view = View::make('admin.panel.cart.index')
        ->with('products', $this->cart->where('active', 1)->get())
        ->with('cart', $cart)

        ->renderSections();       

        return response()->json([
            'table' => $view['table'],
            'form' => $view['form'],
            'id' => $cart->id,
        ]);
    }

    public function edit(Cart $cart)
    {
        
        $view = View::make('admin.panel.cart.index')
        ->with('cart', $cart)
        ->with('products', $this->cart->where('active', 1)->get());

        
        if(request()->ajax()) {

            $sections = $view->renderSections(); 
    
            return response()->json([
                'form' => $sections['form'],
            ]); 
        }
                
        return $view;
    }

    public function show(Cart $cart){

    }

    public function destroy(Cart $cart)
    {
        $cart->active = 0;
        $cart->save();

        $view = View::make('admin.panel.cart.index')
            ->with('cart', $this->cart)
            ->with('products', $this->cart->where('active', 1)->get())

            ->renderSections();
        
        return response()->json([
            'table' => $view['table'],
            'form' => $view['form']
        ]);
    }
}