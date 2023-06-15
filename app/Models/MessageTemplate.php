<?php

namespace App\Models;

use App\Traits\TraitMessageTemplate;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Str;

class MessageTemplate extends BaseDBotomotives {
    use HasFactory;
    use TraitMessageTemplate;

    protected $table = 'MESSAGE_TEMPLATE';


    public function activeByType($type) {
        return self::query()->where('TYPE_MESSAGE', $type)->where('IS_ACTIVE', 1)->first();
    }

    public function discGoogleAds(
        string $namaBengkel,
        string $namaLayanan,
        string $discPercentage,
        string $qrCode
    ): string {
        $message = '';

        $messageData = $this->activeByType('DISC_GOOGLE_ADS');
        if (!empty($messageData)) {

            $message = $this->formatMessage($messageData->MESSAGE, [
                'discount' => $discPercentage . '%',
                'namaBengkel'    => $namaBengkel,
                'linkQrCode'     => 'https://otomotives.com/#/barcodeDisc/' . $qrCode,
                'namaLayanan' => $namaLayanan,
            ]);
        }

        return $message;
    }
}
