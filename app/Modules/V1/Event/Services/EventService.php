<?php

namespace App\Modules\V1\Event\Services;

use App\Modules\V1\Event\Repositories\EventRepository;
use App\Modules\Service as BaseService;
use App\Shared\Traits\Updater;

class EventService extends BaseService
{
    use Updater;

    /**
     * EventService constructor.
     * @param EventRepository $eventRepository
     */
    public function __construct(EventRepository $eventRepository)
    {
        parent::__construct($eventRepository);
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
        $result = $this->repository->with(['cause', 'user', 'city'])->find($uid);
        $cause_name = $result['cause']['name'];
        $user_name = $result['user']['name'];

        $custom = collect([
            'cause_name' => $cause_name,
            'user_name' => $user_name,
            ]);
        $result = $custom->merge($result);

        return $result;
    }
}
