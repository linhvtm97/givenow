<?php

namespace App\Http\Middleware;

use Closure;

class CheckDonor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = currentUserLogin();
        //Sua lai dieu kien o day
        if ($user->role < 0) {
            dd('Return 403');
            //return redirect('home');
        }

        return $next($request);
    }
}
