<?php

Route::group([
    'namespace' => 'App\Modules\V1\Order\Controllers',
], function () {
    Route::group(['prefix' => 'v1/orders/'], function () {
        Route::get('/', 'OrderController@index')->name('Order.list');
        Route::post('/', 'OrderController@store')->name('Order.store');
        Route::get('/{id}', 'OrderController@show')->name('Order.show');
        Route::put('/{id}', 'OrderController@update')->name('Order.update');
        Route::delete('/{id}', 'OrderController@destroy')->name('Order.delete');
    });
});
