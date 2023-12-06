<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'nombre'=> 'Ernes Fuenzalida Tello',
            'edad'=>21,
            'correo'=>'ernes.fuenzalida@alumnos.ucn.cl',
            'carrera'=>'Ingeniería Civil en Computación e Informática',
            'ciudad' =>'Tocopilla',
            'pais' =>'Chile',
        ]);
    }
}
