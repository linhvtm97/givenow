<?php

namespace App\Modules\V1\User\Services;

use App\Modules\V1\User\Repositories\UserRepository;
use App\Modules\Service as BaseService;
use App\Shared\Traits\Updater;
use DB;

class UserService extends BaseService
{
    use Updater;

    /**
     * UserService constructor.
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        parent::__construct($userRepository);
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
        return $this->repository->getAll($data);
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
        return $this->repository->find($uid);
    }

    /**
     * Store new object
     *
     * @param array $data data
     *
     * @return mixed
     */
    public function store(array $data)
    {
        $data = $this->prepareData($data);
        DB::beginTransaction();
        try {
            $object = $this->repository->create($data);
            $this->repository->createRelation($object, $data);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        DB::commit();

        return $this->find($object->id);
    }

    /**
     * Update object
     *
     * @param string  $uid          uid
     * @param array   $data          data
     *
     * @return mixed
     */
    public function update(string $uid, array $data)
    {
        $data = $this->prepareData($data);
        DB::beginTransaction();
        try {
            $object = $this->repository->update($data, $uid);
            $this->repository->updateRelation($object, $data);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        DB::commit();

        return $this->find($object->id);
    }

    /**
     * Delete object
     *
     * @param string $uid uid of object
     *
     * @return mixed
     */
    public function destroy(string $uid)
    {
        DB::beginTransaction();
        try {
            $deleted = $this->repository->delete($uid);
            DB::commit();
            return $deleted;
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
    }
}
