<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClaimVoucherRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array {
        return [
            'cid' => ['required', 'string'],
            //'noPonsel' => ['required', 'string',],
        ];
    }

    public function messages(): array {
        return [
            'cid.required' => 'Bengkel Tidak Valid',
            //'noPonsel.required' => 'No. Ponsel Tidak Valid'
        ];
    }
}
