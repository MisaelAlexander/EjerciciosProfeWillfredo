import React from "react";
 import "../App.css";
const InputText = ({texto, type, value, onChange}) => {
    return (
        <>
 
        <label className="tituloCampo">{texto}</label>
        <input className="campo" type={type} value={value} onChange={onChange} />    
 
       
        </>
    )
}
 
export default InputText
 