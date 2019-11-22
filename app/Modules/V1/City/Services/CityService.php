<?php

namespace App\Modules\V1\City\Services;

use App\Modules\V1\City\Repositories\CityRepository;
use App\Modules\Service as BaseService;
use App\Shared\Traits\Updater;

class CityService extends BaseService
{
    use Updater;
    /**
     * CityService constructor.
     * @param CityRepository $cityRepository
     */
    public function __construct(CityRepository $cityRepository)
    {
        parent::__construct($cityRepository);
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
