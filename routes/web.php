<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/dashboard', function () {
    return Inertia::render('protoype/dashboard');
})->name('dashboard');
Route::get('/testing', function () {
    return Inertia::render('protoype/login');
})->name('testing');

require __DIR__ . '/auth.php';
