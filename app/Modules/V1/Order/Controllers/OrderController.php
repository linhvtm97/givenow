<?php

namespace App\Modules\V1\Order\Controllers;

use App\Modules\V1\Order\Services\OrderService;
use App\Modules\Controller as BaseController;
use App\Modules\Request;

class OrderController extends BaseController
{
    /**
     * OrderController constructor.
     *
     * @param OrderService $orderService OrderService
     */
    public function __construct(OrderService $orderService)
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
        $this->service = $orderService;
    }
}
