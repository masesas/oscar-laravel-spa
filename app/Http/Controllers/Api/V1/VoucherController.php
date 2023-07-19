<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClaimVoucherRequest;
use App\Models\BengkelPro\BarcodeDiscount;
use App\Models\BengkelPro\BengkelModel;
use App\Models\MessageTemplate;
use DB;
use Throwable;

class VoucherController extends Controller
{
    public function claimVoucherGoogleAds(ClaimVoucherRequest $request)
    {
        DB::beginTransaction();
        try {
            $noPonsel = format_no_ponsel_62($request->noPonsel);
            if (empty($noPonsel)) {
                throw new \Exception('Nomor Yg Kamu Masukkan Tidak Valud, Masukkan No. Ponsel Yg Valid', 400);
            }

            $messageTemplate = new MessageTemplate();
            $bengkel = BengkelModel::query()->where('CID', $request->cid)->first();

            $checkAvailData = BarcodeDiscount::query()->whereRaw("PELANGGAN_ID = '$noPonsel' AND (STATUS_PAKAI IS NULL OR STATUS_PAKAI = '') AND JENIS_QR_CODE = 'GOOGLE ADS'")->count();
            if ($checkAvailData > 0) {
                throw new \Exception("Kamu masih memiliki Voucher Aktif yg belum di gunakan, Lakukan servis di bengkel $bengkel->NAMA_BENGKEL untuk mendapatkan voucher discount yg lain", 400);
            }

            $namaLayanan = !empty($request->namaLayanan) ? $request->namaLayanan : 'SERVIS LENGKAP + CUCI';
            $discount = '20';
            $qrCode = md5(date('Y-m-d h:i:sa') . $noPonsel . rand()) . md5(rand() . date('Y-m-d h:i:sa') . rand() . $noPonsel);
            $message = $messageTemplate->discGoogleAds($bengkel->NAMA_BENGKEL, $namaLayanan, $discount, $qrCode);

            BarcodeDiscount::query()->insert([
                'CID' => $request->cid,
                'JENIS_QR_CODE' => 'GOOGLE ADS',
                'NAMA_LAYANAN' => $namaLayanan,
                'QR_CODE' => $qrCode,
                'PELANGGAN_ID' => $noPonsel,
                'MESSAGE_NOTIFIKASI' => $message,
                'MESSAGE_WHATSAPP' => $message,
                'DISCOUNT_PERCENT' => $discount,
                'TANGGAL_EXPIRED' => date('Y-m-d', strtotime('+1 month ' . date('Y-m-d'))),
                'IS_ALL_LAYANAN' => 1,
                'IS_JASA_PART' => 1,
                'IS_JASA_LAIN' => 1,
                'CREATED_DATE' => DB::raw('NOW()'),
            ]);

            /* DB::connection('mysql_oto')->table('TASK_QUEUE')->insert([
                'TASK' => json_encode([
                    'action' => 'SEND MESSAGE',
                    'message' => $message,
                    'noPonsel' => $noPonsel
                ]),
            ]); */

            DB::commit();

            $message = 'Voucher Servis Telah di Klaim, Check Pesan Whatsapp untuk melihat Barcode Discount';
            return $this->successResponse([], $message);
        } catch (Throwable $e) {
            DB::rollBack();

            return $this->exceptionResponse($e);
        }
    }
}
