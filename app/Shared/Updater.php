<?php

namespace App\Shared\Traits;

use App\Shared\Image\Upload;

trait Updater
{
    use Upload;

    /**
     * Prepare data before update
     *
     * @param array $data Data
     *
     * @return mixed
     */
    public function prepareData($data)
    {
        if (!empty($data['image'])) {
            $url = $this->uploadImage($data['image']);
            $data['image'] = $url;
        }
        return $data;
    }
}
