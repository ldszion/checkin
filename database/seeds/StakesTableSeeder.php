<?php

use Illuminate\Database\Seeder;
use App\Stake;

class StakesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Stake::create(['name' => 'Brasília']);
        Stake::create(['name' => 'Brasília Norte']);
        Stake::create(['name' => 'Alvorada']);
        Stake::create(['name' => 'Ceilândia']);
        Stake::create(['name' => 'Taguatinga']);
        Stake::create(['name' => 'Valparaíso']);
        Stake::create(['name' => 'Formosa', 'type' => 'district']);
        Stake::create(['name' => 'Palmas']);
    }
}
