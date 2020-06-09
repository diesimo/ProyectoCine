import React, {Component} from 'react';
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
                            <li><a href="#">Comedia</a></li>
                            <li><a href="#">Terror</a></li>
                            <li><a href="#">Drama</a></li>
                            <li><a href="#">Romance</a></li>
    
                        </ul>
                    
                    </li>
                    <li><Link  to="../Peliculas/peliculas.js"><span><i className="icon"><FontAwesomeIcon className="faPhone" icon={faPhone}></FontAwesomeIcon></i></span>Contactos</Link></li>
                    <li><Link  to="../Peliculas/peliculas.js"><span><i className="icon"></i></span>Productos</Link></li>
                    <li><Link  to="/registro"><span><i className="icon"></i></span>Registro</Link></li>
    
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
               <Viewspeli></Viewspeli>
               
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