<?php

namespace App\Modules\V1\Cause\Services;

use App\Modules\V1\Cause\Repositories\CauseRepository;
use App\Modules\Service as BaseService;
use App\Shared\Traits\Updater;

class CauseService extends BaseService
{
    use Updater;
    /**
     * CauseService constructor.
     * @param CauseRepository $CauseRepository
     */
    public function __construct(CauseRepository $CauseRepository)
    {
        parent::__construct($CauseRepository);
    }
}
