<?php

use App\Http\Controllers\AccountController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

// Route::get('/login2', function (){
//     return Inertia::render('auth/login-form');
// });
// Route::inertia('/dashboard2', 'dashboard/dashboard2');

// Home
Route::get('/', function () {
    return Inertia::render('home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'appName' => config('app.name'),
        'phpVersion' => PHP_VERSION,
    ]);
});

// Backup welcome
Route::get('/welcome', function () {
    return Inertia::render('welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('dashboard/index');
})->middleware(['auth', 'verified'])->name('dashboard');

// Account
Route::middleware('auth')->group(function () {
    Route::get('/account', [AccountController::class, 'edit'])->name('account.edit');
    Route::patch('/account', [AccountController::class, 'update'])->name('account.update');
    Route::delete('/account', [AccountController::class, 'destroy'])->name('account.destroy');
});

// Users
Route::get('/users', [UserController::class, 'index'])->name('users.index');

require __DIR__.'/auth.php';
