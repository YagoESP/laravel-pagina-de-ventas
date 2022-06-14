<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sell extends Model
{
    protected $guarded = [];
    protected $table = 'sells';

    public function sell()
    {
        return $this->belongsTo(Sell::class,'sell_id');
    }

}