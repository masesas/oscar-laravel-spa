<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BaseDBotomotives extends Model {

    protected $connection = 'mysql_oto';

    public $timeStamp = false;


    public const CREATED_AT = null;

    public const UPDATED_AT = null;
}
