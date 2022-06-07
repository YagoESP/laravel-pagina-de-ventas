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

       
        $view = View::make('admin.panel.contact.index')
                ->with('contact', $this->contact)
                ->with('contacts', $this->contact->where('active',1)->get());

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


       $view = View::make('admin.panel.contact.index')
        ->with('contacts', $this->contact)
        ->renderSections();



        return response()->json([
            'form' => $view['form']
            
        ]);
    }

    public function store(ContactRequest $request)
    {            
        

        $user = $this->user->updateOrCreate([
                'id' => request('id')],[
                'name' => request('name'),
                'title' => request('title'),
                'password' => request('password'),
                'telephone' => request('telephone'),
                'visible' => 1,
                'active' => 1,
        ]);
            
        $view = View::make('admin.panel.contact.index')
        ->with('contacts', $this->$contact->where('active', 1)->get())
        ->with('contact', $contact)
        ->renderSections();        

        return response()->json([
            'table' => $view['table'],
            'form' => $view['form'],
            'id' => $contact->id,
        ]);
    }

    public function edit(Contact $contact)
    {
        $view = View::make('admin.panel.contact.index')
        ->with('contact', $contact)
        ->with('contacts', $this->contact->where('active', 1)->get());   
        
        if(request()->ajax()) {

            $sections = $view->renderSections(); 
    
            return response()->json([
                'form' => $sections['form'],
            ]); 
        }
                
        return $view;
    }

    public function show(Contact $contact){

    }

    public function destroy(Contact $contact)
    {
        $contact->active = 0;
        $contact->save();

        $view = View::make('admin.panel.contact.index')
            ->with('contact', $this->contact)
            ->with('contacts', $this->contact->where('active', 1)->get())
            ->renderSections();
        
        return response()->json([
            'table' => $view['table'],
            'form' => $view['form']
        ]);
    }
}