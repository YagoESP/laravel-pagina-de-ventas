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

Route::group(['prefix' => 'admin'], function () {

    /*
    Dentro de resouruce( 'faqs') "faqs" significa lo que tendremos que escribir en la url para entrar en la página, 
    en este caso tendremos que escribir www.dev-asociacion-mascotas.com/admin/faqs
    Tendremos que decir también que controlador queremos cargar, en este caso el controlador que estamos cargando se llama
    "FaqController" y se encuentra dentro de la carpeta /app/http/controllers/admin
    
    En Internet una web es enviada desde el servidor al usuario a través de un protocolo llamado 
    HTTP/S. La información enviada a través de este protocolo llega a los puertos 80 (no-seguro) o al 443 (seguro). Cuando instalamos
    en el servidor un programa para convertirlo en un servidor web (por ejemplo, Nginx o Apache) estos se van a responsabilizar de
    gestionar esos puertos para detectar si hay llamadas o hay que hacer envios de datos. 
    Las llamadas que hacemos por HTTP tiene principalmente 4 métodos (verbos) que son:
    - GET: Esto significa que hacemos una llamada que va a pedir datos al servidor. 
    - POST: Esto significa que hacemos una llamada que va a enviar datos al servidor.
    - PUT: Esto signifca que hacemos una llamada que va a actualizar datos en el servidor.
    - DELETE: Esto significa que hacemos una llamada que va a eliminar datos en el servidor. 
    Estos métodos HTTP se corresponden con los métodos que vamos a tener en el controlador:
    - index, create, edit show  serán llamadas de tipo GET
        -- En index pediremos todos los datos de una tabla de la base de datos
        -- En create pediremos que nos limpie el formulario.
        -- En edit o show pediremos que nos pase sólo un registro de la tabla (por una id)
    - store será una llamada de tipo POST
        -- En store guardaremos los datos que hayamos añadido en el formulario, nos servirá tanto para guardar datos nuevos como actualizarlos
    - destroy será una llamada de tipo DELETE
        -- En destroy lo que haremos es borrar un dato de la base de datos 
    */

    Route::resource('faqs', 'App\Http\Controllers\Admin\FaqController', [
            'parameters' => [
            'faqs' => 'faq', 
        ],
        'names' => [
            'index' => 'faqs',
            'create' => 'faqs_create',
            'edit' => 'faqs_edit',
            'store' => 'faqs_store',
            'destroy' => 'faqs_destroy',
            'show' => 'faqs_show',
            ]
    ]);

    Route::resource('users', 'App\Http\Controllers\Admin\UserController', [
        'parameters' => [
        'users' => 'user', 
    ],
    'names' => [
        'index' => 'users',
        'create' => 'users_create',
        'edit' => 'users_edit',
        'store' => 'users_store',
        'destroy' => 'users_destroy',
        'show' => 'users_show', 
        ]
    ]);

    Route::resource('products/categories', 'App\Http\Controllers\Admin\ProductCategoryController', [
        'parameters' => [
        'categories' => 'product_category', 
        ],
    'names' => [
        'index' => 'products_categories',
        'create' => 'products_categories_create',
        'edit' => 'products_categories_edit',
        'store' => 'products_categories_store',
        'destroy' => 'products_categories_destroy',
        'show' => 'products_categories_show',
        ]
    ]);


    Route::resource('products', 'App\Http\Controllers\Admin\ProductController', [
            'parameters' => [
            'products' => 'product', 
        ],
        'names' => [
            'index' => 'products',
            'create' => 'products_create',
            'edit' => 'products_edit',
            'store' => 'products_store',
            'destroy' => 'products_destroy',
            'show' => 'products_show',
            ]
    ]);

    Route::resource('contact_forms', 'App\Http\Controllers\Front\ContactController', [
        'parameters' => [
        'contact_forms' => 'contact_form', 
    ],
    'names' => [
        'index' => 'contact_forms',
        'create' => 'contact_forms_create',
        'edit' => 'contact_forms_edit',
        'store' => 'contact_forms_store',
        'destroy' => 'contact_forms_destroy',
        'show' => 'contact_forms_show',
        ]
    ]);

    Route::resource('checkouts', 'App\Http\Controllers\Admin\CheckoutController', [
        'parameters' => [
        'checkouts' => 'checkout', 
    ],
    'names' => [
        'index' => 'checkouts',
        'create' => 'checkouts_create',
        'edit' => 'checkouts_edit',
        'store' => 'checkouts_store',
        'destroy' => 'checkouts_destroy',
        'show' => 'checkouts_show',
        ]
    ]);

    Route::resource('contacts', 'App\Http\Controllers\Front\ContactController', [
        'parameters' => [
        'contacts' => 'contact', 
    ],
    'names' => [
        'index' => 'contacts',
        'create' => 'contacts_create',
        'edit' => 'contacts_edit',
        'store' => 'contacts_store',
        'destroy' => 'contacts_destroy',
        'show' => 'contacts_show',
        ]
    ]);

    Route::resource('sells', 'App\Http\Controllers\Admin\SellController', [
        'parameters' => [
        'sells' => 'sell', 
    ],
    'names' => [
        'index' => 'sells',
        'create' => 'sells_create',
        'edit' => 'sells_edit',
        'store' => 'sells_store',
        'destroy' => 'sells_destroy',
        'show' => 'sells_show',
        ]
    ]);

});

Route::get('/','App\Http\Controllers\Front\HomeController@index')->name('front_home');
Route::get('/','App\Http\Controllers\Front\HomeController@show')->name('front_home');

Route::post('contacto','App\Http\Controllers\Front\ContactController@store')->name('front_contact_form');
Route::post('contacto/[contact]','App\Http\Controllers\Front\ContactController@show')->name('front_contact_show');
Route::get('contacto','App\Http\Controllers\Front\ContactController@index')->name('front_contact');
Route::get('contacto','App\Http\Controllers\Front\ContactController@show')->name('front_contact');

Route::get('faqs','App\Http\Controllers\Front\FaqController@show')->name('front_faqs');

Route::get('tienda','App\Http\Controllers\Front\ProductController@shop')->name('front_products');
Route::get('tienda/{product}','App\Http\Controllers\Front\ProductController@show')->name('front_product_show');
Route::get('tienda/categoria/{product_category}','App\Http\Controllers\Front\ProductCategoryController@show')->name('front_product_category');
Route::get('tienda/filtro/{filter}','App\Http\Controllers\Front\ProductController@filter')->name('front_product_filter');

Route::get('caja','App\Http\Controllers\Front\CheckoutController@show')->name('front_checkout');
Route::get('caja/{fingerprint}','App\Http\Controllers\Front\CheckoutController@index')->name('front_checkout');
Route::post('caja/[checkout]','App\Http\Controllers\Front\CheckoutController@store')->name('front_checkout_form');

Route::get('carrito','App\Http\Controllers\Front\CartController@back')->name('front_cart_back');
Route::get('carrito','App\Http\Controllers\Front\CartController@show')->name('front_cart_show');
Route::post('carrito','App\Http\Controllers\Front\CartController@store')->name('front_cart_store');
Route::get('carrito/minus/{price_id}/{fingerprint}','App\Http\Controllers\Front\CartController@minus')->name('front_cart_minus');
Route::get('carrito/plus/{price_id}/{fingerprint}','App\Http\Controllers\Front\CartController@plus')->name('front_cart_plus');