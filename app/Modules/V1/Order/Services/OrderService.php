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

    /**
     * Get object by uid
     *
     * @param string $uid uid of object
     * @param mixed  $data Data
     *
     * @return mixed
     */
    public function find(string $uid)
    {
        return $this->repository->with(['products', 'user', 'event'])->find($uid);
    }


    /**
     * Get All object
     *
     * @param array|null $data data
     *
     * @return \Model\Eloquent\Builder
     */
    public function getAll(array $data = null)
    {
        return $this->repository->getAll();
    }
}
