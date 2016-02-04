<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stake extends Model
{
    /*
     * Atributos que podem ser preenchidos com o metodo estatico create
     * @var array
     */
    protected $fillable = ['name', 'type'];

    /**
     * Relacionamento one to many de estacas e alas
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function wards()
    {
        return $this->hasMany('App\Ward');
    }
}
