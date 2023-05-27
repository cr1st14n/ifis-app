<?php

namespace App\Http\Controllers;

use datatables;
use App\Models\fpl;
use App\Http\Requests\StorefplRequest;
use App\Http\Requests\UpdatefplRequest;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class FplController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function render(Request $request)
    {
        switch ($request->input('tipo')) {
            case '1':
                $year = $request->input('year');
                $month = $request->input('month');
                $query = fpl::query();

                $query->whereMonth('fechaHora', $month);
                $query->whereYear('fechaHora', $year);

                break;
            case '2':
                $f1 = $request->input('f1');
                $f2 = $request->input('f2');
                $ma = $request->input('m');
                $query = fpl::query();
                $query->where('c1', 'iLike', $ma . '%');
                $query->whereBetween('fechaHora', [$f1, $f2]);
                break;

            default:
                # code...
                break;
        }
        return datatables()
            ->eloquent($query)
            ->toJson();
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorefplRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(fpl $fpl)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(fpl $fpl)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatefplRequest $request, fpl $fpl)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(fpl $fpl)
    {
        //
    }
}
