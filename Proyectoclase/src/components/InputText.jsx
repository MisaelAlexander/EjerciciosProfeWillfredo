import React from "react";

const InputText = ({texto, type, value, onChange}) => {
    return (
        <>
 
        <label >{texto}</label>
        <input type={type} value={value} onChange={onChange} />    
 
       
        </>
    )
}
 
export default InputText
 