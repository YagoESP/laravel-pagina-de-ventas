<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin/faqs', function () {
    return view('admin.panel.faqs.index');
});

Route::get('/', function () {
    return view('front.pages.casa.index');
});

Route::get('/caja', function () {
    return view('front.pages.caja.index');
});

Route::get('/carrito', function () {
    return view('front.pages.carrito.index');
});

Route::get('/contacto', function () {
    return view('front.pages.contacto.index');
});

Route::get('/faqs', function () {
    return view('front.pages.faqs.index');
});

Route::get('/producto', function () {
    return view('front.pages.producto.index');
});

Route::get('/tienda', function () {
    return view('front.pages.tienda.index');
});

