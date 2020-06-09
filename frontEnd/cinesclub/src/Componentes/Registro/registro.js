import React from 'react';
import './registro.css';
import Axios from 'axios';
import { Component } from 'react';

class Formulario extends Component{
state={
    

   
        fechaingreso:'',
        passw:'',
        identi:'',
        telefono:'',
        nombre:'',
        apellido:'',
        cedula:'',
        email:'',
        fechnaci:'',
    





}

enviarDatos = async(event)=> {
    console.log(this.state)
    event.preventDefault();
   
    const newUser = {

        fechaingreso:this.state.fechaingreso,
        passw:this.state.passw,
        identi:this.state.identi,
        telefono:this.state.telefono,
        nombre:this.state.nombre,
        apellido:this.state.apellido,
        cedula:this.state.cedula,
        email:this.state.email,
        fechnaci:this.state.fechnaci,
       
    };
    const res = await Axios.post('http://127.0.0.1:8000/usuarios/', newUser);
        
    console.log(res)
 }

 changeHanlder =(event) =>{
    this.setState({[event.target.name]: event.target.value})

}

 render(){

return(

<div >
   <section className='registro'>
       <form onSubmit={this.enviarDatos}>
        <h4>Registro</h4>

        <input 
            onChange={this.changeHanlder}
            name="nombre"
            className="controls"
            type="text"
            placeholder="Nombre"
        >
               

        </input>

        <input 
            onChange={this.changeHanlder}
            name="apellido" 
            className="controls"
            type="text"
            placeholder="Apellido"
          >

          </input>

        <input 
            onChange={this.changeHanlder}
            name="identi" 
            className="controls" 
            type="text" 
            placeholder="User">

        </input>

        <input 
            onChange={this.changeHanlder}
            name="passw" 
            className="controls"
            type="password"
            placeholder="contras">

          </input>

          <input 
            onChange={this.changeHanlder}
            name="fechaingreso" 
            className="controls"
            type="date"
            placeholder="Fecha Ingreso">

          </input>
          <input 
            onChange={this.changeHanlder}
            name="telefono" 
            className="controls"
            type="number"
            placeholder="Telefono">

          </input>

          <input 
            onChange={this.changeHanlder}
            name="cedula" 
            className="controls"
            type="number"
            placeholder="Cedula">

          </input>

          <input 
            onChange={this.changeHanlder}
            name="email" 
            className="controls"
            type="email"
            placeholder="Correo Electronico">

          </input>

          <input 
            onChange={this.changeHanlder}
            name="fechnaci" 
            className="controls"
            type="date"
            placeholder="Fecha de Nacimiento">

          </input>
      
      <button type="submit" >Registro</button>
      </form>
   </section>
   
    </div>
    
);

}
}

export default Formulario;


