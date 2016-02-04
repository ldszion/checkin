<?php

use Illuminate\Database\Seeder;
use App\Ward;
use App\Stake;

class WardsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // Brasília
        $brasilia      = 1;
        Ward::create(['name' => 'Asa Sul', 'stake_id' => $brasilia]);
        Ward::create(['name' => 'Águas Claras', 'stake_id' => $brasilia]);
        Ward::create(['name' => 'Guará I', 'stake_id' => $brasilia]);
        Ward::create(['name' => 'Guará II', 'stake_id' => $brasilia]);
        Ward::create(['name' => 'Lago Sul', 'stake_id' => $brasilia]);
        Ward::create(['name' => 'Núcleo Bandeirante', 'stake_id' => $brasilia]);
        Ward::create(['name' => 'São Sebastião', 'stake_id' => $brasilia]);
        // Brasília Norte
        $brasiliaNorte = 2;
        Ward::create(['name' => 'Brasília Norte', 'stake_id' => $brasiliaNorte]);
        Ward::create(['name' => 'Itapoã', 'stake_id' => $brasiliaNorte]);
        Ward::create(['name' => 'Paranoá', 'stake_id' => $brasiliaNorte]);
        Ward::create(['name' => 'Planalto', 'stake_id' => $brasiliaNorte]);
        Ward::create(['name' => 'Sobradinho I', 'stake_id' => $brasiliaNorte]);
        Ward::create(['name' => 'Sobradinho II', 'stake_id' => $brasiliaNorte]);
        Ward::create(['name' => 'Estância', 'type' => 'branch', 'stake_id' => $brasiliaNorte]);
        Ward::create(['name' => 'Planaltina', 'type' => 'branch', 'stake_id' => $brasiliaNorte]);
        // Alvorada
        $alvorada      = 3;
        Ward::create(['name' => 'Gama I', 'stake_id' => $alvorada]);
        Ward::create(['name' => 'Gama II', 'stake_id' => $alvorada]);
        Ward::create(['name' => 'Gama Centro', 'stake_id' => $alvorada]);
        Ward::create(['name' => 'Santa Maria I', 'stake_id' => $alvorada]);
        Ward::create(['name' => 'Santa Maria II', 'stake_id' => $alvorada]);
        // Ceilândia
        $ceilandia     = 4;
        Ward::create(['name' => 'Brazlândia', 'stake_id' => $ceilandia]);
        Ward::create(['name' => 'Ceilândia I', 'stake_id' => $ceilandia]);
        Ward::create(['name' => 'Ceilândia II', 'stake_id' => $ceilandia]);
        Ward::create(['name' => 'Ceilândia III', 'stake_id' => $ceilandia]);
        Ward::create(['name' => 'Ceilândia IV', 'stake_id' => $ceilandia]);
        // Taguatinga
        $taguatinga    = 5;
        Ward::create(['name' => 'Águas Lindas', 'stake_id' => $taguatinga]);
        Ward::create(['name' => 'Descoberto', 'stake_id' => $taguatinga]);
        Ward::create(['name' => 'Recanto das Emas', 'stake_id' => $taguatinga]);
        Ward::create(['name' => 'Samambaia I', 'stake_id' => $taguatinga]);
        Ward::create(['name' => 'Samambaia II', 'stake_id' => $taguatinga]);
        Ward::create(['name' => 'Taguatinga I', 'stake_id' => $taguatinga]);
        Ward::create(['name' => 'Taguatinga II', 'stake_id' => $taguatinga]);
        Ward::create(['name' => 'Taguatinga III', 'stake_id' => $taguatinga]);
        // Valparaiso
        $valparaiso    = 6;
        Ward::create(['name' => 'Jardim Ingá', 'stake_id' => $valparaiso]);
        Ward::create(['name' => 'Lago Azul', 'stake_id' => $valparaiso]);
        Ward::create(['name' => 'Novo Gama', 'stake_id' => $valparaiso]);
        Ward::create(['name' => 'Ocidental', 'stake_id' => $valparaiso]);
        Ward::create(['name' => 'Valparaíso I', 'stake_id' => $valparaiso]);
        Ward::create(['name' => 'Valparaíso II', 'stake_id' => $valparaiso]);
        Ward::create(['name' => 'Cristalina', 'type' => 'branch', 'stake_id' => $valparaiso]);
        // Formosa
        $formosa       = 7;
        // Palmas
        $palmas        = 8;
        Ward::create(['name' => 'Miracema', 'stake_id' => $palmas]);
        Ward::create(['name' => 'Palmas I', 'stake_id' => $palmas]);
        Ward::create(['name' => 'Palmas II', 'stake_id' => $palmas]);
        Ward::create(['name' => 'Palmas III', 'stake_id' => $palmas]);
        Ward::create(['name' => 'Paraíso', 'stake_id' => $palmas]);
        Ward::create(['name' => 'Taquaralto', 'stake_id' => $palmas]);
        Ward::create(['name' => 'Aureny', 'type' => 'branch', 'stake_id' => $palmas]);
        Ward::create(['name' => 'Gurupi', 'type' => 'branch', 'stake_id' => $palmas]);
        Ward::create(['name' => 'Porto Nacional', 'type' => 'branch', 'stake_id' => $palmas]);
    }
}
