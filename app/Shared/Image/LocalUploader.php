<?php

namespace App\Shared\Image;

use Storage;
use File;

class LocalUploader implements ImageInterface
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
        $extension = $image->getClientOriginalExtension();
        Storage::disk('public')->put($image->getFilename().'.'.$extension,  File::get($image));
        $fileName = $image->getFilename().'.'.$extension;
        $path = config('app.url').'/storage/'.$fileName;
        return $path;
    }
}
