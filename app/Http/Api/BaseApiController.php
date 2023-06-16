<?php

namespace App\Http\Api;

use App\Traits\TraitApiResponse;
use Illuminate\Routing\Controller;

class BaseApiController extends Controller {

    use TraitApiResponse;

    public function __construct() {
    }
}
