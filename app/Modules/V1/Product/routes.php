<?php

Route::group([
    'namespace' => 'App\Modules\V1\Product\Controllers',
], function () {
    Route::group(['prefix' => 'v1/products/'], function () {
        Route::get('/', 'ProductController@index')->name('Product.list');
        Route::post('/', 'ProductController@store')->name('Product.store');
        Route::get('/{id}', 'ProductController@show')->name('Product.show');
        Route::put('/{id}', 'ProductController@update')->name('Product.update');
        Route::delete('/{id}', 'ProductController@destroy')->name('Product.delete');
    });
});
