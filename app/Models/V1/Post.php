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
        'name', 'event_id', 'image', 'description', 'text', 'title'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'pivot', 'deleted_at', 'event_id'
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
}
