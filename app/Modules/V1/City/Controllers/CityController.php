<?php

namespace App\Modules\V1\City\Controllers;

use App\Modules\V1\City\Services\CityService;
use App\Modules\Controller as BaseController;
use App\Modules\Request;

class CityController extends BaseController
{
    /**
     * CityController constructor.
     *
     * @param CityService $cityService CityService
     */
    public function __construct(CityService $cityService)
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
        $this->service = $cityService;
    }
}
