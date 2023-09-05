<?php

namespace App\Models\BengkelPro;

use App\Models\BaseDBotomotives;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DiscountGoogleAds extends BaseDBotomotives
{
    use HasFactory;

    protected $table = 'DISCOUNT_GOOGLE_ADS';


    public function scopeLastRowByCid($query, $cid)
    {
        return $query
                    ->where('CID', $cid)
                    ->orderBy('ID', 'DESC')
                    ->limit(1)
                    ->first();
    }
}
