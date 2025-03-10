<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        // Crear un usuario admin
        $admin = User::create([
            'name' => 'Administrator',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin123'),
        ]);
        $admin->roles()->attach(Role::where('name', 'admin')->first()->id);

        // Crear un usuario profesor
        $teacher = User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => Hash::make('teacher123'),
        ]);
        $teacher->roles()->attach(Role::where('name', 'teacher')->first()->id);

        // Crear un usuario estudiante
        $student = User::create([
            'name' => 'Jane Student',
            'email' => 'jane@example.com',
            'password' => Hash::make('student123'),
        ]);
        $student->roles()->attach(Role::where('name', 'student')->first()->id);
    }
}

