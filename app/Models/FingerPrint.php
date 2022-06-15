<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FingerPrint extends Model
{
    protected $guarded = [];
    protected $table = 'finger_prints';

    public function customers()
    {
        return $this->belongsTo(Customer::class);
    }
}