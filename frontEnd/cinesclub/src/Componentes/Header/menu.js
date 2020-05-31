import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {faHome, faFilm, faPhone} from '@fortawesome/free-solid-svg-icons';
import './Barra.css'
function Barra(props) {

return(


    <div className="Barra">
        
    <nav>
        <ul>
                <li><a href="#"><span className=""><i className="icon"><FontAwesomeIcon className="faHome" icon={faHome}></FontAwesomeIcon></i></span>Home</a></li>
                <li><a href="#"><span className=""><i className="icon"><FontAwesomeIcon className="faFilm" icon={faFilm}></FontAwesomeIcon></i></span>Peliculas</a>
                    <ul>
                        <li><a href="#">Comedia</a></li>
                        <li><a href="#">Terror</a></li>
                        <li><a href="#">Drama</a></li>
                        <li><a href="#">Romance</a></li>

                    </ul>
                
                </li>
                <li><a href="#"><span><i className="icon"><FontAwesomeIcon className="faPhone" icon={faPhone}></FontAwesomeIcon></i></span>Contactos</a></li>
                <li><a href="#"><span><i className="icon"></i></span>Productos</a></li>
                <li><a href="#"><span><i className="icon"></i></span>Login</a></li>

        </ul>
    </nav>


    </div>

)


}

export default Barra;