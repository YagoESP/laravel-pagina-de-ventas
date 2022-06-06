<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use App\Http\Requests\Admin\ProductCategoryRequest;
use Debugbar;

class ProductCategoryController extends Controller
{
    protected $productcategory;
    
    public function __construct(ProductCategory $productcategory)
    {
        $this->productcategory = $productcategory; 
    }
    
    public function index()
    {   
        $view = View::make('admin.panel.productcategory.index')
                ->with('productcategory', $this->productcategory)
                ->with('productscategories', $this->productcategory->where('active',1)->get());


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

       $view = View::make('admin.panel.productcategory.index')
        ->with('productcategories', $this->productcategory)
        ->renderSections();

        return response()->json([
            'form' => $view['form']
            
        ]);
    }

    public function store(ProductCategoryRequest $request)
    {            
        

        $productcategory = $this->productcategory->updateOrCreate([
                'id' => request('id')],[
                'name' => request('name'),
                'title' => request('title'),
                'category' => request('category'),
                'visible' => 1,
                'active' => 1,
        ]);
            
        $view = View::make('admin.panel.productcategory.index')
        ->with('productscategories', $this->productcategory->where('active', 1)->get())
        ->with('productcategory', $productcategory)
        ->renderSections();        

        return response()->json([
            'table' => $view['table'],
            'form' => $view['form'],
            'id' => $productcategory->id,
        ]);
    }

    public function edit(ProductCategory $productcategory)
    {
        $view = View::make('admin.panel.productcategory.index')
        ->with('productcategory', $productcategory)
        ->with('productscategories', $this->productcategory->where('active', 1)->get());   
        
        if(request()->ajax()) {

            $sections = $view->renderSections(); 
    
            return response()->json([
                'form' => $sections['form'],
            ]); 
        }
                
        return $view;
    }

    public function show(ProductCategory $productcategory){

    }

    public function destroy(ProductCategory $productcategory)
    {
        $productcategory->active = 0;
        $productcategory->save();

        $view = View::make('admin.panel.productcategory.index')
            ->with('productcategory', $this->productcategory)
            ->with('productscategories', $this->productcategory->where('active', 1)->get())
            ->renderSections();
        
        return response()->json([
            'table' => $view['table'],
            'form' => $view['form']
        ]);
    }
}