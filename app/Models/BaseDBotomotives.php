<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BaseDBotomotives extends Model {

    protected $connection = 'mysql_oto';

    public $timeStamp = false;
}
