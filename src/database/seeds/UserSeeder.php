<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::table('users')->insert([
    	    'name' => 'Haris Rahman',
            'email' => 'hi@haris.tech',
    	    'password' => '$2y$10$koGNDlnvLiJHSDl19nOX9urbMlIr8h2r5CwRCQ5GvIJjOjbzpWOrS', //pass = 111111
    	    'created_at' => '2019-11-30 00:42:18',
    	    'updated_at' => '2019-11-30 00:42:18',
    	]);
    }
}
