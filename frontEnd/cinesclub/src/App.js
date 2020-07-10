import React,{Component} from 'react';

import Body from  './Componentes/Body/Body.js';
import './App.css';
import Admi from '../src/Componentes/Admi/Admi.js';
import { Route, Redirect } from "react-router-dom";
import Fac from "../src/Componentes/Factura/Factura.js"
import Login from "./Componentes/Login2/Login.js"

class App extends Component{

  constructor(props)
  { 
    super(props);
    this.state={
     
    }


  }

  

render()
{
return(
  <div className="App">
     
    
       
     
  <body className="cuerpo"> 
   <div className="Fac">
   <Fac></Fac>
    </div>
  <div>
  
  <Route  path="/body/" component={Body}></Route>
 <Route  path="/admi/" component={Admi}></Route>
 <Route   path="/login/" component={Login}></Route>

  </div>

</body>
   
   


  

 
</div>

)
}

}



export default App;
