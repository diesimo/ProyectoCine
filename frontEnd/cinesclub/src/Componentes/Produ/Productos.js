import React, { Component } from "react";
import Axios from 'axios'
import './produ.css'


class Produc extends Component {
constructor()
{
    super();
    this.state={
        idprod:[],
        nombrepro:'',
        iva:'',
        preciobruto:'',
        productos:[],
    }



}

agregar= (id,tipo)=>
    {
      
        
        const aux=this.state.idprod
        aux.push(id)
        this.setState({idprod:aux})
        
        localStorage.setItem('infoComp2', JSON.stringify({idprod:aux}))
        if(tipo=="Comida"){
        localStorage.setItem('comida',true)
        }
        if(tipo=="Bebida")
        {
          localStorage.setItem('bebida',true)
        }
       
         
          
    }

    async componentDidMount()
    {
      const{get} =this.props;
    const res =  await Axios.get(get);
    console.log(res.data)
    this.setState({productos:res.data})
    }
    
    


  render() {
    return (
      <React.Fragment>
      
      
                {this.state.productos.map((producto,index)=>
                <div className="Prod" key={index}>
                <img src={require ("./png/"+producto.nombrepro+".png")}></img> 

                        
                <button onClick={()=>this.agregar(producto.idprod,producto.tipo)}>{producto.nombrepro}</button>   
                </div>

                
                )}

        
      </React.Fragment>
    );
  }
}

export default Produc;
