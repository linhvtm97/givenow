<?php

namespace App\Modules\V1\User\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\User;
use App\Modules\V1\Authentication\Services\AuthenticationService;

/**
 * Class UserRepository
 * @package App\Modules\V1\User\Repositories
 */
class UserRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }

    public function createRelation($data) {

    }
    public function updateRelation($data) {

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

        return $this->model->where('role', '<', $user->role)->queryOrder()->paginate();
    }

}
