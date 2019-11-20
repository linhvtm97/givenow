<?php

namespace App\Shared\Image;

use Storage;
use File;

class S3Uploader implements ImageInterface
{
    /**
     * Store image before insert into DB
     *
     * @param File $image
     *
     * @return mixed
     */
    public function upload($image)
    {
        $imageName = time().$image->getFilename().'.'.$image->getClientOriginalExtension();
        Storage::disk('s3')->put($imageName, File::get($image));
        $url = Storage::disk('s3')->url($imageName);
        return $url;
    }
}
