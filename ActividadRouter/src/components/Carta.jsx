import '../App.css';


const Cartap = ({Imagen, Nombre, Especialidad, Fecha, Ciudad, Descripcion}) => {
    return (
    <div className='card'>
                <img className='cardimg' src= {Imagen} alt="una papa" />
            <div className='cardcont'>
                <h1>{Nombre}</h1>
                <h2><b>Especialidad:</b></h2>
                <h2><i>{Especialidad}</i></h2>
                <h3><b>Fecha de Nacimiento:</b> </h3>
                <h3>{Fecha}</h3>
                <h3><b>Ciudad</b></h3>
                <h3>{Ciudad}</h3>
                <h4>Descripcion:</h4>
                <p>{Descripcion}</p>
            </div>
        </div>
  );
};
export default Cartap;