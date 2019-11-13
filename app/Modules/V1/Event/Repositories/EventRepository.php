<?php

namespace App\Modules\V1\Event\Repositories;

use App\Modules\Repository as BaseRepository;
use App\Models\V1\Event;
use DB;
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
        return $this->model->leftJoin('event_item', 'event_item.event_id', 'events.id')
            ->groupBy('events.id')
            ->select(DB::raw('events.*, sum(event_item.quantity) as current_items'))
            ->with(['cause', 'user'])->querySearch()->paginate();
    }
}