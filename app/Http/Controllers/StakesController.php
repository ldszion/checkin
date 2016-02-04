<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Stake;

class StakesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Stake::with(['wards' => function($wards) {
            $wards->orderBy('name', 'asc');
        }])->get()->toArray();
    }
}
