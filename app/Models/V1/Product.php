<?php

namespace App\Models\V1;

use App\Models\V1\MainModel;

class Product extends MainModel
{
    protected $table = 'products';

    protected $searchField = 'name';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'category_id', 'image', 'description', 'text', 'price', 'image'
    ];

    /**
     * User relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
