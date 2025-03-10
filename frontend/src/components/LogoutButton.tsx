// src/components/LogoutButton.tsx
interface LogoutButtonProps {
    onLogout: () => void;
}
export default function LogoutButton({ onLogout }: LogoutButtonProps) {
    return (
        <button onClick={onLogout} className="bg-zinc-800 text-white py-2 px-6 rounded hover:bg-red-500 cursor-pointer">Logout</button>
    );
}
