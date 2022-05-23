@extends('front.layout.master')

@section('title') Inicio @endsection
@section('description') Pagina de venta de perros de raza @endsection
@section('keyworks') Originales , rentables @endsection



@section("content")

    @if($agent->isDesktop())
        @include('front.pages.casa.desktop.casa')
    @endif

    @if($agent->isMobile())
        @include('front.pages.casa.mobile.casa')
    @endif
    
@endsection    