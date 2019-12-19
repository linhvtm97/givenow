<?php

namespace App\Modules\V1\Product\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\Product;
/**
 * Class ProductRepository
 * @package App\Modules\V1\Product\Repositories
 */
class ProductRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Product::class;
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
        return $this->model->with(['category'])->querySearch()->queryOrder()->paginate();
    }
}
