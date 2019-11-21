<?php

namespace App\Models\V1;

use App\Models\V1\MainModel;

class Charity extends MainModel
{

    protected $table = "charities";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'phone_number', 'address', 'image', 'website', 'description'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];
}
