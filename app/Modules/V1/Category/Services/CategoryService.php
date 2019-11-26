<?php

namespace App\Modules\V1\Category\Services;

use App\Modules\V1\Category\Repositories\CategoryRepository;
use App\Modules\Service as BaseService;
use App\Shared\Traits\Updater;

class CategoryService extends BaseService
{
    use Updater;
    /**
     * CategoryService constructor.
     * @param CategoryRepository $CategoryRepository
     */
    public function __construct(CategoryRepository $CategoryRepository)
    {
        parent::__construct($CategoryRepository);
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
        return $this->repository->with('products')->paginate();
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
        return $this->repository->with('products')->find($uid);
    }
}
