// src/components/CoursesList.tsx
import { useEffect, useState } from "react";
interface Course {
    id: number;
    name: string;
    description: string;
}
export default function CoursesList() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("No token found. Please log in.");
            return;
        }
        fetch("http://127.0.0.1:8000/api/courses", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch courses");
                }
                return res.json();
            })
            .then((data: Course[]) => {
                setCourses(data);
            })
            .catch((err) => setError(err.message));
    }, []);
    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="mt-4 flex items-center justify-center flex-col">
            <h2 className="text-2xl font-bold mb-8 underline underline-offset-8 decoration-blue-400">COURSES</h2>
            <ul className="space-y-2 flex items-center justify-center flex-col">
                {courses.map((course) => (
                    <li
                        key={course.id}
                        className="p-2 border rounded bg-white shadow w-100 flex justify-center align-center"
                    >
                        <strong>{course.name}</strong> -{course.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}
