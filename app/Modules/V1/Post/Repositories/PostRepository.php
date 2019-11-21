<?php

namespace App\Modules\V1\Post\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\Post;

/**
 * Class PostRepository
 * @package App\Modules\V1\Post\Repositories
 */
class PostRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Post::class;
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
        return $this->model->with('event')->querySearch()->paginate();
    }
}
