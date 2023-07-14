<?php

namespace App\Http\Controllers\Base;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BaseAuthController extends Controller {

    public function _invoke_login(Request $request, callable $callback) {
        if (!is_callable($callback)) {
            throw new Exception('Invalid Request');
        }

        $this->validationException(Validator::make(
            [
                'username' => 'required',
                'password' => 'required'
            ],
            [
                'username.required' => 'Username Kosong',
                'password.required' => 'Password Kosong'
            ]
        ));

        $user = User::query()
            ->where('USERNAME', $request->username)
            ->where('PASSWORD', $request->password)
            ->first();

        return call_user_func($callback, $user);
    }
}
