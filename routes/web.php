<?php

use App\Credsman;
use App\Http\Controllers\VaultController;
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

// Startpage - redirects to /dashboard
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'appVersion' => Credsman::VERSION,
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'appNameExtended' => config('credsman.io')['app_name_extended'] ?? null,
    ]);
});

// Admin UI
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    $data = [
        'appVersion' => Credsman::VERSION,
        'phpVersion' => PHP_VERSION,
        'appNameExtended' => config('credsman.io')['app_name_extended'] ?? null,
        'copyright' => Credsman::getCopyright(),
    ];

    // Dashboard
    Route::get('/dashboard', function () use ($data) {
        return Inertia::render('Dashboard', array_merge($data, [

        ]));
    })->name('dashboard');

    // ToS
    Route::get('/terms-of-service', function () {
        return Inertia::render('TermsOfService');
    })->name('terms-of-service');

    // Vaults
    Route::get('/vaults', [VaultController::class, 'index'])->name('vaults');
    Route::get('/vaults/create', [VaultController::class, 'create'])->name('vaults.create');
    Route::post('/vaults/store', [VaultController::class, 'store'])->name('vaults.store');
    Route::any('/vaults/update/{vault}', [VaultController::class, 'update'])->name('vaults.update');
    Route::get('/vaults/show/{vault}', [VaultController::class, 'show'])->name('vaults.show');
});
