<?php

namespace App\Models\V1;

use App\Models\V1\MainModel;
use Illuminate\Http\Request;

class Event extends MainModel
{
    protected $table = 'events';

    protected $searchField = 'name';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'cause_id', 'user_id', 'image', 'description', 'text', 'goal_item', 'start_date',
        'end_date', 'location', 'status', 'city_id', 'charity', 'current_items'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'pivot', 'deleted_at'
    ];

    /**
     * User relation
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
    public function cause()
    {
        return $this->belongsTo(Cause::class, 'cause_id');
    }

    /**
     * Cause relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function city()
    {
        return $this->belongsTo(Cause::class, 'city_id');
    }
    /**
     * Scope query order
     *
     * @param Builder $query QueryBuilder
     *
     * @return Builder
     */
    public function scopeQueryFilter($query)
    {
        $request = app(Request::class);

        $filterArray = $request->get('filters');
        if (!empty($filterArray)) {
            foreach ($filterArray as $filter) {
                $split = explode(',', $filter);
                if (count($split) == 2) {
                    $key = $split[0];
                    $value = $split[1];
                    if($key == 'cause_id') {
                        $causes = explode(';', $value);
                        $query = $query->whereIn($key, $causes);
                    } else {
                        $query = $query->where($key, $value);
                    }
                }
            }
        }
        return $query;
    }
}
