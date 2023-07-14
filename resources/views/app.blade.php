<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Diskon Servis">
    <meta name="keyword" content="Bengkel Servis">

    <link rel="apple-touch-icon" sizes="76x76" href="{{ url('img/icon/oto.png') }}">
    <link rel="icon" href="{{ url('img/icon/oto.png') }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ URL::to('img/icon/oto.png') }}" />

    <title inertia>{{ config('app.name', 'Oscar') }}</title>

    <!-- Scripts -->
    @routes
    @vite('resources/js/app.js')
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
