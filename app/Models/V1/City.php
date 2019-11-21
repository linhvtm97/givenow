<?php

namespace App\Models\V1;

use App\Models\V1\MainModel;

class City extends MainModel
{
    protected $table = 'cities';

    protected $searchField = 'name';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];
}
