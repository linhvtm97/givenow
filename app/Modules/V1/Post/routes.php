<?php

Route::group([
    'namespace' => 'App\Modules\V1\Post\Controllers',
], function () {
    Route::group(['prefix' => 'v1/posts/'], function () {
        Route::get('/', 'PostController@index')->name('Post.list');
        Route::post('/', 'PostController@store')->name('Post.store');
        Route::get('/{id}', 'PostController@show')->name('Post.show');
        Route::put('/{id}', 'PostController@update')->name('Post.update');
        Route::delete('/{id}', 'PostController@destroy')->name('Post.delete');
    });
});
