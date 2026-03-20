import '../App.css';
const Button = ({  texto, accion }) => {
  return <button className='boton' onClick={accion}>{texto}</button>;
};

export default Button;