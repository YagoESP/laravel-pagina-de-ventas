@extends('front.layout.master')

@section('title') Carrito @endsection
@section('description') Pagina de venta de perros de raza @endsection
@section('keyworks') Originales , rentables @endsection

@section("content")

    @if($agent->isDesktop())
    @include('front.components.desktop.title' , ['title' => "CARRITO DE LA COMPRA"])
        @include('front.pages.carrito.desktop.carrito')
    @endif

    @if($agent->isMobile())
        @include('front.pages.carrito.mobile.carrito')
    @endif
    
@endsection    