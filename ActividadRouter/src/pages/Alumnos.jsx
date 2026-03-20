import { useState } from 'react'
import Boton from '../components/Boton.jsx'
import InputText from '../components/InputText.jsx'
import Lista from '../components/Lista.jsx'
import '../App.css'

const Alumnos = () => {
  const [estudiante, setEstudiante] = useState({ nombre: "", edad: 0, carnet: "" })
  const [listadoEstudiantes, setListadoEstudiantes] = useState([])   

  const agregar = () => {
    setListadoEstudiantes([...listadoEstudiantes, estudiante]);
    setEstudiante({ nombre: "", edad: 0, carnet: "" });  
  }

  return (
    <>
    <h1>Lista de Estudiantes</h1>
    <InputText
      texto="Nombre"
      type="text"
      value={estudiante.nombre}
      
      onChange={(e) => setEstudiante({...estudiante, nombre: e.target.value})}/>

      <InputText
      texto="Edad"
      type="number"
      value={estudiante.edad}
      
      onChange={(e) => setEstudiante({...estudiante, edad: parseInt(e.target.value) || 0})}/>

      <InputText
      texto="Carnet"
      type="text"
      value={estudiante.carnet}
      
      onChange={(e) => setEstudiante({...estudiante, carnet: e.target.value})}/>

          <Boton texto="Agregar Estudiante" onClick={agregar} />

          <ul>
            
      {
    
          <Lista  listado={listadoEstudiantes}  />
          
      }
    </ul>
      </>
    
    
  )
}

export default Alumnos
