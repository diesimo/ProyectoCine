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
        const res =await axios.get('http://127.0.0.1:8000/pelicula/');
        this.setState({peliculas: res.data});
        
        console.log(this.state.peliculas)


    }



    render()
    {
    return(
    
    <div className='imagen' >

        <div ></div>
        <div className="info">
       
            {
                this.state.peliculas.map(pelicula => <p>
                <p>Titulo: {pelicula.titulo}</p>
                <p>Duracion: {pelicula.duracion}</p>
                <p>Sinopsis: {pelicula.sinopsis}</p>
                <p>Idioma: {pelicula.idioma}</p>
                <p>Susbtitulos: {pelicula.subtitulos}</p>
                <p>Clase: {pelicula.clase}</p>
                <p>Nombre del director: {pelicula.namedire}  {pelicula.apelldire}</p>
                <p>Ranking: {pelicula.raking}</p>
                <p>Categoria: {pelicula.categoria}</p>

                        <br></br>
                    </p>

                 )
           
            }
        
        </div>

    </div>

    )

}



};

export default viewspelis