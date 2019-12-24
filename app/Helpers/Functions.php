<?php
if (!function_exists('currentUserLogin')) {
    /**
     * Get current user login
     *
     * @return \App\Models\User
     */
    function currentUserLogin()
    {
        return \Auth::user();
    }
}
