<?php

namespace App\Traits;

use Str;

trait TraitMessageTemplate {

    public function formatMessage(string $message, array $params = []): string {
        if ($message == null || empty($message)) {
            return '';
        }

        if (Str::contains($message, '{namaBengkel}') && array_key_exists('namaBengkel', $params)) {
            $message = str_replace('{namaBengkel}', $params['namaBengkel'], $message);
        }
        if (Str::contains($message, '{noPonselBengkel}') && array_key_exists('noPonselBengkel', $params)) {
            $message = str_replace('{noPonselBengkel}', $params['noPonselBengkel'], $message);
        }
        if (Str::contains($message, '{nopol}') && array_key_exists('nopol', $params)) {
            $message = str_replace('{nopol}', $params['nopol'], $message);
        }
        if (Str::contains($message, '{nominalVoucher}') && array_key_exists('nominalVoucher', $params)) {
            $message = str_replace('{nominalVoucher}', $params['nominalVoucher'], $message);
        }
        if (Str::contains($message, '{namaLayanan}') && array_key_exists('namaLayanan', $params)) {
            $message = str_replace('{namaLayanan}', $params['namaLayanan'], $message);
        }
        if (Str::contains($message, '{discPercent}') && array_key_exists('discPercent', $params)) {
            $message = str_replace('{discPercent}', $params['discPercent'], $message);
        }
        if (Str::contains($message, '{kendaraan}') && array_key_exists('kendaraan', $params)) {
            $message = str_replace('{kendaraan}', $params['kendaraan'], $message);
        }
        if (Str::contains($message, '{tglExpired}') && array_key_exists('tglExpired', $params)) {
            $message = str_replace('{tglExpired}', $params['tglExpired'], $message);
        }
        if (Str::contains($message, '{linkQrCode}') && array_key_exists('linkQrCode', $params)) {
            $message = str_replace('{linkQrCode}', $params['linkQrCode'], $message);
        }
        if (Str::contains($message, '{link}') && array_key_exists('link', $params)) {
            $message = str_replace('{link}', $params['link'], $message);
        }
        if (Str::contains($message, '{googleBisnis}') && array_key_exists('googleBisnis', $params)) {
            $message = str_replace('{googleBisnis}', $params['googleBisnis'], $message);
        }
        if (Str::contains($message, '{discount}') && array_key_exists('discount', $params)) {
            $message = str_replace('{discount}', $params['discount'], $message);
        }

        return $message;
    }
}
