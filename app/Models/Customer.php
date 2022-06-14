<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $guarded = [];
    protected $table = 'customers';

    public function customer_type()
    {
        return $this->belongsTo(CustomerType::class,'customer_type_id');
    }



}