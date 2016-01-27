<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use Dingo\Api\Routing\Helpers;

class AuthenticateController extends Controller
{
    use Helpers;

    /**
     * Adiciona um middleware no construtor para requerer autenticacao JWT
     */
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['authenticate', 'teste']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Autentica usuario
     *
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $user = null;
        try {
            // verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        $response = [
            'token' => $token,
            'user' => app('auth')->user(),
        ];
        return response()->json($response);
    }
}
