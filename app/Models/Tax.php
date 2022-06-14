<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tax extends Model
{
    protected $guarded = [];
    protected $table = 'taxes';

    public function tax()
    {
        return $this->hasMany(Tax::class,'tax_id');
    }
}