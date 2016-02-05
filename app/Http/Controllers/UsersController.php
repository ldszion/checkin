<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Tag;
use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->getUsers()->get();
    }

    /**
     * Inere um novo usuario
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function insert(Request $request)
    {
        try {
            if (!$request->has('password')) {
                return response('PASSWORD_REQUIRED', 400);
            }
            $user = new User($request->all());

            if ($user->save()) {
                $this->syncTags($request, $user);
                return $this->getUsers()->findOrFail($user->id);
            }
            return response('USER_NOT_SAVED', 400);
        } catch (\Exception $e) {
            return response($e->getMessage(), 500);
        }
    }

    /**
     * Atualiza um usuario
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string                    $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id = null)
    {
        $user = null;
        try {
            $user = User::findOrFail($id);
        } catch (\Exception $e) {
            return response('USER_NOT_FOUND', 500);
        }
        try {
            $user->fill($request->all());
            if ($user->save()) {
                $this->syncTags($request, $user);
                return $this->getUsers()->findOrFail($id);
            }
        } catch (\Exception $e) {
            return response($e->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->getUsers()->findOrFail($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if ($id == 1) {
            return response('SUPERADMIN_CANNOT_BE_DELETED', 406);
        }
        return User::destroy($id);
    }

    /**
     * Sincroniza as tags recebidas do request
     *
     * @param \Illuminate\Http\Request $request Request
     * @param \App\User                $user    Usuario
     *
     * @return void
     * @author Marco Tulio de Avila Santos <marco.santos@aker.com.br>
     */
    private function syncTags(Request $request, User $user)
    {
        if ($request->has('tags')) {
            $tagNames = collect($request->tags)->lists('name');
            $ids = new \Illuminate\Database\Eloquent\Collection;
            foreach ($tagNames as $name) {
                $ids->push(Tag::firstOrCreate(['name' => $name])->id);
            }
            $user->tags()->sync($ids->all());
        }
    }

    /**
     * Retorna os usuarios completos com seus relacionamentos
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function getUsers()
    {
        return User::with('ward.stake', 'tags');
    }
}
