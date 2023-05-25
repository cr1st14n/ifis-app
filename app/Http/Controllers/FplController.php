<?php

namespace App\Http\Controllers;

use datatables;
use App\Models\fpl;
use App\Http\Requests\StorefplRequest;
use App\Http\Requests\UpdatefplRequest;

class FplController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function render()
    {
        //     $datos = fpl::filtro($this->filtros)
        //         ->orderBy('id', 'DESC')
        //         ->paginate(150);
        //     return view('livewire.fpl.fpl-mostrar', compact('datos'));
        $fpl = fpl::limit(10000)->get();
        return datatables()->of($fpl)->tojson();
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
