
import './App.css';
// import CalculadoraLogo from  './asset/imagenes/calculator.png';
import Boton from './components/Boton'
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import { useState } from 'react';



function App() {


  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  //Evaluar input con mathjs
  const calcularResultado = async () => {
    if (input){
      const respuesta = await fetch(`http://localhost:4000/operacion/${input}`);
      const resultado = await respuesta.json();
      setInput(resultado.resultado);
      console.log(resultado);
    } else {
      alert("Por favor ingrese valores para realizar los cálculos");
    } 
     
  };

  return (
    <div className="App">

      <div className='calculadora-logo-contenedor'>
        <img
          src={''}
          className='calculadora-logo'
          alt='Logo de calculadora' />
      </div>

      <div className='contenedor-calculadora'>

        <Pantalla input={input}/>

          <div className='fila'>
            {/* pasar funcion como un props */}
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            {/* Reiniciar estado a cadena de caracteres basia */}
            <BotonClear manejarClear={() => setInput('')}>
              Clear
            </BotonClear>
          </div>
          
      </div>

    </div>
  );
}

export default App;
