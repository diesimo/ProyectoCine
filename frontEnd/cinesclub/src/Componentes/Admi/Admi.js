import React, {Component} from 'react';
import Nav from './NavAdmi.js'
import './Admi.css'
import {Route, Router} from 'react-router-dom';
import Agregar from './AgregarPelicula.js'
import AdmiP from './VistaPeliculas.js'
import RegisF from './RegisFun.js'
import RegisP from './IngresarProductos.js'
import Prove from './Provedor.js'

class Admi extends Component {


render(){

return(
    <React.Fragment>
    <div className='Prueba'>
        <div className="nav">
        <Nav></Nav>
        </div>
        
      
        <div className="Blanco">

            <Route exact path="/admi/AgregarP" component={Agregar}></Route>
            <Route exact path="/admi/AdmiP" component={AdmiP}></Route>
            <Route exact path="/admi/RegisF" component={RegisF}></Route>
            <Route exact path="/admi/RegisP" component={RegisP}></Route>
            <Route exact path="/admi/Prove" component={Prove}></Route>

        </div>
  
    </div>
    </React.Fragment>
)

}





}

export default Admi