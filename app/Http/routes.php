<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

use App\User;

Route::get('/', function () {
    return view('index');
});

Route::group(['prefix' => 'api'], function () {
    Route::get('/users', 'UsersController@index');
    Route::post('/users', 'UsersController@insert');
    Route::post('/users/{id}', 'UsersController@update');
    Route::delete('/users/{id}', 'UsersController@destroy');
    Route::get('/users/{id}', 'UsersController@show');

    Route::get('/stakes', 'StakesController@index');

    Route::get('/tags', 'TagsController@index');
});
