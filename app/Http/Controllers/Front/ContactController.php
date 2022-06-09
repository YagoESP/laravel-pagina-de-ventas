<?php

namespace App\Http\Controllers\Front;


use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Http\Requests\Front\ContactRequest;
use Debugbar;

class ContactController extends Controller
{
    protected $contact;


    public function __construct(Contact $contact)
    {
        $this->contact = $contact; 
    }
    
    public function index()
    {
        $view = View::make('front.pages.contacto.index');

        return $view;
    }

    public function store(ContactRequest $request)
    {            
        
        $contact = $this->contact->create([
                'name' => request('name'),
                'surname' => request('surname'),
                'email' => request('email'),
                'cellphone' => request('telephone'),
                'message' => request('message'),
                'active' => 1,
        ]);
            
        $view = View::make('front.pages.contacto.index')->renderSections();        

        return response()->json([
            'content' => $view['content'],
        ]);
    }

    public function show(Contact $contact)
    {
        $view = View::make('front.pages.contacto.index')
        ->with('contact', $contact);

        if(request()->ajax()) {
            
            $sections = $view->renderSections(); 
    
            return response()->json([
                'content' => $sections['content'],
            ]); 
        }

        return $view;
    
    }
}