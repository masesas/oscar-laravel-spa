<?php

namespace App\Http\Controllers\Frontend;

use App\Models\BengkelModel;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;

class BengkelAdsController extends Controller {

    public function __construct() {
    }

    public function index(Request $request) {
        $bengkel = BengkelModel::query()->where('CID', '0ae85b7d-d843-11eb-b18a-2cea7f647529')->first();

        return Inertia::render('Frontend/BengkelAds', [
            'bengkel' => $bengkel
        ]);
    }

    public function claimVoucher(Request $request){
        
    }
}
