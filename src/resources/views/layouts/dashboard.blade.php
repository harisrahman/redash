<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Favicon-->
	<link rel="icon" href="{{ asset("img/favicon.ico") }}" type="image/x-icon">

	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<title>@yield("page_title", "Laravel React Dashboard")</title>

	<!-- Styles -->
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
	<link href="{{ asset('css/admin.css') }}" rel="stylesheet">
</head>
<body class="fixed-nav sticky-footer">
	<noscript>You need to enable JavaScript to run this app.</noscript>
	<div id="root"></div>

	<!-- Scripts -->
	<script>
		var csrf_token = '{{ csrf_token() }}';
	</script>
	<script src="{{ asset("js/manifest.js") }}"></script>
    <script src="{{ asset("js/vendor.js") }}"></script>
	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
