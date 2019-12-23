<?php

namespace App\Models\V1;

use App\Models\V1\MainModel;

class OrderProduct extends MainModel
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

    /**
     * Cause relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }
}
