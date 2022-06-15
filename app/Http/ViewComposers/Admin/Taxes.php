<?php

namespace App\Http\ViewComposers\Admin;

use Illuminate\View\View;
use App\Models\Tax;
use Debugbar;

class Taxes
{
    static $composed;

    public function __construct(Tax $tax)
    {
        $this->tax = $tax;
    }

    public function compose(View $view)
    {

        if(static::$composed)
        {
            return $view->with('taxes', static::$composed);
        }

        static::$composed = $this->tax->where('valid', 1)->where('active', 1)->orderBy('type', 'asc')->get();

        $view->with('taxes', static::$composed);

    }
}