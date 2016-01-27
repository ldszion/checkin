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
        $admin = new App\User();
        $admin->name = "Administrador";
        $admin->email = "admin@mail.com";
        $admin->password = bcrypt("123456");
        $admin->save();
        factory(App\User::class, 10)->create();
    }
}
