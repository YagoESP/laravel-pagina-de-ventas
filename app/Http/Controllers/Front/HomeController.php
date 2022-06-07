<?php
namespace App\Http\Controllers\Front;
use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Home;

class HomeController extends Controller
{
    protected $home;

    public function __construct(Home $home)
    {
        $this->home = $home;

    }

    public function index()
    {
        $view = View::make('front.pages.casa.index')
        ->with('home', $this->home->where('active', 1)->where('visible',1)->get())
        
        return $view;
    }

    public function show(Home $home)
    {
        $view = View::make('front.pages.casa.index')
        ->with('home', $home);

        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    
    }
    
}                        
                               