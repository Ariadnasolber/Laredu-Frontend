<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Assignment;
use App\Models\Subject;

class AssignmentsTableSeeder extends Seeder
{
    public function run()
    {
        $subject = Subject::where('name', 'Introducción a Laravel')->first();

        Assignment::create([
            'title' => 'Primer Proyecto Laravel',
            'description' => 'Crear un sistema CRUD en Laravel',
            'subject_id' => $subject->id,
            'due_date' => now()->addDays(7),
        ]);

        Assignment::create([
            'title' => 'Hooks en React',
            'description' => 'Explicar el uso de useState y useEffect',
            'subject_id' => Subject::where('name', 'Componentes en React')->first()->id,
            'due_date' => now()->addDays(10),
        ]);
    }
}
