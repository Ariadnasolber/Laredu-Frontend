// src/components/SubjectsList.tsx
import React, { useEffect, useState } from "react";

interface Subject {
    id: number;
    name: string;
    course_id: number;
    teacher_id: number;
}
export default function SubjectsList() {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/subjects", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => setSubjects(data))
            .catch(() => setError("Error al obtener las asignaturas"));
    }, []);
    return (
        <div className="mt-4 flex items-center justify-center flex-col">
            <h2 className="text-2xl font-bold mb-2 underline underline-offset-8 decoration-pink-600 mb-8">ASIGNATURAS</h2>
            {error && <p className="text-red-500">{error}</p>}
            <ul className="space-y-2">
                {subjects.map((subject) => (
                    <li
                        key={subject.id}
                        className="p-2 border rounded bg-white shadow w-100 flex justify-center align-center"
                    >
                        <strong>{subject.name}</strong> - ID Curso:
                        {subject.course_id}
                    </li>
                ))}
            </ul>
        </div>
    );
}
