// src/components/Navbar.tsx
// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
interface NavbarProps {
    onLogout: () => void;
}
export default function Navbar({ onLogout }: NavbarProps) {
    return (
        <nav
            className="bg-zinc-900 text-white p-6 flex justify-between
items-center shadow-lg"
        >
            <div className="flex items-center space-x-4">
                <img className="px-8" src="../src/assets/LAREDU.svg" alt="" />
                <Link className="hover:underline decoration-sky-500" to="/courses">
                    Cursos
                </Link>
                <Link className="hover:underline decoration-pink-500" to="/subjects">
                    Asignaturas
                </Link>
                <Link className="hover:underline decoration-green-500" to="/assignments">
                    Tareas
                </Link>
                <Link className="hover:underline decoration-orange-500" to="/submissions">
                    Entregas
                </Link>
                <Link className="hover:underline decoration-red-500" to="/messages">
                    Mensajes
                </Link>
            </div>
            <LogoutButton onLogout={onLogout} />
        </nav>
    );
}
