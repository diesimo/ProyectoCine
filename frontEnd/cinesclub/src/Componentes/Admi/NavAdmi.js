import React, {Component} from 'react';
import './Admi.css'

function AdmiNav() {

return(

    <div className="siderbar">
        <p className="administracion">Administracion</p>
        <nav className="Adminav">
            <ul className="uladmi">
                <li><a href="#">Admi Productos</a></li>
                <li><a href="#">Admi Peliculas</a></li>
                <li><a href="#">Admi Ganancias</a></li>
               

            </ul>



        </nav>
        
    </div>
)

}

export default AdmiNav