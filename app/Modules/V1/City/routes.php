<?php

Route::group([
    'namespace' => 'App\Modules\V1\City\Controllers',
], function () {
    Route::group(['prefix' => 'v1/cities/'], function () {
        Route::get('/', 'CityController@index')->name('City.list');
        Route::post('/', 'CityController@store')->name('City.store');
        Route::get('/{id}', 'CityController@show')->name('City.show');
        Route::put('/{id}', 'CityController@update')->name('City.update');
        Route::delete('/{id}', 'CityController@destroy')->name('City.delete');
    });
});
