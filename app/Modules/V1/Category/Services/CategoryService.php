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
}
