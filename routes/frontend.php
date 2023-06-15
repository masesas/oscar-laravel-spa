<?php

use App\Http\Controllers\Frontend\BengkelAdsController;
use Illuminate\Support\Facades\Route;


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
        ], function(){
            Route::get('{cid}', [BengkelAdsController::class, 'index']);

            Route::post('claim-voucher', [BengkelAdsController::class, 'claimVoucher'])->name('claim_voucher');
        });
    });
});
