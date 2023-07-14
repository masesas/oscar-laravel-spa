<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\VoucherController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'api v1';
});

Route::group([
    'prefix' => 'bengkel',
], function () {

    Route::group([
        'prefix' => 'ads',
    ], function () {
        Route::post('claim-voucher', [VoucherController::class, 'claimVoucherGoogleAds']);
    });
});


Route::group([
    'middleware' => ['api'],
], function () {

    Route::group([
        'prefix' => 'auth',
    ], function () {
        Route::post('login', [AuthController::class, 'login']);
    });
});



