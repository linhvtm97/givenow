<?php

namespace App\Modules\V1\User\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\User;
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
}
