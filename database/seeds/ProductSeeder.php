<?php

use Illuminate\Database\Seeder;
use App\Models\V1\Product;
use App\Models\V1\Category;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = Category::all()->pluck('id')->toArray();
        factory(App\Models\V1\Product::class, 10)->create([
            'name' => 'Product '.rand(1,100),
            'category_id' => $categories[rand(1,5)],
        ]);
    }
}
