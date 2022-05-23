@extends('front.layout.master')

@section('title') Faqs @endsection
@section('description') Pagina de venta de perros de raza @endsection
@section('keyworks') Originales , rentables @endsection

@section("content")

    @if($agent->isDesktop())
        @include('front.components.desktop.title' , ['title' => "FAQS"])
        @include('front.pages.faqs.desktop.faqs')
    @endif

    @if($agent->isMobile())
        @include('front.pages.faqs.mobile.faqs')
    @endif
    
@endsection    