<?php

namespace App\Modules\V1\Order\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\Order;
use App\Modules\V1\Authentication\Services\AuthenticationService;

/**
 * Class OrderRepository
 * @package App\Modules\V1\Order\Repositories
 */
class OrderRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Order::class;
    }

    /**
     * Save a new entity in repository
     *
     * @throws ValidatorException
     *
     * @param array $attributes
     *
     * @return mixed
     */
    public function create(array $attributes)
    {
        $user = AuthenticationService::currentUser();

        array_merge($attributes, ['user_id' => $user->id]);
        $order = Order::create($attributes);
        OrderProduct::create(array_merge($attributes, ['order_id' => $order->id]));

        return $order;
    }

}
