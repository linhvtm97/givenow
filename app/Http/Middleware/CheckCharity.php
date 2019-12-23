<?php
namespace App\Http\Middleware;
use Closure;
class CheckCharity
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
        if ($user->role < 1) {
            dd('Return 403');
            //return redirect('home');
        }
        return $next($request);
    }
}
