<?php

namespace App\Modules\V1\Product\Services;

use App\Modules\V1\Product\Repositories\ProductRepository;
use App\Modules\Service as BaseService;
use App\Shared\Traits\Updater;

class ProductService extends BaseService
{
    use Updater;

    /**
     * ProductService constructor.
     * @param ProductRepository $ProductRepository
     */
    public function __construct(ProductRepository $productRepository)
    {
        parent::__construct($productRepository);
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
        return $this->repository->with('category')->find($uid);
    }
}
