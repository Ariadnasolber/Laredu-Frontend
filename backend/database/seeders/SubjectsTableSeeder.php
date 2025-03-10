<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Subject;
use App\Models\Course;
use App\Models\User;

class SubjectsTableSeeder extends Seeder
{
    public function run()
    {
        $teacher = User::whereHas('roles', function ($q) {
            $q->where('name', 'teacher');
        })->first();

        $course = Course::where('name', 'Curso de Laravel')->first();

        Subject::create([
            'name' => 'Introducción a Laravel',
            'course_id' => $course->id,
            'teacher_id' => $teacher->id,
        ]);

        Subject::create([
            'name' => 'Componentes en React',
            'course_id' => Course::where('name', 'Curso de React')->first()->id,
            'teacher_id' => $teacher->id,
        ]);
    }
}
