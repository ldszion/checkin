<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = new App\User();
        $admin->name = "Administrador";
        $admin->email = "admin@mail.com";
        $admin->password = bcrypt("123456");
        $admin->birthday = "1989-06-28T03:00:00.000Z";
        $admin->save();
        factory(App\User::class, 10)->create();
    }
}
