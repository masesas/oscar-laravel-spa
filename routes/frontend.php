<?php

use Illuminate\Support\Facades\Route;


Route::group([
    'namespace' => 'App\Http\Controllers\Frontend',
], function () {

    Route::group([
        'prefix' => 'bengkel',
        'as' => 'bengkel.'
    ], function () {
        Route::resource('ads', 'BengkelAdsController');
    });
    
});
