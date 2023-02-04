<?php

namespace App\Http\Middleware;

use App\Credsman;
use Closure;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CredsmanSharedData
{
    public function handle(Request $request, Closure $next)
    {
        Inertia::share('appVersion', Credsman::VERSION);
        Inertia::share('laravelVersion', Application::VERSION);
        Inertia::share('phpVersion', \PHP_VERSION);
        Inertia::share('appNameExtended', config('credsman.io')['app_name_extended']);
        Inertia::share('productName', config('credsman.io')['product_name']);
        Inertia::share('isAdmin', auth()->user()?->isAdmin());
        Inertia::share('copyright', Credsman::getCopyright());

        return $next($request);
    }
}
