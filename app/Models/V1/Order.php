<?php

namespace App\Models\V1;

use App\Models\V1\MainModel;

class Order extends MainModel
{
    protected $table = 'orders';
    const STATUS_CONFIRMED = 1;
    const STATUS_PROCESSED = 0;

    const LIST_STATUS = [self::STATUS_CONFIRMED, self::STATUS_PROCESSED];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'event_id', 'status'
    ];

    /**
     * Order Product relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products()
    {
        return $this->hasMany(OrderProduct::class);
    }
    /**
     * Cause relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    /**
     * Cause relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }
}
