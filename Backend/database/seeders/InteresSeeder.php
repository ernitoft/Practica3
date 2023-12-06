<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Interes;
use App\Models\User;
class InteresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Interes::create([
            'nombre'=> 'Desarrollo Web',
            'descripcion'=>'Me encanta el desarrollo web; es como construir cosas en el mundo digital. Creando sitios web y aplicaciones. Siempre estoy aprendiendo',
            'user_id'=>User::where('nombre','Ernes Fuenzalida Tello')->first()->id,
        ]);
        Interes::create([
            'nombre'=> 'Basketball',
            'descripcion'=>'El baloncesto es mi pasión. Ya sea jugando en la cancha o viendo partidos, disfruto de la estrategia y la emoción del juego.',
            'user_id'=>User::where('nombre','Ernes Fuenzalida Tello')->first()->id,
        ]);

        Interes::create([
            'nombre'=> 'Musica',
            'descripcion'=>'Disfruto explorando diferentes géneros y artistas, desde la tranquilidad de la música clásica hasta los ritmos animados del hip-hop.',
            'user_id'=>User::where('nombre','Ernes Fuenzalida Tello')->first()->id,
        ]);

    }
}
