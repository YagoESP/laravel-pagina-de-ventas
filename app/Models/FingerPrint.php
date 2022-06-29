<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fingerprint extends Model
{
    protected $guarded = [];

    public function customers()
    {
        return $this->belongsTo(Customer::class);
    }
}