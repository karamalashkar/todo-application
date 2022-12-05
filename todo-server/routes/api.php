<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\AuthController;

Route::group(["middleware" => "auth:api"], function(){
    Route::get('/user/{id}',[UserController::class,'getUser']);
    Route::post('/task',[TaskController::class,'addTask']);
    Route::get('/task',[TaskController::class,'getTask']);
});

Route::post('/user',[UserController::class,'addUser']);
Route::post('/login',[AuthController::class,'login']);