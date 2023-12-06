<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return User::with(['tecnologias',
        'interes'])->get();
    }

    public function update(Request $request,$id)
    {
        try{

            $usuario = User::where('id',$request->id)->update(
                [
                    'nombre'=>$request->nombre,
                    'correo'=>$request->correo,
                    'edad'=>$request->edad,
                    'carrera'=>$request->carrera,
                    'ciudad'=>$request->ciudad,
                    'pais'=>$request->pais,
                ]
            );
            return response()->json($usuario,200);
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Error al actualizar el producto',
                'error' => $e->getMessage()
            ], 400);
        }
    }

}
