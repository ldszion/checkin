<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Hash;

class User extends Model implements
    AuthenticatableContract,
    AuthorizableContract,
    CanResetPasswordContract
{
    use Authenticatable, Authorizable, CanResetPassword;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password', 'address', 'phone', 'gender', 'birthday', 'ward_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'birthday'];

    /**
     * Relacionamento com Ward
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ward()
    {
        return $this->belongsTo('App\Ward');
    }

    /**
     * Ajusta o atributo birthday para um formato aceitavel conforme recebido do Angular JS
     *
     * @param  string $date Data vinda de um Input
     * @author Marco Tulio de Avila Santos <marco.santos@aker.com.br>
     */
    public function setBirthdayAttribute($date)
    {
        if ($date) {
            $date = Carbon::createFromFormat('Y-m-d\TH:i:s.uO', $date);
            $this->attributes['birthday'] = $date;
        }
    }

    /**
     * Faz o hash da senha sem precisar se preocupar com isso no controller
     *
     * @param string $password Senha informada pelo usuario
     * @author Marco Tulio de Avila Santos <marco.santos@aker.com.br>
     */
    public function setPasswordAttribute($password)
    {
        if ($password) {
            $this->attributes['password'] = Hash::make($password);
        }
    }

    /**
     * Retorna as tags relacionadas ao usuario
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany('App\Tag')->withTimestamps();
    }
}
