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

mix.react('resources/js/app.js', 'public/js')
   .react('resources/js/frontend.js', 'public/js/main.js')
   .react('resources/js/backend.js', 'public/js/backend.js')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/frontend.scss', 'public/css/main.css')
   .sass('resources/sass/backend.scss', 'public/css/backend.css')
   .sass('resources/sass/sign-in.scss', 'public/css/sign-in.css');
