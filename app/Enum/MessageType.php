<?php

namespace App\Enum;

use Str;

enum MessageType : string
{
    case SUCCESS = 'success';
    case ERROR   = 'error';
    case WARNING = 'warning';
    case UNKNOWN = 'unknwon';

    public function fromStatus($message)
    {
        $message = strtolower($message);
        if (Str::contains('error', $message)) {
            return MessageType::ERROR;
        }

        return MessageType::SUCCESS;
    }
}
