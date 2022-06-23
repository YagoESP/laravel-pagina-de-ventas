<?php
namespace App\Http\Controllers\Front;
use Illuminate\Support\Facades\View;
use App\Models\Faq;
use App\Http\Controllers\Controller;

class FaqController extends Controller
{

    protected $faq;

    public function __construct(Faq $faq)
    {
        $this->faq = $faq;
    }

    public function index()
    {
        $view = View::make('front.pages.faqs.index')
        ->with('faqs', $this->faq->where('active', 1)->get());
        
        return $view;
    }

    public function show(Faq $faq)
    {
        $view = View::make('front.pages.faqs.index')
        ->with('faqs', $this->faq->where('active', 1)->get());

        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    
    }
}                        
                               