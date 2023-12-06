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

    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

    public function show(User $user)
    {
        return $user;
    }

    public function update(Request $request, User $user)
    {
        try{
            $user = User::find($user->id);
            $fields  = $request->validate([
                'nombre'=>'required|string',
                'correo'=>'required|email',
                'edad'=>'required|string',
                'carrera'=>'required|string',
                'ciudad'=>'required|string',
                'pais'=>'required|string',
            ]);
            $usuario->update($fields);
            return response()->json($usuario,200);
        }catch(\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }

}
