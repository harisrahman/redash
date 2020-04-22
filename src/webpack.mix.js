const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('../public');

mix
/* Admin Assets */
	.react('resources/js/index.js', '../public/js/app.js')
	.extract(['react', 'react-dom', 'react-router-dom', 'jquery', 'bootstrap', 'popper.js', 'axios', 'datatables.net', 'dropzone', 'sweetalert'])
	.sass('resources/sass/admin.scss', '../public/css')

/*Common assets*/
	.sass('resources/sass/app.scss', '../public/css')

	.sourceMaps();

mix.browserSync('http://localhost/');

