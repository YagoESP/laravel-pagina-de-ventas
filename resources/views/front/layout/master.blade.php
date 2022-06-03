<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="https://www.youtube.com/s/desktop/12d6b690/img/favicon.ico">
        <meta name="csrf-token" content="{{ csrf_token() }}">

		<title>@yield('title')</title>
		<meta name="description" content="@yield('description')">
        <meta name="keywords" 	 content="@yield('keywords')">

        @include('front.layout.partials.styles')
        
    </head>
    
    <body>

        @include('front.layout.partials.header')

        <main>
            @yield('content')
        </main>

        @include('front.layout.partials.footer')
        @include('front.layout.partials.js')

    </body>
</html>