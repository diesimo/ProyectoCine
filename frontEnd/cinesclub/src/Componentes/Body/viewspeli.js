import React,{Component} from 'react';
import './viewspelis.css';
import axios from 'axios';


class viewspelis extends Component
{
    state={
        peliculas:[],
        
      
    
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


    render()
    {
       
        
    return(
        <div className="section">
            
          
        { 
            this.state.peliculas.map(pelicula =>
            
              
                <div className="info-total">
                <div className="info">
                    <p><span className="negrilla ">Titulo:</span> {pelicula.titulo}</p>
                    
                    <p><span className="negrilla ">Duracion:</span> {pelicula.duracion}</p>
                    
                    <p><span className="negrilla ">Sinopsis:</span> {pelicula.sinopsis}</p>
                    
                    <p><span className="negrilla ">Idioma:</span> {pelicula.idioma}</p>
                
                    <p><span className="negrilla ">Susbtitulos: </span> {this.verificacion(pelicula.subtitulos)} </p>
                    
                    <p><span className="negrilla ">Clase: </span>{pelicula.clase}</p>
                    
                    <p><span className="negrilla ">Nombre del director:</span> {pelicula.namedire}  {pelicula.apelldire}</p>
                    
                    <p><span className="negrilla ">Ranking:</span> {pelicula.raking}</p>
                    
            <p ><span className="negrilla ">Categoria:</span> {pelicula.categoria.map(categoria => <div className="categoria"><p >{categoria}  </p>  </div>)}</p>
                </div>
                    <div className="imagenpeli">
                        <img src={"http://127.0.0.1:8000/media/"+pelicula.imagen} ></img>
                    </div>
                    <hr></hr>


            </div>
                
                

             )
       
          }
          
    
    </div>
  

        
      

    

    )

}



};

export default viewspelis