<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [
            'title' => [$this->method() === 'POST' ? 'required' : 'nullable' ,'string', 'max:255'],
            'thumbnail' => [$this->method() === 'POST' ? 'required' : 'nullable', 'image', 'mimes:jpeg,png,jpg,svg', 'max:2048'],
            'content' => [$this->method() === 'POST' ?  'required' : 'nullable', 'string'],
        ];
    }
}