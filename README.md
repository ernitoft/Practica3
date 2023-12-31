# Practica 3: Introducción al Desarrollo Web/Móvil

Esta es la última práctica del curso de Introducción al Desarrollo Web Móvil. En esta práctica, implementaremos un sistema utilizando las siguientes tecnologías:


Tecnologías Utilizadas
================================================================================================================
Gestión de Base de Datos:
- XAMPP
  
Backend:
- Composer
- Laravel 10
  
Frontend:
- Node.js 18.10
- Ionic

Repositorio:
- GIT

GIT
================================================================================================================
Asegúrate de tener GIT instalado en tu sistema. Puedes descargarlo en: https://git-scm.com/downloads

Composer
================================================================================================================
Asegúrate de tener Composer instalado en tu sistema. Puedes descargarlo en: https://getcomposer.org/download/

Node.js (v18.10)
================================================================================================================
Asegúrate de tener Node instalado en tu sistema. Puedes descargarlo en: https://nodejs.org/en/blog/release/v18.10.0

Configuración del Entorno
================================================================================================================
- Clona este repositorio en tu máquina local: 

		git clone https://github.com/ernitoft/taller2_iwm

XAMPP
================================================================================================================
Asegúrate de tener XAMPP instalado en tu sistema. Puedes descargarlo en: "https://www.apachefriends.org/es/download.html". Utilizaremos XAMPP para la gestión de la base de datos.

Laravel 10 (https://laravel.com)
================================================================================================================

- Navega al directorio del backend:

		cd backend

- Instala las dependencias de Laravel:

		composer install
  
- Copia el archivo .env:

  		copy .env.example .env


- Genera la key de laravel:

  		php artisan key:generate


- Configura el archivo .env con la información de tu base de datos solo si es necesario (el nombre, los puertos usados).

- Ejecuta las migraciones y los seeders para inicializar la base de datos con datos predefinidos.
  
      php artisan migrate

      php artisan db:seed

IONIC (Angular)
================================================================================================================
- Ejecuta globalmente la siguiente instrucción:
  
		npm install -g @ionic/cli
  
- Navega al directorio del frontend:

		cd mobile

- Instala las dependencias de Angular:

		npm install
  
Iniciar la Aplicación
================================================================================================================

Backend (Laravel):

- Ejecuta el servidor de Laravel.

		php artisan serve
El servidor se iniciará en http://localhost:8000.

IONIC (Angular):

- En otra terminal, ejecuta el servidor de desarrollo de Angular.

		ionic serve --o
El servidor se iniciará en http://localhost:4200.

- Ingrese a inspecionar elemento y ponga la página en dispositivo móvil.
