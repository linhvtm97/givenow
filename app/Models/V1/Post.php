<?php

namespace App\Models\V1;

use App\Models\V1\MainModel;

class Post extends MainModel
{
    protected $table = 'posts';

    protected $searchField = 'name';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'event_id', 'image', 'description', 'text', 'title', 'user_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'pivot', 'deleted_at', 'user_id'
    ];

    /**
     * Event relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }

    /**
     * User relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
