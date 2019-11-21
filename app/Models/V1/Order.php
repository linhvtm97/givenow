<?php

namespace App\Models\V1;

use App\Models\V1\MainModel;

class Order extends MainModel
{
    protected $table = 'orders';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'event_id', 'status'
    ];
}
