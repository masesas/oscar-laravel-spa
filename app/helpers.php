<?php

use App\Enum\MessageType;

if (! function_exists('legible_numb')) {
    function legible_numb($numb)
    {
        if ($numb >= 1000000) { // Million
            $legibleNumb = round(number_format($numb, 0, ',', '.'), 1) . 'M';
        } elseif ($numb >= 100000 && $numb < 1000000) { // One hundred thousand
            $legibleNumb = round(number_format($numb, 0, ',', '.'), 0) . 'K';
        } elseif ($numb >= 1000 && $numb < 100000) { // Ten thousand
            $legibleNumb = round(number_format($numb, 0, ',', '.'), 1) . 'K';
        } else {
            $legibleNumb = number_format($numb, 0, ',', '.');
        }

        return $legibleNumb;
    }
}

if (! function_exists('format_rupiah')) {
    function format_rupiah($value)
    {
        return 'Rp. ' . number_format($value, 0, ',', '.');
    }
}

if (! function_exists('format_only_number')) {
    function format_only_number($value)
    {
        if (empty($value)) {
            return 0;
        }

        return preg_replace('/[^0-9]/', '', $value);
    }
}

if (! function_exists('format_no_ponsel_62')) {
    function format_no_ponsel_62($noPonsel)
    {
        if (! isset($noPonsel) || $noPonsel == null || empty($noPonsel)) {
            return '';
        }

        if (! Str::startsWith($noPonsel, '0') && (! Str::startsWith($noPonsel, '62') || ! Str::startsWith($noPonsel, '+62'))) {
            return '';
        }

        if (Str::startsWith($noPonsel, '8')) {
            $noPonsel = '62' . $noPonsel;
        }

        if (strlen($noPonsel) >= 9 && substr($noPonsel, 0, 2) !== '62') {
            if (substr($noPonsel, 0, 1) === '0') {
                $noPonsel = '62' . substr($noPonsel, 1);
            } else {
                if (substr($noPonsel, 0, 1) === '+') {
                    $noPonsel = substr($noPonsel, 1);
                } else {
                    $noPonsel = implode('', insert_array_specific_index(str_split($noPonsel), 0, 62));
                }
            }
        }

        return $noPonsel;
    }
}

if (! function_exists('insert_array_specific_index')) {
    function insert_array_specific_index($array, $index, $val)
    {
        $size = count($array);
        if (! is_int($index) || $index < 0 || $index > $size) {
            return -1;
        } else {
            $temp   = array_slice($array, 0, $index);
            $temp[] = $val;

            return array_merge($temp, array_slice($array, $index, $size));
        }
    }
}

if (! function_exists('message_to_type')) {

    function message_to_type($message) : MessageType
    {
        $message = strtolower($message);
        if (Str::contains('error', $message)) {
            return MessageType::ERROR;
        }

        return MessageType::SUCCESS;
    }
}
