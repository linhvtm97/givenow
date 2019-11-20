<?php

namespace App\Shared\Image;

interface ImageInterface
{
    /**
     * Store image before insert into DB
     *
     * @param File $image
     *
     * @return mixed
     */
    public function upload($image);
}
