<?php

namespace App\Modules\V1\Authentication\Services;

use App\Models\V1\User;
use \Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Log;
use DB;
use App\Modules\V1\Authentication\Repositories\AuthenticationRepository;

class AuthenticationService
{
    protected $authenticationRepository;

    /**
     * AuthenticationService constructor.
     * @param AuthenticationRepository $authenticationRepository
     */
    public function __construct(AuthenticationRepository $authenticationRepository)
    {
        $this->authenticationRepository = $authenticationRepository;
    }

    /**
     * Authenticate
     *
     * @param array $data Request data
     *
     * @return mixed
     *
     * @throws AuthenticationException
     */
    public function authenticate(array $data)
    {
        $credentials = [
            'username' => $data['username'],
            'password' => $data['password']
        ];
        return $this->checkAuth($credentials);
    }

    /**
     * Check Auth
     *
     * @param array $credentials credentials
     *
     * @return array
     */
    public function checkAuth(array $credentials)
    {
        if (!($token = JWTAuth::attempt($credentials)) ||  Auth::user()->status == User::DEACTIVE_STATUS) {
            throw new AuthenticationException(trans('auth.errors.login-unauthenticated'));
        }

        return [
            'data' => [
                'access_token' => $token,
                'user' => $this->currentUser()
                ]
        ];
    }

    /**
     * Get current user
     *
     * @return mixed
     */
    public static function currentUser()
    {
        try {
            $user = Auth::user();
        } catch (\Exception $e) {
            Log::info($e->getMessage());
            $user = null;
        }

        return $user;
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
        DB::beginTransaction();
        try {
            $credentials = $this->authenticationRepository->register($data);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        return $this->checkAuth($credentials);
    }
}
