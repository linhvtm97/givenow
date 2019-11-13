<?php

namespace App\Modules\V1\Authentication\Controllers;

use App\Modules\Controller;
use Symfony\Component\HttpFoundation\Response;
use App\Modules\V1\Authentication\Requests\LoginRequest;
use App\Modules\V1\Authentication\Requests\LogoutRequest;
use App\Modules\V1\Authentication\Requests\RegisterRequest;
use DB;
use Illuminate\Support\Facades\Auth;
use App\Modules\V1\Authentication\Services\AuthenticationService;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthenticateController extends Controller
{
    public $authService;

    /**
     * AuthenticateController constructor.
     *
     * @param AuthenticationService $authService authService
     *
     * @return void
     */
    public function __construct(AuthenticationService $authService)
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'logout', 'refresh']]);
        $this->authService = $authService;
    }

    /**
     * Login
     *
     * @param LoginRequest $request Request
     *
     * @return App\Shared\Traits\ApiResponser;
     *
     * @throws \Illuminate\Auth\AuthenticationException
     */
    public function login(LoginRequest $request)
    {
        $authenticate = $this->authService->authenticate($request->all());

        $this->setMeta(__('messages.request_success'))
            ->setData($authenticate['data']);

        return $this->jsonOut();
    }

    /**
     * Logout
     *
     * @return mixed
     */
    public function logout(LogoutRequest $request)
    {
        // dd(JWTAuth::invalidate($request->input('token')));
        try {
            JWTAuth::invalidate($request->input('token'));
            return $this->setStatus(Response::HTTP_OK)
                ->setMeta(__('messages.request_success'))
                ->jsonOut();        
        } catch (JWTException $e) {
            return $this->setStatus(Response::HTTP_BAD_REQUEST)
                ->setMeta(__('Failed to logout, please try again.'))
                ->jsonOut();    
        }
    }

    /**
     * Get current user info
     *
     * @return mixed
     *
     * @throws \Exception
     */
    public function getCurrentUser()
    {
        $user = $this->authService->currentUser();

        return $this->setStatus(Response::HTTP_OK)
            ->setMeta(__('messages.request_success'))
            ->setData($user)
            ->jsonOut();
    }

    /**
     * Register
     *
     * @param RegisterRequest $request Request
     *
     * @return App\Shared\Traits\ApiResponser;
     *
     * @throws \Illuminate\Auth\AuthenticationException
     */
    public function register(RegisterRequest $request)
    {
        $authenticate = $this->authService->register($request->all());

        $this->setMeta(__('messages.request_success'))
            ->setData($authenticate['data']);

        return $this->jsonOut();
    }

    public function refresh()
    {
        return $this->setStatus(Response::HTTP_OK)
            ->setMeta(__('messages.request_success'))
            ->setData(array('token' => JWTAuth::getToken()->get()))
            ->jsonOut();
    }
}
