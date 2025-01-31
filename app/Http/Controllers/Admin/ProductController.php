<?php

namespace App\Http\Controllers\Admin;

// Los use equivalen a los import de javascript, es una forma de traer
// otros archivos que contienen código a este archivo
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Price;
use App\Http\Requests\Admin\ProductRequest;
use Debugbar;
// Podemos identificar que estamos ante un objeto por la palabra "class"
// el nombre objeto es "FaqController", el nombre del objeto tiene que
// coincidir con el nombre del archivo.

// extends lo que está afirmando es que el objeto "FaqController" está
// heredando todas las propiedades (variables) y métodos del objeto "Controller"
class ProductController extends Controller
{
    protected $product;

    public function __construct(Product $product, Price $price)
    {
        $this->product = $product;
        $this->price = $price;
    
    }

    public function index()
    {

        $view = View::make('admin.panel.product.index')
                ->with('product', $this->product)
                ->with('products', $this->product->where('active',1)->get());
                

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

       $view = View::make('admin.panel.product.index')
        ->with('product', $this->product)
        ->renderSections();


        return response()->json([
            'form' => $view['form']
            
        ]);
    }

    public function store(ProductRequest $request)
    {            
        

        $product = $this->product->updateOrCreate([
                'id' => request('id')],[
                'name' => request('name'),
                'title' => request('title'),
                'category_id' => request('category_id'),
                'description' => request('description'),
                'features' => request('features'),
                'visible' => 1,
                'active' => 1,
        ]);

        $this->price->where('product_id', $product->id)->update(
            ['valid' => 0]
        );
        
        $this->price->create([
            'product_id' => $product->id,
            'base_price' => request('base_price'),
            'tax_id' => request('tax_id'),
            'valid' => 1,
            'active' => 1,
        ]);

        $view = View::make('admin.panel.product.index')
        ->with('products', $this->product->where('active', 1)->get())
        ->with('product', $product)

        ->renderSections();       

        return response()->json([
            'table' => $view['table'],
            'form' => $view['form'],
            'id' => $product->id,
        ]);
    }

    public function edit(Product $product)
    {
        
        $view = View::make('admin.panel.product.index')
        ->with('product', $product)
        ->with('products', $this->product->where('active', 1)->get());

        
        if(request()->ajax()) {

            $sections = $view->renderSections(); 
    
            return response()->json([
                'form' => $sections['form'],
            ]); 
        }
                
        return $view;
    }

    public function destroy(Product $product)
    {
        $product->active = 0;
        $product->save();

        $view = View::make('admin.panel.product.index')

            ->with('product', $this->product)
            ->with('products', $this->product->where('active', 1)->get())

            ->renderSections();
        
        return response()->json([
            'table' => $view['table'],
            'form' => $view['form']
        ]);
    }
}