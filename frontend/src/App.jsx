import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio.jsx'
import Login from './pages/Login.jsx'
import Publicaciones from './pages/Publicaciones.jsx'

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />}/>
          <Route path="/publicaciones" element={<Publicaciones />}  />
        </Routes>
      </Router>
    </>
  )
}

export default App
