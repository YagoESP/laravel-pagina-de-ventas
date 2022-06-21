<?php
namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Checkout;

class CheckoutController extends Controller
{
    protected $checkout;

    public function __construct(Checkout $checkout)
    {
        $this->checkout = $checkout;
    }.

    public function index()
    {
          return view('front.pages.caja.index');
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
}                        
                               