<?php

Route::group([
    'namespace' => 'App\Modules\V1\User\Controllers',
], function () {
    Route::group(['prefix' => 'v1/users/'], function () {
        Route::get('/', 'UserController@index')->name('User.list');
        Route::post('/', 'UserController@store')->name('User.store');
        Route::get('/{id}', 'UserController@show')->name('User.show');
        Route::put('/{id}', 'UserController@update')->name('User.update');
        Route::delete('/{id}', 'UserController@destroy')->name('User.delete');
    });
});
