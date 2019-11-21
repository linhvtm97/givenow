<?php

use Illuminate\Database\Seeder;
use App\Models\V1\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\V1\User::class, 5)->create(['name' => 'admin', 'username' => 'admin'.rand(1,100), 'role' => 1]);
        factory(App\Models\V1\User::class, 5)->create(['name' => 'normal user', 'username' => 'user'.rand(1,100), 'role' => 0]);
    }
}
