<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RegisterAsAdminOnly
{
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user()?->isAdmin() !== true &&
            $request->route()->uri !== 'login' &&
            $request->route()->uri === 'register'
        ) {
            return back();
        }

        return $next($request);
    }
}
