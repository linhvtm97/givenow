<?php

namespace App\Modules\V1\Event\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\Event;
use DB;
use App\Models\V1\User;
use App\Modules\V1\Authentication\Services\AuthenticationService;

/**
 * Class EventRepository
 * @package App\Modules\V1\Event\Repositories
 */
class EventRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Event::class;
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
        $user = AuthenticationService::currentUser();
        if($user && $user->role == User::ROLE_CHARITY) {
            return $this->model->where('user_id', $user->id)->with(['cause', 'user', 'city'])->querySearch()->queryOrder()->queryFilter()->paginate();
        }
        return $this->model->with(['cause', 'user', 'city'])->querySearch()->queryOrder()->queryFilter()->paginate();
    }
}
