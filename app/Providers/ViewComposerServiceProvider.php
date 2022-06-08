<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ViewComposerServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // La primera linea dice en que vista quiero tener disponible
        // el conenido defenido en la segunda linea

        // En la segunda linea digo que archivo va a hacer el que haga la
        // consulta
        
        view()->composer(['admin.panel.product.index'], 
        'App\Http\ViewComposers\Admin\ProductCategories');
        
        view()->composer(['admin.pages.tienda.index'], 
        'App\Http\ViewComposers\Front\ProductCategories');
    }
}
