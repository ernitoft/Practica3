<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Interes; 

class InteresController extends Controller
{
    public function update(Request $request, $id)
    {
        try{
            $interes = Interes::where('id',$request->id)->update(
                [
                    'nombre'=>$request->nombre,
                    'descripcion'=>$request->descripcion,
                ]
            );
            return response()->json($interes,200);
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Error al actualizar el producto',
                'error' => $e->getMessage()
            ], 400);
        }
    }
}
