<?php

namespace App\Modules\V1\Charity\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\Charity;

/**
 * Class CharityRepository
 * @package App\Modules\V1\Charity\Repositories
 */
class CharityRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Charity::class;
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
