<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Models\V1\User;
use App\Models\V1\City;
use App\Models\V1\Charity;
use App\Models\V1\Category;
use App\Models\V1\Event;
use App\Models\V1\Product;
use App\Models\V1\Cause;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'password' => bcrypt('12345678'),
        'address' => $faker->address,
        'phone_number' => '09' . rand(10000000, 99999999),
        'image' => $faker->imageUrl,
    ];
});

$factory->define(Cause::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'image' => $faker->imageUrl,
        'description' => $faker->text
    ];
});

$factory->define(City::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});

$factory->define(Charity::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'address' => $faker->address,
        'phone_number' => '09' . rand(10000000, 99999999),
        'image' => $faker->imageUrl,
        'description' => $faker->text
    ];
});

$factory->define(Category::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'image' => $faker->imageUrl,
        'description' => $faker->text
    ];
});

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'category_id' => $faker->numberBetween(1,8),
        'description' => $faker->text,
        'text' => $faker->text,
        'price' => $faker->randomFloat(2,1,100),
        'image' => $faker->imageUrl,
    ];
});

$factory->define(Event::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'user_id' => $faker->numberBetween(11,20),
        'cause_id' => $faker->numberBetween(1,8),
        'city_id' => $faker->numberBetween(1,8),
        'location' => $faker->address,
        'image' => $faker->imageUrl,
        'description' => $faker->text,
        'text' => $faker->text,
        'goal_item' => $faker->numberBetween(1,100000),
        'start_date' => $faker->dateTimeBetween('2018-01-01', '2019-01-01'),
        'end_date' => $faker->dateTimeBetween('2019-02-01', '2020-01-01')
    ];
});
