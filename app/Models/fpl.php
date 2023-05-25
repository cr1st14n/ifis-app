<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class fpl extends Model
{
    use HasFactory;
    protected $connection = 'pgsql_ifis';
    protected $table = 'fpls';

    //query scopes
    public function scopeFiltro($query, $filtros)
    {
        $query->when($filtros['c1'] ?? null, function ($query, $c1) {
            $query->where('c1', 'ILIKE', $c1 . '%');
        })->when($filtros['fromDate'] ?? null, function ($query, $fromDate) {
            $query->where('fechaHora', '>=', $fromDate);
        })->when($filtros['toDate'] ?? null, function ($query, $toDate) {
            $query->where('fechaHora', '<=', $toDate);
        });
    }
}
