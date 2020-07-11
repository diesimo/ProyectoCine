import React, {Component} from 'react';
import './Admi.css'
import {Link, withRouter} from 'react-router-dom';

function AdmiNav() {

return(

    <div className="siderbar">
        <p className="administracion">Administracion</p>
        
        <nav className="Adminav">
            <ul className="uladmi">
                <li>< Link  to="/admi/AgregarP">Agregar Peliculas</Link></li>
                <li><Link to="/admi/AdmiP">Admi Peliculas</Link></li>
                <li><a href="#">Admi Ganancias</a></li>
                <li><Link to="/admi/RegisF">Registrar Funcion</Link></li>
                <li><Link to="/admi/RegisP">Registrar Productos</Link></li>
                <li><Link to="/admi/Prove">Registrar Provedor</Link></li>
                <li><Link to="/admi/GananciaMes">Ganancia del Mes</Link></li>
            </ul>



        </nav>
        
    </div>
)

}

export default AdmiNav