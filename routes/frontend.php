<?php

use App\Http\Controllers\Frontend\BengkelAdsController;
use App\Http\Controllers\Frontend\PosAhassSengkalingAdsController;

Route::group([
    'namespace' => 'App\Http\Controllers\Frontend',
], function () {

    Route::group([
        'prefix' => 'bengkel',
        'as' => 'bengkel.'
    ], function () {
        Route::group([
            'prefix' => 'ads',
            'as' => 'ads.'
        ], function () {
            Route::get('pos', [PosAhassSengkalingAdsController::class, 'index'])
                ->name('pos');

            Route::get('{cid}', [BengkelAdsController::class, 'index']);

            Route::post('click-wa/{cid}', [BengkelAdsController::class, 'updateClickWa'])
                ->name('click_wa');

            Route::post('claim-voucher', [BengkelAdsController::class, 'storeClaimVoucher'])
                ->name('claim_voucher');

        });
    });
});
