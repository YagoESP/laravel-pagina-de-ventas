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
        

        $sell = $this->sell->updateOrCreate([
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