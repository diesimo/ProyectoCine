import React,{Fragment, useState} from 'react';
import './registro.css';
import axios from 'axios';
import { Component } from 'react';

const Formulario =() => {

    const [datos,setDatos]=useState({
        nombre:'',
        apellido:'',
        username:'',
        password:'',
        dateingreso:'',
        telefono:'',
        cedula:'',
        email:'',
        fechanaci:'',


    })
const handleInputChange=(event)=>{

    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}
 const enviarDatos =(event)=> {

    event.preventDefault();
    console.log(this.datos)
    axios.post('http://127.0.0.1:8000/usuarios/')

 }

 

return(
<Fragment>
<div >
   <section className='registro'>
       <form onSubmit={enviarDatos}>
        <h4>Registro</h4>

        <input 
            onChange={handleInputChange}
            name="nombre"
            className="controls"
            type="text"
            placeholder="Nombre"
        >
               

        </input>

        <input 
            onChange={handleInputChange}
            name="apellido" 
            className="controls"
            type="text"
            placeholder="Apellido"
          >

          </input>

        <input 
            onChange={handleInputChange}
            name="username" 
            className="controls" 
            type="text" 
            placeholder="User">

        </input>

        <input 
            onChange={handleInputChange}
            name="password" 
            className="controls"
            type="password"
            placeholder="contras">

          </input>

          <input 
            onChange={handleInputChange}
            name="dateingreso" 
            className="controls"
            type="date"
            placeholder="Fecha Ingreso">

          </input>
          <input 
            onChange={handleInputChange}
            name="telefono" 
            className="controls"
            type="number"
            placeholder="Telefono">

          </input>

          <input 
            onChange={handleInputChange}
            name="cedula" 
            className="controls"
            type="number"
            placeholder="Cedula">

          </input>

          <input 
            onChange={handleInputChange}
            name="email" 
            className="controls"
            type="email"
            placeholder="Correo Electronico">

          </input>

          <input 
            onChange={handleInputChange}
            name="fechanaci" 
            className="controls"
            type="date"
            placeholder="Fecha de Nacimiento">

          </input>
      
      <button type="submit" >Registro</button>
      </form>
   </section>
   
    </div>
    </Fragment>
);

}

export default Formulario;


