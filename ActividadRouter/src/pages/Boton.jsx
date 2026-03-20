import { useState } from 'react'
import '../App.css'
import Boton2 from '../components/Boton2.jsx'
import Alert from '../components/Alert.jsx'
import Input from '../components/Input'

const  Botons = () => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [Texto, setTexto] = useState('');
  const [Texto1, setTexto1] = useState('');
  const Alerta = () => {
    setMostrarAlerta(!mostrarAlerta);
  };
  return (
    <>
    <Input valor={Texto} onChange={setTexto} />
    <Input valor={Texto1} onChange={setTexto1} />
     <Boton2
         texto="Accion"
         accion = {Alerta}
       />
       {mostrarAlerta && ( <Alert mensaje={`¡Aca va la answer!: ${Texto}  y ${Texto1}`}  />)}
    </>
  )
}

export default Botons
