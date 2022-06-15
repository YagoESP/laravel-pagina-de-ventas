<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $guarded = [];
    protected $table = 'customers';

    public function sells()
    {
        return $this->hasMany(Sell::class);
    }

    public function fingerprints()
    {
        return $this->hasOne(Fingerprint::class);
    }

}