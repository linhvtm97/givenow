<?php

namespace App\Modules\V1\Order\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\Order;
use App\Models\V1\OrderProduct;
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

        array_merge($attributes, [
            'user_id' => $user->id,
        ]);
        $order = Order::create($attributes);
        $products = $attributes['products'];
       foreach($products as $product) {
           $product = explode('.', $product);
           $data = array(
               "product_id" => $product[0],
               "quantity" => $product[1],
               "money" => $product[2],
               'order_id' => $order->id
           );
            $record = OrderProduct::create($data);
       }

        return Order::with(['products', 'user', 'event'])->where('id',$order->id)->firstOrFail();
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
        return $this->model->with(['products', 'user', 'event'])->querySearch()->queryOrder()->queryFilter()->paginate();
    }

}
