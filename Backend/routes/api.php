<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TecnologiasController;
use App\Http\Controllers\InteresController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get("/profile", [App\Http\Controllers\UserController::class, 'index']);
Route::patch("/update/{id}", [App\Http\Controllers\UserController::class, 'update']);

Route::patch("/tecnologias/{id}", [App\Http\Controllers\TecnologiasController::class, 'update']);

Route::patch("/interes/{id}", [App\Http\Controllers\InteresController::class, 'update']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
