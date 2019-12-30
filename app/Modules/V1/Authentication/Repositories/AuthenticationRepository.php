<?php

namespace App\Modules\V1\Authentication\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\User;
use App\Models\V1\Role;

/**
 * Class AuthenticationRepository
 * @package App\Modules\V1\Authentication\Repositories
 */
class AuthenticationRepository
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

     /**
     * Register
     *
     * @param array $data Request data
     *
     * @return mixed
     *
     * @throws AuthenticationException
     */
    public function register(array $data)
    {
        $credentials = [
            'username' => $data['username'],
            'password' => $data['password'],
        ];
        $data['password'] = bcrypt($data['password']);
        $data['role'] = User::ROLE_NORMAL_USER;
        $data['status'] = User::PUBLIC_STATUS;
        $user = User::create($data);

        return $credentials;
    }
}
