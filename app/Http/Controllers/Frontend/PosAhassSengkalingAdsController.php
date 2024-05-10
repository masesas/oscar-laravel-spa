<?php

namespace App\Http\Controllers\Frontend;

use App\Enum\MessageType;
use App\Http\Requests\ClaimVoucherRequest;
use App\Models\BengkelPro\BarcodeDiscount;
use App\Models\BengkelPro\BengkelModel;
use App\Models\BengkelPro\DiscountGoogleAds;
use App\Models\MessageTemplate;
use DB;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Throwable;

class PosAhassSengkalingAdsController extends Controller
{
    public function __construct()
    {
    }

    public function index(Request $request)
    {
        $cid = '0ae85b7d-d843-11eb-b18a-2cea7f647529';
        $bengkel = BengkelModel::query()->where('CID', $cid)->first();

        return Inertia::render('Frontend/PosAhassSengkalingAds', [
            'bengkel' => $bengkel
        ]);
    }
}
