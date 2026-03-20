import { useState } from 'react'
import '../App.css'
import Cartap from '../components/Carta.jsx'

function Cartas() {
  const datosTarjetas = [
  {
    Imagen:"../img/papa.jpg",
    Nombre: 'Ana García',
    Especialidad: 'Desarrolladora Frontend',
    Fecha: '1995-06-12',
    Ciudad: 'San Salvador',
    Descripcion: 'Apasionada por React y el diseño UI.'
  },
  {
    Imagen: "../img/papa.jpg",
    Nombre: 'Carlos Ruiz',
    Especialidad: 'Backend Developer',
    Fecha: '1992-09-25',
    Ciudad: 'Santa Ana',
    Descripcion: 'Experto en Node.js y bases de datos.'
  },
  {
    Imagen: "../img/papa.jpg",
    Nombre: 'Laura Méndez',
    Especialidad: 'Diseñadora UX/UI',
    Fecha: '1998-03-17',
    Ciudad: 'San Miguel',
    Descripcion: 'Creativa y enfocada en la experiencia de usuario.'
  }
];
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {datosTarjetas.map((tarjeta, index) => (
<Cartap
    key={index}
    Imagen = {tarjeta.Imagen}
    Nombre= {tarjeta.Nombre}
    Especialidad= {tarjeta.Especialidad}
    Fecha={tarjeta.Fecha}
    Ciudad= {tarjeta.Ciudad}
    Descripcion={tarjeta.Descripcion}
    />
      ))}
    </div>
  )
}

export default Cartas
