<?php
namespace App\Http\Controllers\Front;
use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ShoppingcartController extends Controller
{
    public function index()
    {
        return view('front.pages.carrito.index');
    }
}                        
                               