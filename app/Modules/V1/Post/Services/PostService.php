<?php

namespace App\Modules\V1\Post\Services;

use App\Modules\V1\Post\Repositories\PostRepository;
use App\Modules\Service as BaseService;
use App\Shared\Traits\Updater;

class PostService extends BaseService
{
    use Updater;

    /**
     * PostService constructor.
     * @param PostRepository $postRepository
     */
    public function __construct(PostRepository $postRepository)
    {
        parent::__construct($postRepository);
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
        return $this->repository->getAll();
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
        return $this->repository->with(['event', 'user'])->find($uid);
    }
}
