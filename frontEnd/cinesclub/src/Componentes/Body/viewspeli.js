import React,{Component} from 'react';
import './viewspelis.css';
import axios from 'axios';


class viewspelis extends Component
{
    state={
        peliculas:[],
        
      
    
    }

    async componentDidMount()
    {
        const val= this.props.comedia
        const res =await axios.get(val);
        console.log(res.data);
        this.setState({peliculas: res.data});
        
        console.log(this.state.peliculas)


    }

    function (params) {
        
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
                
                    <p><span className="negrilla ">Susbtitulos: </span>{pelicula.subtitulos}</p>
                    
                    <p><span className="negrilla ">Clase: </span>{pelicula.clase}</p>
                    
                    <p><span className="negrilla ">Nombre del director:</span> {pelicula.namedire}  {pelicula.apelldire}</p>
                    
                    <p><span className="negrilla ">Ranking:</span> {pelicula.raking}</p>
                    
            <p ><span className="negrilla ">Categoria:</span> {pelicula.categoria.map(categoria => <div className="categoria"><p >{categoria}  </p>  </div>)}</p>
                </div>
                    <div className="imagenpeli">
                        <img src={pelicula.imagen} ></img>
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