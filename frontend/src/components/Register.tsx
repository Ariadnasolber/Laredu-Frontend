// src/components/Register.tsx
import React, { useState } from "react";
export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student"); // Por defecto,estudiante;
    const [message, setMessage] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, role }),
        })
            .then((res) => res.json())
            .then(() => setMessage("Usuario registrado con éxito"))
            .catch(() => setMessage("Error en el registro"));
    };
    return (
        <div className="w-screen h-screen flex items-center justify-center align-center bg-zinc-900">
            <div className="bg-white h-110 px-10 rounded shadow w-100 flex align-center justify-center flex-col">
                <h2 className="text-xl flex justify-center font-bold mb-10">REGISTER</h2>
                {message && <p className="text-red-500 mb-2">{message}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col spacey-3 gap-3">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="border p-2 rounded focus:outline-pink-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded focus:outline-pink-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="border p-2 rounded focus:outline-pink-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="role" className="sr-only">
                    Role
                </label>
                <select
                    id="role"
                    className="border p-2 rounded focus:outline-pink-500"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="student">Estudiante</option>
                    <option value="teacher">Profesor</option>
                </select>
                <button
                    type="submit"
                    className="bg-pink-600 text-white p-2 rounded hover:bg-pink-700"
                >
                    Registrarse
                </button>
                <p className="flex justify-center">Already have an account? <a className="ml-3 underline decoration-pink-500" href="/Login"> Login</a></p>
            </form>
        </div>
    </div>
    );
}
