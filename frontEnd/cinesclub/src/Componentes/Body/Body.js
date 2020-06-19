import React, {Component, useState} from 'react';
import './Body.css';

import Peliculas from '../Peliculas/peliculas';
import Viewspeli from './viewspeli.js';
import Registro from '../Registro/registro.js';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {faHome, faFilm, faPhone} from '@fortawesome/free-solid-svg-icons';


class Main extends Component
{
    constructor(props){
        super(props);
        this.selectCategoria=this.selectCategoria.bind(this);
       
    }
    
  selectCategoria = (val) => {
    
    
    if(val==="Comedia")
    {
      const di=" 'http://127.0.0.1:8000/pelicula/'"
      
        return di
    }
    else if(val==="Terror")
    {
        return val
    }
    else{
        return val
    }
    

  }


render()
{
    

     
 return( 
 <Router>
<div className='cuerpo'> 

  <header>
  <div className="Barra">
     
        <nav>
            <ul>
            <li><Link to="/pelis"><span className=""><i className="icon"><FontAwesomeIcon className="faHome" icon={faHome}></FontAwesomeIcon></i></span>Home</Link></li>
                    <li><Link  to="./viewspelis"><span className=""><i className="icon"><FontAwesomeIcon className="faFilm" icon={faFilm}></FontAwesomeIcon></i></span>Peliculas</Link>
                        <ul>
                           
                            <li onClick={this.selectCategoria.bind(this,"Comedia")} >< Link  to="./viewspelis/comedia"  >Comedia</Link></li>
                            <li onClick={this.selectCategoria.bind(this,"Terror")}><Link>Terror</Link></li>
                            <li value="Drama" ><Link>Drama</Link></li>
                            <li value="Romance"><Link>Romance</Link></li>
    
                        </ul>
                    
                    </li>
                    <li><Link to="/pelis" ><span><i className="icon"><FontAwesomeIcon className="faPhone" icon={faPhone}></FontAwesomeIcon></i></span>Contactos</Link></li>
                    <li><Link  to="/pelis" ><span><i className="icon"></i></span>Productos</Link></li>
                    <li><Link  to="/pelis" ><span><i className="icon"></i></span>Registro</Link></li>
    
            </ul>
        </nav>
    
                   
        </div>

  </header>

        
        <div className="Main">
        
        <main>

               

        </main>

        <Route path="/pelis/" exact stric>
                <Peliculas></Peliculas>
               
      </Route>
      <Route path="/viewspelis/" exact stric>
        <Viewspeli categoria={this.selectCategoria()} comedia="'http://127.0.0.1:8000/pelicula/'"> </Viewspeli>
               
      </Route>

      <Route path="/viewspelis/comedia/" exact stric>

        <Viewspeli categoria={this.selectCategoria()} comedia="'http://127.0.0.1:8000/pelicula/'"> </Viewspeli>
               
      </Route>

     <Route path="/registro/">

        <Registro></Registro>
     </Route>

    </div>
     
</div>
  </Router>      



 )


}


}


export default Main;