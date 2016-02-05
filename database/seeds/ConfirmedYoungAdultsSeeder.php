<?php

use App\Tag;
use App\User;
use App\Ward;
use Illuminate\Database\Seeder;

class ConfirmedYoungAdultsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        dd($this->ward('Guará II'));
        // User::firstOrCreate(['name' => 'Fulano', 'ward_id' => Ward::where('name' => 'Guará II')->first()->id]);
    }

    /**
     * Retorna o id cuja ala possua esse nome
     *
     * @param string $name
     * @return int
     */
    public function ward($name)
    {
        return Ward::firstOrCreate(['name' => $name])->id;
    }

    /**
     * Retorna o id da tag
     *
     * @param string $name
     * @return \Retorno
     */
    public function tag($name)
    {
        return Tag::firstOrCreate(['name' => $name])->id;
    }
}
