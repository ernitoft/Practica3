<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tecnologias;

class TecnologiasController extends Controller
{
    //

    public function index()
    {

    }

    public function update(Request $request, $id)
    {
        try{
            $tecn = Tecnologias::where('id',$request->id)->update(
            [
                'nombre'=>$request->nombre,
                'level'=>$request->level,
                'year'=>$request->year,
            ]);
            return response()->json($tecn,200);
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Error al actualizar el producto',
                'error' => $e->getMessage()
            ], 400);        }
    }
}
