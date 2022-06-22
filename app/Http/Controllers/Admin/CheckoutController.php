<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Checkout;
use App\Http\Requests\Admin\CheckoutRequest;
use Debugbar;

class CheckoutController extends Controller
{
    protected $checkout;


    public function __construct(Checkout $checkout)
    {
        $this->checkout = $checkout; 
    }
    
    public function index()
    {

        $view = View::make('admin.panel.checkout.index')
                ->with('checkout', $this->checkout)
                ->with('checkouts', $this->checkout->where('active',1)->get());

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

       $view = View::make('admin.panel.checkout.index')
        ->with('checkouts', $this->checkout)
        ->renderSections();

        return response()->json([
            'form' => $view['form']
            
        ]);
    }

    public function store(CheckoutRequest $request)
    {           
        $checkout = $this->checkout->updateOrCreate([
                'id' => request('id')],[
                'name' => request('name'),
                'surname' => request('surname'),
                'telephone' => request('telephone'),
                'email' => request('email'),
                'city' => request('city'),
                'cp' => request('cp'),
                'adress' =>request('address'),
                'visible' => 1,
                'active' => 1,
        ]);
            
        $view = View::make('admin.panel.checkout.index')
        ->with('checkouts', $this->checkout->where('active', 1)->get())
        ->with('checkout', $checkout)
        ->renderSections();        

        return response()->json([
            'table' => $view['table'],
            'form' => $view['form'],
            'id' => $checkout->id,
        ]);
    }

    public function edit(Checkout $checkout)
    {
        $view = View::make('admin.panel.checkout.index')
        ->with('checkout', $checkout)
        ->with('checkouts', $this->checkout->where('active', 1)->get());   
        
        if(request()->ajax()) {

            $sections = $view->renderSections(); 
    
            return response()->json([
                'form' => $sections['form'],
            ]); 
        }
                
        return $view;
    }

    public function show(Checkout $checkout){

    }

    public function destroy(Checkout $checkout)
    {
        $checkout->active = 0;
        $checkout->save();

        $view = View::make('admin.panel.checkout.index')
            ->with('checkout', $this->checkout)
            ->with('checkouts', $this->checkout->where('active', 1)->get())
            ->renderSections();
        
        return response()->json([
            'table' => $view['table'],
            'form' => $view['form']
        ]);
    }
}