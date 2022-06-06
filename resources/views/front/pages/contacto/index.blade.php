@extends('front.layout.master')

@section('title') Contacto @endsection
@section('description') Pagina de venta de perros de raza @endsection
@section('keyworks') Originales , rentables @endsection


@section("content")

    @if($agent->isDesktop())
        @include('front.components.desktop.title' , ['title' => "CONTACTO"])
        @include('front.pages.contacto.desktop.contacto')
    @endif

    @if($agent->isMobile())
        @include('front.pages.contacto.mobile.contacto')
    @endif
    
@endsection    