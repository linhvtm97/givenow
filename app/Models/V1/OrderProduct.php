<?php

namespace App\Models\V1;

use App\Models\V1\MainModel;

class Order extends MainModel
{
    protected $table = 'order_product';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'order_id', 'product_id', 'quantity', 'money'
    ];
}
