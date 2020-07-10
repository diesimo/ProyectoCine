import React, {Component} from "react";
import Axios from 'axios'




class VistaPelis extends Component{
    constructor(props){
        super(props);
    this.state={
        peliculas:[],
        imagen:'',
        titulo:'',
        vista:'',
        imagen:'imagen',
        prueba:[]
        
      
    }
    this.updateData=this.updateData.bind(this)
  
  
}
   async updateData(id,vista,subtitulos)
    { 
      const Data={
        
        subtitulos:this.verificacion(subtitulos),
        
        vista:vista,
        
      }
        
        const res2 =await Axios.put("http://127.0.0.1:8000/UpdateVistas/"+id+'/',Data);
       this.componentDidMount()
    }

    
    async componentDidMount()
    {         
        
        const res =await Axios.get("http://127.0.0.1:8000/VistaPeli/") ;
       
        this.setState({peliculas: res.data});
        console.log(res)
        
    }

    

    verificacion=(aux)=>{
            
        if(aux===false)
         {
             return false;
         }else{

             return true;
         }
        
}
verificacion2=(aux)=>{
 
  if(aux===true)
   {
       return "Si";
   }else{

       return "No";
   }
  
}

activo_desactivo=(aux)=>
{   
  if(this.verificacion(aux)===false)
  {
      return "Activar";
  }else{

      return "Desactivar";
  }
}

falsetrue(aux)
{
    if(aux===true)
  {
      return false;
  }else{

      return true;
  }

}





render(){



return(

<div className="VistaPelis">


<div>

<table className="tableVistaP"> 
    <thead className="theadVistaP">

        <tr>
        <th>{this.state.imagen}</th>
        <th>Titulo</th>
        <th>Vista</th>
        <th>Activar o Desactivar</th>
        
        </tr>


    </thead>
    
    <tbody>
    {this.state.peliculas.map(pelicula=>
        <tr>

        <td> <img src={"http://127.0.0.1:8000/media/"+pelicula.imagen} ></img></td>
        <td>{pelicula.titulo}</td>
        <td>{this.verificacion2(pelicula.vista)}</td>
        <td><button title="Activar"onClick={() => this.updateData(pelicula.idpelicula,this.falsetrue(pelicula.vista),pelicula.subtitulos)} >{this.activo_desactivo(pelicula.vista)}</button></td>
       
        
        </tr>

      
       
        )
    }
    </tbody>
    
    

</table>

</div>

</div>

)


}




}

export default VistaPelis
