<?php

namespace App\Modules\V1\Product\Controllers;

use App\Modules\V1\Product\Services\ProductService;
use App\Modules\Controller as BaseController;
use App\Modules\Request;

class ProductController extends BaseController
{
    /**
     * ProductController constructor.
     *
     * @param ProductService $productService ProductService
     */
    public function __construct(ProductService $productService)
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
        $this->service = $productService;
    }
}
