<?php

use App\Http\Api\V1\VoucherController;
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
