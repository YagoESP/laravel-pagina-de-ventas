@extends('front.layout.master')

@section('title') Caja @endsection
@section('description') Pagina de venta de perros de raza @endsection
@section('keyworks') Originales , rentables @endsection

@section("content")

    @if($agent->isDesktop())
        @include('front.components.desktop.title' , ['title' => "FINALIZAR COMPRA"])
        @include('front.pages.caja.desktop.caja')
    @endif

    @if($agent->isMobile())
        @include('front.pages.caja.mobile.caja')
    @endif
    
@endsection    