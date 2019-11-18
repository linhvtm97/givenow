<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('{any}', function () {
    if (Request::is('management*')) {
        return view('backend');
    } elseif (Request::is('sign-in')) {
        return view('sign-in');
    } else {
        return view('frontend');
    }

})->where('any', '.*');