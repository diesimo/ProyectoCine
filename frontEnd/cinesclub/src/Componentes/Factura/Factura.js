import React, {Component} from 'react'
import './factura.css';

import Axios from'axios'
class factura extends Component{
    constructor()
    {
        super();
        this.state={
            idfuncion:'',
            cantentradas:'',
            isModalOpen:false,
            isModalOpen2:false,
            funcion:[],
            tituloP:'',
            infoComp:'',
            cont:0,


            fecha:'',
            monttotal:'',
            tipoinstru:'',
            idcliente:'',

            idfuncion:'',
            idfactura:'',
            cantentradas:'',
           

            facturaB:false,
            facturaP:false,
            factura:[],

         

        }
    
    
    
    }

    changeHanlder = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        
    }

    renderizadoFac =()=>
    {
        this.setState({isModalOpen:true})
        
        

    }

    obtenerDatos()
    {
       this.setState({canentradas: localStorage.getItem('entradas')})

        console.log(this.state.cantentradas)

    }
    openModal=()=>{
       
        if(localStorage.getItem('infoComp')!=null)
        {
        this.setState({cantentradas: localStorage.getItem('entradas')})
        this.setState({idfuncion: localStorage.getItem('idfuncion')})
        this.setState({tituloP: localStorage.getItem('tituloP')})
        this.setState({infoComp:JSON.parse(localStorage.getItem('infoComp'))})
        
        this.componentDidMount()
        this.setState({cont:0})
        this.setState({idfuncion:null})
        }else if (this.state.idfuncion==null)
        {
            console.log("idfuncion")
            this.setState({cont:0})
        }else{
            console.log("contador 1")
             this.setState({cont:1})
            
        }
        this.setState({isModalOpen:true})
        
    }

    closeModal=()=>{
        
        this.setState({isModalOpen:false});
   
    }
    closeModal2=()=>{
        this.setState({isModalOpen2:true});
        this.setState({isModalOpen:false});
        
        console.log(this.state.isModalOpen2)
       

    }
     async componentDidMount()
    {
        console.log('Aqui')
        console.log(localStorage.getItem('idfuncion'))
       
        
        const res2 =  await Axios.get("http://127.0.0.1:8000/factura/")
        this.setState({factura: res2.data});
        const res =  await Axios.get("http://127.0.0.1:8000/getFuncionFac/"+localStorage.getItem('idfuncion')+"/")
        this.setState({funcion: res.data});
        

    }

    eliminar()
    {
       


    }

    
    postFactura= async ()=>
    {
        this.setState({isModalOpen2:false})
        const total=(this.state.infoComp['entradas']*this.state.infoComp['precioboleto'])
        
        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() 
        let year = date.getFullYear()
        const Data={
            fecha:(`${day}-0${month}-${year}`),
            monttotal:total,
            tipoinstru:this.state.tipoinstru,
            idcliente:localStorage.getItem('iduser')
            
        };
        
        console.log(Data);
        this.postFacturaEspec();
        localStorage.clear();
         const res =await  Axios.post("http://127.0.0.1:8000/prover/", Data);
        
         
         
    }

    postFacturaEspec = async()=>{
        
        
        if(this.state.idfuncion!='')
        {
            const DataB={
                
                idfuncion:this.state.infoComp['idfuncion'],
                cantentradas:this.state.infoComp['entradas'],
                idfactura:this.state.factura.length +1
                
            };
            console.log(DataB)
            
            const res = await Axios.post("http://127.0.0.1:8000/proveer/", DataB)
        }else if(this.state.facturaP==true)
        {


        }

    }

    

    


render()
{

    if(this.state.isModalOpen==true && (this.state.cont==0))
    {   console.log(this.state.isModalOpen)
         
        return(
            <div className="FacturaB">
                   <h1>Factura de Boletos</h1>
               <table className="tableVistaP"> 
                   <thead className="theadVistaP">

                       <tr>
                       
                           <th>Pelicula</th>
                           <th>Cantidad Entradas</th>
                           <th>Hora</th>
                           <th>Fecha</th>
                           
                       
                       </tr>


               </thead>
   
               <tbody>
               
                   <tr>
                    
                     <th>{this.state.infoComp['titulo']}</th>
                     {this.state.funcion.map(funcion=>
                        <div>
                      
                       <td>{funcion.horario}</td>
                       <td>{funcion.fecha}</td>
                      
                         </div>
                  
                    )} 
                     <th>{this.state.infoComp['entradas']}</th>
                   <button onClick={this.eliminar} > Eliminar</button>
                   
                   </tr>

               
               
                   
           
               </tbody>
   
   

               </table>
                {

                }
               <div><h1>Factura de Productos</h1></div>  
              
                <button onClick={this.closeModal}>Cerrar</button>

                <button onClick={this.closeModal2}>Realizar Compra</button>
                

               </div>
                )

    }else if(this.state.cont==1 && this.state.isModalOpen==true){
      return(  <div className="FacturaB"> <div className="tableVistaP" > 
            <div><p>No tiene nada en la factura aun</p></div>
      
      <button className="botomOpen" onClick={this.closeModal}>Cerrar</button></div></div>)

    }else if(this.state.isModalOpen2==true){
          return(
            <div className="FacturaB"> <div className="tableVistaP" > 
            <div><h1>Su compraa</h1>
          
          <p>Total a Pagar: {this.state.infoComp['entradas']*this.state.infoComp['precioboleto']}</p>

          <select name="tipoinstru" onChange={this.changeHanlder}>
                 <option selected="true" disabled="disabled"  >seleccione el tipo</option>
                <option value="Tarjeta">Tarjeta</option>
                <option value="Paypal">Paypal</option>
          </select>
            <button className="botomOpen" onClick={this.postFactura}>Finalizar</button>
            
            </div>
      
             
          
             
             </div></div>

          )}
    else if(this.state.funcion!=null){
        return( <button className="botomOpen" onClick={this.openModal} >FACTURA</button>  )
  
      }
      else{
    return(
<React.Fragment>
        <div>
            <button className="botomOpen" onClick={this.openModal} >FACTURA</button>
           
                
           


        </div>

   </React.Fragment> 
   )}
}


}




export default factura