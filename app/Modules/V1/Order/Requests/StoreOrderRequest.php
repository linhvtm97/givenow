<?php

namespace App\Modules\V1\Order\Requests;

use App\Modules\Request;

class StoreOrderRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'event_id' => 'required|exists:events,id',
            'products' => 'require|array',
            'products.*.product_id' => 'required|exists:products,id',
            'products.*.quantity' => 'required|integer',
            'products.*.money' => 'required|float',
        ];
    }

    /**
     * Add parameters to be validated
     *
     * @param array $keys Keys
     *
     * @return array
     */
    public function all($keys = null)
    {
        $data = parent::all($keys);
        return $data;
    }
}
