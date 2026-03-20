import { useState } from 'react'
import './App.css'
import Boton from './components/Boton.jsx'
import InputText from './components/InputText.jsx'
function App() {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [tarea, setTarea] = useState("")
  const [listadotarea, setListadoTarea] = useState([])

  const agregarTarea = () => {
    setListadoTarea([...listadotarea, tarea]);
    setTarea("");
  }


  const sumar = () => {
    let suma = numero1 + numero2
    setResultado(suma)
  }

  const restar = () => {
    let resta = numero1 - numero2
    setResultado(resta)
  }

const multiplicar = () => {
    let multi = numero1 * numero2
    setResultado(multi)
  }
  
  const dividir = () => {
    let div = numero1 / numero2
    setResultado(div)
  }
  return (
    <>
    <h1>Suma de dos numeros utilizando useState</h1>
    <InputText texto="Número 1" type="number" value={numero1} onChange={(e) => setNumero1(Number(e.target.value) || 0)} />
    <InputText texto="Número 2" type="number" value={numero2} onChange={(e) => setNumero2(Number(e.target.value) || 0)} />
    <Boton texto="Sumar" onClick={sumar}></Boton>
    <Boton texto="Restar" onClick={restar}></Boton>
    <Boton texto="Multiplicar" onClick={multiplicar}></Boton>
    <Boton texto="Dividir" onClick={dividir}></Boton>
    <p>Resultado: {resultado}</p>
    
    <h1>Listado de Tareas</h1>
    <InputText
    texto="Tarea"
    type="text"
    value={tarea}
    onChange={(e) => setTarea(e.target.value)}/>
    <Boton texto="Agregar Tarea" onClick={agregarTarea} />

    <ul>
      {
        listadotarea.map((tarea, index) => (
          <li key={index}>{tarea} <Boton texto="x" onClick={() => eliminarTarea(index)} /></li>
        ))
      }
    </ul>
    </>
  )
}

export default App
