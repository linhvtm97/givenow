<?php

namespace App\Modules\V1\Order\Services;

use App\Modules\V1\Order\Repositories\OrderRepository;
use App\Modules\Service as BaseService;
use App\Shared\Traits\Updater;

class OrderService extends BaseService
{
    use Updater;
    /**
     * OrderService constructor.
     * @param OrderRepository $orderRepository
     */
    public function __construct(OrderRepository $orderRepository)
    {
        parent::__construct($orderRepository);
    }
}
