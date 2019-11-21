<?php

namespace App\Modules\V1\Post\Controllers;

use App\Modules\V1\Post\Services\PostService;
use App\Modules\Controller as BaseController;
use App\Modules\Request;

class PostController extends BaseController
{
    /**
     * PostController constructor.
     *
     * @param PostService $postService PostService
     */
    public function __construct(PostService $postService)
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
        $this->service = $postService;
    }
}
