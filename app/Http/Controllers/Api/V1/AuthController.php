<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Base\BaseAuthController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Log;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends BaseAuthController {
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]); //login, register methods won't go through the api guard
    }

    // * @POST
    public function login(Request $request) {
        return $this->_invoke_login($request, function ($user) {
            if (!$token = JWTAuth::fromUser($user)) {
                return $this->errorResponse('Email atau Password Salah', [], Response::HTTP_UNAUTHORIZED);
            }

            return $this->successResponse($user, '', $token);
        });
    }
}
