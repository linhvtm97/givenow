<?php

namespace App\Modules\V1\City\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\City;

/**
 * Class CityRepository
 * @package App\Modules\V1\City\Repositories
 */
class CityRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return City::class;
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
        return $this->model->querySearch()->paginate();
    }
}
