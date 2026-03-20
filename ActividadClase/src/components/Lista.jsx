import React from "react";
import "../App.css";
const Lista = ({ listado }) => {
    return (
        listado.map((item,  index) => (
          <li className="lista" key={index}> {"Nombre: "} {item.nombre} | {"Edad: "} {item.edad} | {"Carnet: "} {item.carnet} <button >X</button></li>
        ))
    )
}
export default Lista;