import React, { Component } from "react";
import "./Body.css";
import Nav from "./Nav.js";
import { Route } from "react-router-dom";
import Viewspelis from "./viewspeli.js";
import Registro from "../Registro/registro.js";
import Prodructo from "../Productos/productos.js"

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
      
          <Route exact path="/body/productos" component={Prodructo}></Route>
        
        </div>
        
      </React.Fragment>
    );
  }
}

export default Main;
