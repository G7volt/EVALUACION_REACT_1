import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import ComentarioCard from "../components/ComentarioCard.jsx"

const publicaciones = () => {
    const API_URL = "https://jsonplaceholder.typicode.com/posts"
    const [comentarios, setComentarios] = useState([]);//array vacio de datos
    const [loading, setLoading] = useState(true);//Carga inicial de datos

    const fetchComentarios = async () => {
        try {
            const response = await fetch(API_URL);//solicitud a la API
            if(!response.ok){
                throw new Error("Error al Cargar los comentarios")
            }
            const data = await response.json();//convierte los datos a formato json
            console.log(data);
            setComentarios(Array.isArray(data.results) ? data.results : []);//actualiza el estado de comentarios con los datos
        } catch (error) {
            console.error("Error fetching comentarios: ", error);
        }finally{
            setLoading(false)//deja de cargar los datos
        }
    }

    useEffect(() => {
        fetchComentarios(); //llama a la función para obtener los comentarios al montar el componente
    }, [])

    return (
        <div>
            <h1 className="text-center text-2xl">Publicaciones</h1>
            <button className="flex items-right gap-2 rounded-md bg-[#9FC9FF] px-4 py-2 text-white hover:bg-blue-600 transition">
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                Publicar Comentario
                </Link>
            </button>

            {loading ? (
                <p className="text-center mt-4">Cargando comentarios...</p>
            ): (
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                    
                    {comentarios.map((comentarios) => (
                        <ComentarioCard key = {comentarios.id} comentario={comentarios}/>
                    ))}
                     
                </div>
            )}
        </div>
    )
}

export default publicaciones;