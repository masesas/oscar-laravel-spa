<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BengkelModel extends Model
{
    use HasFactory;

    protected $connection = 'mysql_oto';

    protected $table = 'BENGKEL';

    public $timeStamp = false;
}
