<?php

namespace App\Shared\Image;

use App\Shared\Image\ImageFactory;

trait Upload
{

    /**
     * Upload image
     *
     * @param image $image Image
     *
     * @return mixed
     */
    public function uploadImage($image)
    {
        $uploader = ImageFactory::getUploader(config('filesystems.default'));
        $url = $uploader->upload($image);
        return $url;
    }
}
