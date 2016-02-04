<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User;
use App\Http\Controllers\Controller;
use Hash;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::with('ward.stake')->get();
    }

    /**
     * Inere um novo usuario
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string                    $id
     * @return \Illuminate\Http\Response
     */
    public function insert(Request $request, $id = null)
    {
        try {
            if (!$request->has('password')) {
                return response('PASSWORD_REQUIRED', 400);
            }
            $user = new User($request->all());
            $user->password = Hash::make($request->password);

            if ($user->save()) {
                return $user->fresh()->with('ward.stake')->findOrFail($user->id);
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
            if ($request->has('password')) {
                $user->password = Hash::make($request->password);
            }
            if ($user->save()) {
                return $user->with('ward.stake')->findOrFail($user->id);
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
        return User::with('ward.stake')->findOrFail($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
