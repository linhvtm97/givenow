<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserTableSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(CauseSeeder::class);
        $this->call(CitySeeder::class);
        $this->call(EventSeeder::class);
        $this->call(ProductSeeder::class);
    }
}
