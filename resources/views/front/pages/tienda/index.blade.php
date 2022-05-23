@extends('front.layout.master')

@section('title') Tienda @endsection
@section('description') Pagina de venta de perros de raza @endsection
@section('keyworks') Originales , rentables @endsection

@section("content")

    @if($agent->isDesktop())
        @include('front.pages.tienda.desktop.tienda')
    @endif

    @if($agent->isMobile())
        @include('front.pages.tienda.mobile.tienda')
    @endif
    
@endsection    