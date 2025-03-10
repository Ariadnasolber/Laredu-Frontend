<?php

namespace Database\Seeders;

use App\Models\CalendarEvent;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class CalendarEventsTableSeeder extends Seeder
{
    public function run()
    {
        CalendarEvent::create([
            'title' => 'Inicio del Curso Laravel',
            'description' => 'Sesión introductoria sobre Laravel 11',
            'start' => Carbon::now()->addDays(2), // Fecha de inicio
            'end' => Carbon::now()->addDays(2)->addHours(2), // Fecha de fin (2h después)
            'user_id' => 1, // Asegúrate de que este usuario existe
        ]);
    }
}
