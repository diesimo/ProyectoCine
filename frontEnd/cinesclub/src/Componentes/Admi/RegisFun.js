import React, {Component} from 'react'
import Axios from 'axios'

class regisfun extends Component{
    constructor(){   
        super();
        this.state={
        ubicacion:'',
        nombresede:'',

        precioboleto:'',
        horario:'',
        cantbutacas:'',
        fecha:'',
        idsala:'',
        idsalaCompletos:[],
        idpelicula:'',
        peliculas:[],

        tiposala:[],
        canbutacas:'',
        nsala:'',
        idsede:'',
        idsedeCompletos:[],
        
        
        
    }
  
    
    
    }

   
    async componentDidMount()
    {
        

        const res = await Axios.get("http://127.0.0.1:8000/peliculas/")
        this.setState({peliculas: res.data});

        const res2 = await Axios.get("http://127.0.0.1:8000/sede/")
         this.setState({idsedeCompletos: res2.data})
         console.log(this.state.idsede)
        
        const res3 = await Axios.get("http://127.0.0.1:8000/sala/")
        this.setState({idsalaCompletos: res3.data})
        
        console.log(res.data);
        console.log(this.state.peliculas)
    }
    postSede = async(event)=>
    {
        event.preventDefault();
        const Data={
            nombre:this.state.nombre,
            ubicacion:this.state.ubicacion
        };
         const res = Axios.post("http://127.0.0.1:8000/sede/", Data)
         
         console.log(Data)
    }
    postSala = async(event)=>
    {
        event.preventDefault();
        const Data={
            tiposala:this.state.tiposala,
            canbutacas:this.state.canbutacas,
            nsala:this.state.nsala,
            idsede:this.state.idsede
        };
         const res = Axios.post("http://127.0.0.1:8000/sal/", Data)
         
         console.log(Data)
    }

    postFuncion = async(event)=>
    {
        event.preventDefault();
        const Data={
            precioboleto:this.state.precioboleto,
            horario:this.state.horario,
            cantbutacas:this.state.cantbutacas,
            fecha:this.state.fecha,
            idsala:this.state.idsala,
            idpelicula:this.state.idpelicula,
        };
        console.log(Data)
         const res = await Axios.post("http://127.0.0.1:8000/funcion/", Data)
         
        
    }
    
    changeHanlder = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        
    }

    funcionButacas=(event)=>
    {
        
        
        this.setState({[event.target.name]:event.target.value})
       
            this.state.idsalaCompletos.map(sala=>
                { 
                    
                    if(sala.idsala==event.target.value)
                    {console.log("entre")
                        
                        console.log(sala.canbutacas)
                        this.setState({cantbutacas:sala.canbutacas})
                        

                    }
                }
                
                )
        
           
    }

   

     



render()
{


    return(

        <div className="RegisF">
            <div className="Sede">
                <form  onSubmit={this.postSede}>
                    <h4>Registras Sede</h4>
                    <div className="input">
                    <label>Ubicacion</label>
                   <input onChange={this.changeHanlder} type='text' name="ubicacion" placeholder="Ubicacion" className="controlsP"></input>
                   </div>
                   <div className="input">
                   <label>Nombre</label>
                   <input  onChange={this.changeHanlder} type='text' name="nombre" placeholder="Nombre" className="controlsP"></input>
                   </div>
                   <button type="submit" onClick={()=> this.componentDidMount} >Registrar</button>
                </form>
                

            </div>


            <div className="Funcion">
            <form  onSubmit={this.postFuncion}>
            <div className="input">
                <label>Pelicula</label>
            <select  onChange={this.changeHanlder} name="idpelicula"> 
            <option selected="true" disabled="disabled"  >seleccione la pelicula</option>
                {this.state.peliculas.map(pelicula=>
                    <option value={pelicula.idpelicula}>{pelicula.titulo}</option>
                    
                    
                    )
                
                 }
            </select> 
            
            </div>
           
            
            <div className="input">
                <label>Codigo de Sala</label>
            <select  onChange={this.funcionButacas}  name="idsala"> 
            <option selected="true" disabled="disabled"  >seleccione la pelicula</option>
                {this.state.idsalaCompletos.map(sala=>(
                    <option  value={sala.idsala}>{sala.nsala}</option>))
                
                 }
            </select> 
            </div>
            <div className="input"> 
            <label>Precio Boleto</label>
            <input type="number" onChange={this.changeHanlder}  name="precioboleto" placeholder="precio" className="controlsP"></input>
            </div>
            <div className="input"> 
            <label>Horario</label>
            <input type="time" className="controlsP" onChange={this.changeHanlder}  name="horario" ></input>
            </div>
            
            <div className="input">
            <label>Fecha de la Funcion</label>
            <input type="date" onChange={this.changeHanlder}  name="fecha" className="controlsP"></input> 
            </div>
            <button type="submit" onClick={()=> this.componentDidMount}  >Registrar</button>
            </form>
            
            </div>


            <div className="Sala">
                
                <form onSubmit={this.postSala}> 
                <div className="input"> 
                <label>Formato</label>
                <select onChange={this.changeHanlder} name="tiposala">
                 <option value="2D">2D</option>
                 <option value="3D">3D</option>
                 <option value="4D">4D</option>

                </select>
                </div>
                <div className="input" > 
                 <label>Cantidad de Butacas</label>
                <input type='number'onChange={this.changeHanlder} name="canbutacas" placeholder="Cantidad de Butacas" className="controlsP"></input>
                </div>
                <div className="input"> 
                <label>Codigo de Sala</label>
                <input type="text" placeholder="Codigo de Sala" onChange={this.changeHanlder} name="nsala" className="controlsP"></input>
                </div>
                <div className="input"> 
                <labe>Nombre de la Sede</labe>
                <select onChange={this.changeHanlder} name="idsede">
                    {this.state.idsedeCompletos.map(sede=>(

                    <option value={sede.idsede}>{sede.nombre}</option>

                    ))

                    }

                </select>
                </div>
                <button type="submit"onClick={()=> this.componentDidMount}  >Registrar</button>
                </form>
                
            </div>
            
            
         </div>

    )
}


}




export default regisfun