import React, {Component, useState} from 'react';
import './Body.css';
import Nav from './Nav.js';
import {Route} from 'react-router-dom';
import Viewspelis from './viewspeli.js';
import Registro from '../Registro/registro.js'



class Main extends Component{
  
render()
{
  
 
     
 return(  
   <React.Fragment>
    
      
      
 
  <Nav></Nav>

 
  <div className="Main">
 {/*En los componentes de los Route importaran lo que son Contactos Y Productos*/}
      <Route exact path="/viewspelis"  render={() =><Viewspelis get="http://127.0.0.1:8000/usuarios/" ></Viewspelis>}></Route>
      <Route exact path="/viewspelis/comedia" render={() =><Viewspelis get="http://127.0.0.1:8000/Diego2/" ></Viewspelis>}></Route>
      <Route exact path="/viewspelis/terror" render={() =><Viewspelis get="http://127.0.0.1:2000/usuarios/" ></Viewspelis>}></Route>
      <Route exact path="/viewspelis/accion" render={() =><Viewspelis get="http://127.0.0.1:2000/usuarios/" ></Viewspelis>}></Route>
      <Route exact path="/viewspelis/romance" render={() =><Viewspelis get="http://127.0.0.1:2000/usuarios/" ></Viewspelis>}></Route>
      <Route exact path="/viewspelis/drama" render={() =><Viewspelis get="http://127.0.0.1:2000/usuarios/" ></Viewspelis>}></Route>
      <Route exact path="/registro" component={Registro}></Route>
      <Route exact path="/contactos" component={Registro}></Route> {/*Cmabiar de Registro a Contactos*/}
      <Route exact path="/productos" component={Registro}></Route>  {/*Cmabiar de Registro a Productos*/}
      
      </div>
       
</React.Fragment>
 )


}


}


export default Main;