<?php

namespace App\Providers;

use View;
use Jenssegers\Agent\Agent;
use Illuminate\Support\ServiceProvider;

//Hemos insertado el use view y el use agent

class AgentServiceProvider extends ServiceProvider
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
        $agent = new Agent();

        View::share('agent', $agent);
    }
}
