<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;

class BengkelAdsController extends Controller {

    public function __construct() {
    }

    public function index(Request $request) {
        return Inertia::render('Frontend/BengkelAds', []);
    }
}
