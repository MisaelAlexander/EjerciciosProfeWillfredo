import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Alumnos from './pages/Alumnos.jsx'
import Calculadora from './Pages/Calculadora.jsx'
import Carta from './Pages/carta.jsx'
import Cartas from './Pages/Cartas.jsx'
import Boton from './pages/Boton.jsx'
import Navbar from './components/Navbar.jsx'
function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/alumnos" element={<Alumnos />} default />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/cartas" element={<Cartas />} />
        <Route path="/boton" element={<Boton />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
