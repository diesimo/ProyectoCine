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

    


    render()
    {
       
        
    return(
        <div className="section">
          
        { 
            this.state.peliculas.map(pelicula =>
            
              
                <div className="info-total">
                <div className="info">
            <p><span className="negrilla ">Titulo:</span> {pelicula.categoria.map(cr=>(<p>{cr}</p>))}</p>
                    
                    <p><span className="negrilla ">Duracion:</span> {pelicula.apellido}</p>
                    
                    <hr></hr>
                </div>

            </div>
                
                
                

             )
       
          }
          
    
    </div>
  

        
      

    

    )

}



};

export default viewspelis