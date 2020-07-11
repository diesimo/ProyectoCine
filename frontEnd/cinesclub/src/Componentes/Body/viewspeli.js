import React,{Component} from 'react';
import './viewspelis.css';
import axios from 'axios';
import Modal from 'react-modal'




class viewspelis extends Component
{
    constructor()
    
    {
    super();
    this.state={
        peliculas:[],
        idpeliculaSelec:'',
        cantEntradas:'',
        
        funcion:[],

        isModalOpen:false,
       
        titulo:'',
        idfuncion:'',
        precioboleto:'',
      
    
    }
}


    async componentDidMount()
    {   const{get} =this.props;
      
        
        const res =await axios.get(get);
        console.log(res.data);
        this.setState({peliculas: res.data});
        
        console.log(this.state.peliculas)
        

    }
//Funcion para verificar los subitutlos
    verificacion=(aux)=>{
            
               if(aux==="\u0000")
                {
                    return "No";
                }else{

                    return "Si";
                }
               
    }
    openModal=(id,titulo)=>{  
        
        this.setState({isModalOpen:true})
        this.idpelicula(id)
        this.getFunciones(id)
        this.setState({titulo:titulo})

    }
    agregar=(id,precioboleto)=>
    {
       
        localStorage.setItem('entradas',this.state.cantEntradas)
        localStorage.setItem('idfuncion',id)
        localStorage.setItem('infoComp', JSON.stringify({entradas:this.state.cantEntradas,titulo:this.state.titulo,precioboleto:precioboleto,idfuncion:id}))
        
       
         this.closeModal() 
          
    }


    closeModal=()=>{
        
        this.setState({isModalOpen:false})
        
       

    }

    idpelicula(id) {this.setState({idpeliculaSelec:id})}

    changeHanlder = (event) => {this.setState({ [event.target.name]: event.target.value })}

    async getFunciones(id)
    {         
        console.log("entre")
        const res =  await axios.get("http://127.0.0.1:8000/getFuncionPel/"+id+'/');
        
        this.setState({funcion: res.data});
        console.log(this.state.funcion)
        
    }


    render()
    {
       
        
    return(

    <React.Fragment>
        <div className="section">
            
          
        { 
            this.state.peliculas.map((pelicula,index) =>
            
              
                <div className="info-total" key={index}>
                <div className="info" >
                    <p><span className="negrilla ">Titulo: </span> {pelicula.titulo}</p>
                    
                    <p><span className="negrilla ">Duracion: </span> {pelicula.horas}:{pelicula.minutos}</p>
                    
                    
                    <p><span className="negrilla ">Sinopsis: </span> {pelicula.sinopsis}</p>
                    
                    <p><span className="negrilla ">Idioma: </span> {pelicula.idioma}</p>
                
                    <p><span className="negrilla ">Susbtitulos: </span> {this.verificacion(pelicula.subtitulos)} </p>
                    
                    <p><span className="negrilla ">Clase: </span>{pelicula.clase}</p>
                    
                    <p><span className="negrilla ">Nombre del director: </span> {pelicula.namedire}  {pelicula.apelldire}</p>
                    
                    <p><span className="negrilla ">Ranking: </span> {pelicula.raking}</p>
                    
            <p ><span className="negrilla " id='Categoria'>Categoria: </span><p className="categoria">   { pelicula.categoria+" " }</p>  </p>
            <button onClick={()=>this.openModal(pelicula.idpelicula,pelicula.titulo)} >Funciones</button> 
                </div>
                    <div className="imagenpeli">
                        <img src={"http://127.0.0.1:8000/media/"+pelicula.imagen} ></img>
                    </div>
                   
                 <hr></hr>
                 
            </div>
                
                

             )
       
        }

        </div>

        <Modal isOpen={this.state.isModalOpen} className="Modall" style = {{ 
    overlay :  { 
      position :  'fixed' , 
      top :  0 , 
      left :  0 , 
      right :  0 , 
      bottom :  0 , 
      backgroundColor :  'rgba (255, 255, 255, 0.75)' 
    }, 
    contenido :  { 
      posición :  'absoluto' , 
      arriba :  '40px' , 
      izquierda :  '40px' , 
      derecha :  '40px' ,
      abajo :  '40px' , 
      borde :  '1px sólido #ccc' , 
      fondo :  '#fff' , 
      desbordamiento :  'auto' , 
      WebkitOverflowScrolling :  'touch' , 
      borderRadius :  '4px' , 
      contorno :  'none' , 
      relleno :  '20px ' ,
      
    } 
  }}>
            <div className="Modal">
                
                <table className="tableVistaP"> 
                <thead className="theadVistaP">

                <tr>
                
                <th>Horario</th>
                <th>Fecha</th>
                <th>Precio</th>
                <th>Cantidad Entradas</th>
                
                </tr>


                </thead>
    
                <tbody>
                {this.state.funcion.map(funcion=>
                    <tr>

                    <td>{funcion.horario}</td>
                    <td>{funcion.fecha}</td>
                    <td>{funcion.precioboleto}</td>
                    <td><input min='0'type="number" onChange={this.changeHanlder}  name="cantEntradas" defaultValue="0" placeholder="Cantidad de Entradas"/></td>
                    <button onClick={()=>this.agregar(funcion.idfuncion,funcion.precioboleto)}> Agregar</button>
                    
                    </tr>

                
                
                    )
                }
                </tbody>
    
    

                </table>
                    
                    
                    <button onClick={this.closeModal}> Cerrar</button>
              
            </div>




        </Modal>
    </React.Fragment>
    )
  
}



};

export default viewspelis