import React, {Component} from 'react'
import './Body.css';
import {Link, withRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {faHome, faFilm, faPhone} from '@fortawesome/free-solid-svg-icons';


class Nav extends Component {

  
  


render()
{
 
   
 return(  

<div > 
  
  <div className="Bodynav">
   
     
        <nav > 
          
            <ul>
            <li><Link to="a"><span className=""><i className="icon"><FontAwesomeIcon className="faHome" icon={faHome}></FontAwesomeIcon></i></span>Home</Link></li>
                    <li><Link  to="/viewspelis"><span className=""><i className="icon"><FontAwesomeIcon className="faFilm" icon={faFilm}></FontAwesomeIcon></i></span>Peliculas</Link>
                        <ul>
                           
                            <li>< Link   to="/viewspelis/comedia">Comedia</Link></li>
                            <li><Link to="/viewspelis/terror">Terror</Link></li>
                            <li><Link to="/viewspelis/drama">Drama</Link></li>
                            <li><Link to="/viewspelis/accion">Accion</Link></li>
                            <li><Link to="/viewspelis/romance">Romance</Link></li>
                            <li><Link to="/viewspelis/aventura">Aventura</Link></li>
                            
    
                        </ul>
                    
                    </li>
                    <li><Link to="/contactos" ><span><i className="icon"><FontAwesomeIcon className="faPhone" icon={faPhone}></FontAwesomeIcon></i></span>Contactos</Link></li>
                    <li><Link  to="/productos" ><span><i className="icon"></i></span>Productos</Link></li>
                    <li><Link  to="/registro"><span><i className="icon"></i></span>Registro</Link></li>
    
            </ul> 
             
        </nav>
  
                   
    </div>

  



 
       

    
     
</div>
      
 )


}




}

export default withRouter(Nav);