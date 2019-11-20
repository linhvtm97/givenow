<?php

namespace App\Shared\Image;

class ImageFactory
{
    /**
     * Image factory get uploader
     *
     * @param string $driver File system driver
     *
     * @return mixed
     */
    public static function getUploader($driver)
    {
        switch ($driver) {
            case 's3':
                return new S3Uploader();
            case 'local':
                return new LocalUploader();
            default:
                break;
        }
        return new LocalUploader();
    }
}
