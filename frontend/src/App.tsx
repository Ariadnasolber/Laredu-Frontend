// src/App.tsx
import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import CoursesList from "./components/CoursesList";
import SubjectsList from "./components/SubjectsList";
import AssignmentsList from "./components/AssignmentsList";
import SubmissionsList from "./components/SubmissionsList";
import MessageList from "./components/MessageList";
import Navbar from "./components/Navbar";

export default function App() {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token")
    );
    const handleLoginSuccess = (receivedToken: string) => {
        localStorage.setItem("token", receivedToken);
        setToken(receivedToken);
    };
    const handleLogout = () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        fetch("http://127.0.0.1:8000/api/logout", {
            method: "POST",
            headers: { Authorization: "Bearer " + token },
        })
            .then(() => {
                localStorage.removeItem("token");
                setToken(null);
            })
            .catch((err) => console.error(err));
    };
    return (
        <Router>
            <div className="min-h-screen bg-zinc-300 p-0">
                {!token ? (
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Login onLoginSuccess={handleLoginSuccess} />
                            }
                        />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                ) : (
                    <>
                        {token && <Navbar onLogout={handleLogout} />}
                        <div className="p-4">
                            <Routes>
                                <Route
                                    path="/courses"
                                    element={<CoursesList />}
                                />
                                <Route
                                    path="/subjects"
                                    element={<SubjectsList />}
                                />
                                <Route
                                    path="/assignments"
                                    element={<AssignmentsList />}
                                />
                                <Route
                                    path="/submissions"
                                    element={<SubmissionsList />}
                                />
                                <Route
                                    path="/messages"
                                    element={<MessageList />}
                                />
                                <Route
                                    path="*"
                                    element={<Navigate to="/courses" />}
                                />
                            </Routes>
                        </div>
                    </>
                )}
            </div>
        </Router>
    );
}
