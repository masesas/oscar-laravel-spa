<?php

namespace App\Http\Controllers\Frontend;

use App\Enum\MessageType;
use App\Http\Requests\ClaimVoucherRequest;
use App\Models\BengkelPro\BarcodeDiscount;
use App\Models\BengkelPro\BengkelModel;
use App\Models\MessageTemplate;
use DB;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Throwable;

class BengkelAdsController extends Controller
{
    public function __construct()
    {
    }

    public function index($cid)
    {
        $bengkel = BengkelModel::query()
            ->select('*')
            ->selectRaw("'SERVIS LENGKAP + CUCI' AS NAMA_LAYANAN")
            ->where('CID', $cid)
            ->first();

        return Inertia::render('Frontend/BengkelAds', [
            'bengkel' => $bengkel
        ]);
    }

    public function claimVoucherStore(ClaimVoucherRequest $request)
    {
        $clientIP   = request()->ip();
        $qrCode     = '';
        $linkQrCode = 'https://otomotives.com/#/barcodeDisc/';
        $tglExpired = '';

        DB::connection('mysql_oto')->beginTransaction();

        try {
            /* $noPonsel = format_no_ponsel_62($request->noPonsel);
            if (empty($noPonsel)) {
                throw new \Exception('Nomor Yg Kamu Masukkan Tidak Valud, Masukkan No. Ponsel Yg Valid');
            } */

            $messageTemplate = new MessageTemplate();
            $bengkel         = BengkelModel::query()->where('CID', $request->cid)->first();

            /*  $checkAvailData = BarcodeDiscount::query()->whereRaw("PELANGGAN_ID = '$noPonsel' AND (STATUS_PAKAI IS NULL OR STATUS_PAKAI = '') AND JENIS_QR_CODE = 'GOOGLE ADS'")->count();
             if ($checkAvailData > 0) {
                 throw new \Exception("Kamu masih memiliki Voucher Aktif yg belum di gunakan, Lakukan servis di bengkel $bengkel->NAMA_BENGKEL untuk mendapatkan voucher discount yg lain");
             } */

            $discount   = '20';
            $qrCode     = md5(date('Y-m-d h:i:sa') . 'google_ads' . rand()) . md5(rand() . date('Y-m-d h:i:sa') . rand() . 'google_ads');
            $message    = $messageTemplate->discGoogleAds($bengkel->NAMA_BENGKEL, 'SERVIS LENGKAP', $discount, $qrCode);
            $linkQrCode = $linkQrCode . $qrCode;
            $tglExpired = date('Y-m-d', strtotime('+2 month ' . date('Y-m-d')));

            BarcodeDiscount::query()->insert([
                'CID'                => $request->cid,
                'JENIS_QR_CODE'      => 'GOOGLE ADS',
                'QR_CODE'            => $qrCode,
                'MESSAGE_NOTIFIKASI' => $message,
                'MESSAGE_WHATSAPP'   => $message,
                'DISCOUNT_PERCENT'   => $discount,
                'TANGGAL_EXPIRED'    => $tglExpired,
                'IS_ALL_LAYANAN'     => 1,
                'IS_JASA_PART'       => 1,
                'IS_JASA_LAIN'       => 1,
                'CREATED_DATE'       => DB::raw('NOW()'),
                //'PELANGGAN_ID'       => $noPonsel,
            ]);

            /* DB::connection('mysql_oto')->table('TASK_QUEUE')->insert([
                'TASK' => json_encode([
                    'action'   => 'SEND MESSAGE',
                    'message'  => $message,
                    'noPonsel' => $noPonsel
                ]),
            ]); */

            DB::connection('mysql_oto')->commit();

            $status = 'Berhasil Klaim Diskon Servis 20%';
        } catch (Throwable $e) {
            DB::connection('mysql_oto')->rollBack();

            $status = 'Voucher Gagal di Klaim, Error ' . $e->getMessage();
        }

        $messageType = message_to_type($status);
        $data        = $messageType === MessageType::ERROR
            ? []
            : (object) [
                'qr'         => $qrCode,
                'linkQr'     => $linkQrCode,
                'tglExpired' => date('d/m/Y', strtotime($tglExpired)),
            ];

        return redirect()
            ->back()
            ->with([
                'message' => $status,
                'type'    => $messageType->value,
                'data'    => $data,
            ]);
    }
}
