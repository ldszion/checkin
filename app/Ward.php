<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ward extends Model
{
    /*
     * Atributos que podem ser preenchidos com o metodo estatico create
     * @var array
     */
    protected $fillable = ['name', 'type', 'stake_id'];

    /**
     * Relacionamento com Stake
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function stake()
    {
        return $this->belongsTo('App\Stake');
    }

    /**
     * Relacionamento de alas com usuarios
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany('App\User');
    }
}
