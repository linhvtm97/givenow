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
        for ($i = 0; $i < 5; $i++) {
            factory(App\Models\V1\User::class)->create([
                'name' => 'Admin' . ($i > 0 ? ' ' . $i : ''),
                'username' => 'admin' . ($i > 0 ? $i : ''),
                'role' => 2
            ]);
        }

        for ($i = 0; $i < 5; $i++) {
            factory(App\Models\V1\User::class)->create([
                'name' => 'Charity user ' . ($i > 0 ? ' ' . $i : ''),
                'username' => 'user' . ($i > 0 ? $i : ''),
                'role' => 1
            ]);
        }
    }
}
