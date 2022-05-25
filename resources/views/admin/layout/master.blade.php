<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="https://www.youtube.com/s/desktop/12d6b690/img/favicon.ico">

		<title>@yield('title')</title>
		<meta name="description" content="@yield('description')">
        <meta name="keywords" 	 content="@yield('keywords')">

        @include('admin.layout.partials.styles')
        
    </head>
    
    <body>

        @include('admin.layout.partials.header')

        <main>
            @yield('content')
        </main>

        @include('admin.layout.partials.footer')
        @include('admin.layout.partials.js')

    </body>
</html>