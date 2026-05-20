import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../components/Navbar.jsx";

const Inicio = () => {

    const navigate = useNavigate() // Hook de react-router para redirigir programáticamente.
    const token = localStorage.getItem('fakestore_token') || sessionStorage.getItem('fakestore_token')
    // El usuario puede haber elegido guardar la sesión en localStorage o sessionStorage.
    const user = localStorage.getItem('fakestore_user') || sessionStorage.getItem('fakestore_user') || ''

    useEffect(() => {
        // Si no hay token, redirige al login.
        if (!token) {
        navigate('/')
        }
    }, [navigate, token])

    const handleLogout = () => {
        // Borra todos los datos de sesión del almacenamiento local y de sesión.
        localStorage.removeItem('fakestore_token')
        localStorage.removeItem('fakestore_user')
        localStorage.removeItem('fakestore_email')
        sessionStorage.removeItem('fakestore_token')
        sessionStorage.removeItem('fakestore_user')
        sessionStorage.removeItem('fakestore_email')
        navigate('/') // Redirige al login después de cerrar sesión.
    }
    return(
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Nav />
            <div className="flex flex-col items-center justify-center flex-grow">
                <header className="text-center">
                    <h1 className="text-4xl font-bold text-blue-600">
                        Bienvenido {user ? `, ${user}` : ''}
                    </h1>
                    <p className="mt-4 text-gray-700">Este es el inicio del foro de la comunidad</p>
                </header>
                <main className="mt-8">
                <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                    <Link to="/publicaciones">
                    Ir a publicaciones
                    </Link>
                </button>
                <button onClick={handleLogout} className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                    Cerrar Sesión
                </button>
                </main>
            </div>
        </div>
    )
}

export default Inicio;