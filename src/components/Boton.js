import React from 'react';
import '../asset/css/Boton.css'

//Componente funcional
function Boton(props){

  
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

  return (
    <div
    //Si el valor retornado es verdadero se considera un operador
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}

    //Agregar el valor del props(boton) llamando a una funcion anonima
    onClick={() => props.manejarClic(props.children)}>
        {props.children}
    </div>
  ) 
}

export default Boton