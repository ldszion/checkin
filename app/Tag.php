<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * Atributos para mass assignament
     *
     * @var array
     */
    protected $fillable = ['name'];
    /**
     * Retorna os usuarios relacionados a tag
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\User')->withTimestamps();
    }
}
