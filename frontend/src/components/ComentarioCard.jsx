const ComentarioCard = ({ comentario }) => { 
    return (
        <article
            tabIndex={0}
            className="group mx-auto w-full max-w-sm overflow-hidden rounded-2x1 border border-white/40 bg-white/65"
        >
            <div className="space-y-3 p-4 text-left">
                <div className="flex items-start justify-between gap-3">
                    <h3>Titulo</h3>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                    </div>
                    <p>{comentario.title}</p>
                </div>

                <br />

                <div className="grid gap-2 text-sm text-slate-600">
                    <h3>Comentario</h3>
                    <p className="text-sm text-slate-600">{comentario.body}</p>
                </div>
            </div>
        </article>
    )
}

export default ComentarioCard