@extends('front.layout.master')

@section('title')  Producto @endsection
@section('description') Pagina de venta de perros de raza @endsection
@section('keyworks') Originales , rentables @endsection

@section("content")

    @if($agent->isDesktop())
        @include('front.pages.producto.desktop.producto')
    @endif

    @if($agent->isMobile())
        @include('front.pages.producto.mobile.producto')
    @endif
    
@endsection    