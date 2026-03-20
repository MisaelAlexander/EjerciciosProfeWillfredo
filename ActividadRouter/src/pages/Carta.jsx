import { useState } from 'react'
import '../App.css'
import Cartap from '../components/Carta.jsx'

function Carta() {


  return (
    <>
    <Cartap
    Imagen = {"../img/papa.jpg"}
    Nombre= "Misael Alexander Rivas López"
    Especialidad= "Estudiante de software"
    Fecha="2008/07/23"
    Ciudad="San Salvador"
    Descripcion=" Hola soy Misael Rivas, estudiante de tercer año de software."
    />
    </>
  )
}

export default Carta
