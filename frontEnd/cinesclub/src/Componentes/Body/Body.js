import React, { Component } from "react";
import "./Body.css";
import Nav from "./Nav.js";
import { Route } from "react-router-dom";
import Viewspelis from "./viewspeli.js";
import Registro from "../Registro/registro.js";
import Produc from '../Produ/Productos.js'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFilm, faPhone } from "@fortawesome/free-solid-svg-icons";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
      
      
        <Nav></Nav>

        <div className="Main">
          {/*En los componentes de los Route importaran lo que son Contactos Y Productos*/}
          <Route
            exact
            path="/body/viewspelis"
            render={() => (
              <Viewspelis get="http://127.0.0.1:2000/"></Viewspelis>
            )}
          ></Route>
          <Route
            exact
            path="/body/viewspelis/comedia"
            render={() => (
              <Viewspelis get="http://127.0.0.1:8000/Comedia/"></Viewspelis>
            )}
            
          ></Route>
          <Route
            exact
            path="/body/viewspelis/suspenso"
            render={() => (
              <Viewspelis get="http://127.0.0.1:8000/Suspenso/"></Viewspelis>
            )}
            
          ></Route>
          <Route
            exact
            path="/body/viewspelis/romantica"
            render={() => (
              <Viewspelis get="http://127.0.0.1:8000/Romantica/"></Viewspelis>
            )}
            
          ></Route>
          <Route
            exact
            path="/body/viewspelis/terror"
            render={() => (
              <Viewspelis get="http://127.0.0.1:2000/"></Viewspelis>
            )}
          ></Route>
          <Route
            exact
            path="/body/viewspelis/accion"
            render={() => (
              <Viewspelis get="http://127.0.0.1:2000/"></Viewspelis>
            )}
          ></Route>
          <Route
            exact
            path="/body/viewspelis/romance"
            render={() => (
              <Viewspelis get="http://127.0.0.1:2000/"></Viewspelis>
            )}
          ></Route>
          <Route
            exact
            path="/body/viewspelis/drama"
            render={() => (
              <Viewspelis get="http://127.0.0.1:2000/"></Viewspelis>
            )}
          ></Route>
          <Route
            exact
            path="/body/viewspelis/aventura"
            render={() => (
              <Viewspelis get="http://127.0.0.1:8000/Aventura/"></Viewspelis>
            )}
          ></Route>
          <Route exact path="/registro" component={Registro}></Route>
          <Route exact path="/contactos" ></Route>{" "}
      
          <Route
            exact
            path="/body/productos/"
            render={() => (
              <Produc get="http://127.0.0.1:8000/producto/"></Produc>
            )}
          ></Route>
          <Route
            exact
            path="/body/productos/comida"
            render={() => (
              <Produc get="http://127.0.0.1:8000/ComidaView/"></Produc>
            )}
          ></Route>
          <Route
            exact
            path="/body/productos/bebida"
            render={() => (
              <Produc get="http://127.0.0.1:8000/BebidaView/"></Produc>
            )}
          ></Route>
          
        
        </div>
        
      </React.Fragment>
    );
  }
}

export default Main;
