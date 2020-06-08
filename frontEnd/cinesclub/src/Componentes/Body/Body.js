import React, {Component} from 'react';
import './Body.css';

import Peliculas from '../Peliculas/peliculas';
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
                    <li><Link  to="./pelis2"><span className=""><i className="icon"><FontAwesomeIcon className="faFilm" icon={faFilm}></FontAwesomeIcon></i></span>Peliculas</Link>
                        <ul>
                            <li><a href="#">Comedia</a></li>
                            <li><a href="#">Terror</a></li>
                            <li><a href="#">Drama</a></li>
                            <li><a href="#">Romance</a></li>
    
                        </ul>
                    
                    </li>
                    <li><Link  to="../Peliculas/peliculas.js"><span><i className="icon"><FontAwesomeIcon className="faPhone" icon={faPhone}></FontAwesomeIcon></i></span>Contactos</Link></li>
                    <li><Link  to="../Peliculas/peliculas.js"><span><i className="icon"></i></span>Productos</Link></li>
                    <li><Link  to="../Peliculas/peliculas.js"><span><i className="icon"></i></span>Login</Link></li>
    
            </ul>
        </nav>
    
    
        </div>

  </header>

        
        <div className="Main">
        
        <main>

               { /*  <div className="slider">
              <Slider slides={images}></Slider>
              </div> */}

        </main>

        <Route path="/pelis/" exact stric>
                <Peliculas></Peliculas>
               
      </Route>
     
    </div>
     
</div>
  </Router>      



 )


}


}


export default Main;