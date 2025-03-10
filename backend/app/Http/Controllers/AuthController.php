<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Registrar un nuevo usuario.
     */
    public function register(Request $request)
    {
        // Validación de los datos del usuario
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Crear el usuario
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'Usuario registrado exitosamente',
            'user' => $user,
        ], 201);
    }

    /**
     * Iniciar sesión.
     */
    public function login(Request $request)
    {
        // Validación de los datos de login
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        // Verificar que el usuario exista y la contraseña sea correcta
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Las credenciales proporcionadas son incorrectas.'],
            ]);
        }

        // Crear un token para el usuario
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Inicio de sesión exitoso',
            'token' => $token,
            'user' => $user,
        ], 200);
    }

    /**
     * Cerrar sesión.
     */
    public function logout(Request $request)
    {
        // Revocar todos los tokens del usuario autenticado
        $request->user()->tokens->each(function ($token) {
            $token->delete();
        });

        return response()->json([
            'message' => 'Sesión cerrada exitosamente',
        ], 200);
    }

    /**
     * Obtener los datos del usuario autenticado.
     */
    public function me(Request $request)
    {
        return response()->json([
            'user' => $request->user(),
        ], 200);
    }
}