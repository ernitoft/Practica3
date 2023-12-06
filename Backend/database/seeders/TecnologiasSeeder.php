<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tecnologias;
use App\Models\User;

class TecnologiasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tecnologias::create([
            'nombre'=> 'PHP',
            'level'=>'Básico',
            'year'=>2023,
            'user_id'=>User::where('nombre','Ernes Fuenzalida Tello')->first()->id,
        ]);

        Tecnologias::create([
            'nombre'=> 'Laravel',
            'level'=>'Básico',
            'year'=>2023,
            'user_id'=>User::where('nombre','Ernes Fuenzalida Tello')->first()->id,
        ]);

        Tecnologias::create([
            'nombre'=> 'HTML',
            'level'=>'Básico',
            'year'=>2023,
            'user_id'=>User::where('nombre','Ernes Fuenzalida Tello')->first()->id,
        ]);

        Tecnologias::create([
            'nombre'=> 'Java',
            'level'=>'Intermedio',
            'year'=>2022,
            'user_id'=>User::where('nombre','Ernes Fuenzalida Tello')->first()->id,
        ]);

        Tecnologias::create([
            'nombre'=> 'C#',
            'level'=>'Intermedio',
            'year'=>2022,
            'user_id'=>User::where('nombre','Ernes Fuenzalida Tello')->first()->id,
        ]);

        Tecnologias::create([
            'nombre'=> 'C++',
            'level'=>'Intermedio',
            'year'=>2022,
            'user_id'=>1,
        ]);
    }
}
