<?php

namespace App\Http\Controllers\Admin;


use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\ContactForm;
use App\Http\Requests\Admin\ContactFormRequest;
use Debugbar;

class ContactFormController extends Controller
{


    protected $contactform;

   

    public function __construct(ContactForm $contactform)
    {
        $this->user = $contactform; 
    }
    
    public function index()
    {

       
        $view = View::make('front.panel.contactform.index')
                ->with('contactform', $this->contactform)
                ->with('contactforms', $this->contactform->where('active',1)->get());

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


       $view = View::make('front.panel.contactform.index')
        ->with('contactforms', $this->faq)
        ->renderSections();



        return response()->json([
            'form' => $view['form']
            
        ]);
    }

    public function store(ContactFormRequest $request)
    {            
        

        $user = $this->user->updateOrCreate([
                'id' => request('id')],[
                'name' => request('name'),
                'title' => request('title'),
                'password' => request('password'),
                'visible' => 1,
                'active' => 1,
        ]);
            
        $view = View::make('front.panel.contactform.index')
        ->with('contactforms', $this->$contactform->where('active', 1)->get())
        ->with('contactform', $contactform)
        ->renderSections();        

        return response()->json([
            'table' => $view['table'],
            'form' => $view['form'],
            'id' => $user->id,
        ]);
    }

    public function edit(ContactForm $contactform)
    {
        $view = View::make('front.panel.contactform.index')
        ->with('contactform', $contactform)
        ->with('contactforms', $this->contactform->where('active', 1)->get());   
        
        if(request()->ajax()) {

            $sections = $view->renderSections(); 
    
            return response()->json([
                'form' => $sections['form'],
            ]); 
        }
                
        return $view;
    }

    public function show(ContactForm $contactform){

    }

    public function destroy(ContactForm $contactform)
    {
        $contactform->active = 0;
        $contactform->save();

        $view = View::make('front.panel.contactform.index')
            ->with('contactform', $this->user)
            ->with('contactforms', $this->user->where('active', 1)->get())
            ->renderSections();
        
        return response()->json([
            'table' => $view['table'],
            'form' => $view['form']
        ]);
    }
}