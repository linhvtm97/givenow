<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'cors'
], function () {
    // require routes of modules
    require base_path("app/Modules/V1/Authentication/routes.php");
    require base_path("app/Modules/V1/Event/routes.php");
    require base_path("app/Modules/V1/Product/routes.php");
    require base_path("app/Modules/V1/Cause/routes.php");
    require base_path("app/Modules/V1/Category/routes.php");
    require base_path("app/Modules/V1/Charity/routes.php");
    require base_path("app/Modules/V1/Post/routes.php");
    require base_path("app/Modules/V1/Order/routes.php");
    require base_path("app/Modules/V1/City/routes.php");
});
