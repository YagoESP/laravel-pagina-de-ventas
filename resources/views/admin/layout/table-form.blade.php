@extends('admin.layout.master')

@section('content')

    <div class="admin-panel">
        @include("admin.components.desktop.filters")
        @include('front.components.desktop.title' , ['title' => "PANEL DE ADMINISTRACION"])
        <div class="desktop-two-columns-aside">
            <div class="column-aside">
                <div class="table">
                    @yield('table')
                </div>
            </div>
            <div class="column-main">
                <div class="form">
                    @yield('form')
                </div>
            </div>
        </div>
    </div>

@endsection