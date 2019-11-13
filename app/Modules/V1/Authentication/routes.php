<?php

Route::group([
    'namespace' => 'App\Modules\V1\Authentication\Controllers',
], function () {
    Route::group(['prefix' => 'v1/auth/'], function () {
        Route::post('/login', 'AuthenticateController@login')->name('login');
        Route::post('/register', 'AuthenticateController@register')->name('register');
        Route::middleware('jwt.auth')->post('/logout', 'AuthenticateController@logout')->name('logout');
        Route::middleware('jwt.auth')->get('/me', 'AuthenticateController@getCurrentUser')->name('auth.me');
        Route::middleware('jwt.refresh')->get('/token/refresh', 'AuthenticateController@refresh')->name('token.refresh');
    });
});
