<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * This is used by Laravel authentication to redirect users after login.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * The controller namespace for the application.
     *
     * When present, controller route declarations will automatically be prefixed with this namespace.
     *
     * @var string|null
     */
    // protected $namespace = 'App\\Http\\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::prefix('v3/api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/v3/api.php'));

            Route::prefix('v3/api/admin')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/v3/admin.php'));

            Route::prefix('v3/api/staff')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/v3/staff.php'));

            Route::prefix('v3/api/manager')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/v3/manager.php'));

            Route::prefix('v3/api/doctor')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/v3/doctor.php'));

                Route::prefix('v3/api/homeDialysis')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/v3/homeDialysis.php'));

                Route::prefix('v3/api/appointmentApi')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/v3/appointmentApi.php'));

            Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/web.php'));




        });
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by(optional($request->user())->id ?: $request->ip());
        });
    }
}
