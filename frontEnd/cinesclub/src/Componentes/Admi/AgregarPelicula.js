import React, { Component } from 'react';
import './Admi.css'
import Axios from 'axios';
class Agregar extends Component {
    constructor() {
        super();
        this.state = {

            titulo: '',
            sinopsis: '',
            idioma: '',
            subtitulos:false,
            clase: '',
            namedire: '',
            apelldire: '',
            raking: '',
            categoria: [],
            imagen:'',
            vista: '',
            formatos: [],
            vista:true,
            horas:'',
            minutos:'',
           
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.formatos = this.formatos.bind(this);
        this.handleSubtitulo=this.handleSubtitulo.bind(this);
        
    }
    handleImageChange = (e) => {
        this.setState({
          imagen: e.target.files[0]
        })
      };

    formatos(event) {
        const target = event.target;
        var value = target.value;
       

        if (event.target.checked===true) {
          
            this.setState({
                formatos: [...this.state.formatos, value]
             });
            
        }else{
            var indice=this.state.formatos.indexOf(value)
           this.state.formatos.splice(indice,1)
                 
        }
        
    }
    handleSubmit =  async (e) => {
        
        e.preventDefault();
        console.log(this.state.categoria)
       
        let form_data = new FormData();
       
        form_data.append('imagen', this.state.imagen);
        form_data.append('titulo', this.state.titulo);
        form_data.append('sinopsis', this.state.sinopsis);
        form_data.append('idioma', this.state.idioma);
        form_data.append('clase', this.state.clase);
        form_data.append('namedire', this.state.namedire);
        form_data.append('raking', this.state.raking);
        form_data.append('horas', this.state.horas);
        form_data.append('minutos', this.state.minutos);
        form_data.append('vista', this.state.vista);
        form_data.append('formatos[]', this.state.formatos[0]);
        form_data.append('formatos[]', this.state.formatos[1]);
        form_data.append('apelldire', this.state.apelldire);
        form_data.append('categoria[]', this.state.categoria);
       
        
        for (var value of form_data.values()) {
            console.log(value); 
         }
        let url = 'http://127.0.0.1:8000/list2/';
      const res = await Axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        
            .then(res => {
              
            })
            .catch(err => console.log(err))
            
        
      };
   

    enviarDatos = async (event) => {
        console.log(this.state)
        event.preventDefault();
        console.log(this.state.imagen)
        const newPeli = {

            titulo: this.state.titulo,
            sinopsis: this.state.sinopsis,
            idioma: this.state.idioma,
            subtitulos: this.state.subtitulos,
            clase: this.state.clase,
            namedire: this.state.namedire,
            apelldire: this.state.apelldire,
            raking: this.state.raking,
            horas:this.state.horas,
            minutos:this.state.minutos,
            categoria: this.state.categoria,
            imagen: this.state.imagen,
            vista: this.state.vista,
            formatos: this.state.formatos,
            
        };
        let url = '"http://127.0.0.1:8000/peliculas/"';
      await Axios.post("http://127.0.0.1:8000/peliculas/", newPeli)
        
            

        console.log(this.state.categoria)
    }

    changeHanlder = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }
//Funcion para la categorias
    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
       

        if (event.target.checked===true) {
          
            this.setState({
                categoria: [...this.state.categoria, value]
             });
            
        }else{
            var indice=this.state.categoria.indexOf(value)
           this.state.categoria.splice(indice,1)
                 
        }
        
    }

//Subtitulos
handleSubtitulo(event)
{
    if(event.target.checked===true)
    {
        this.setState({ [event.target.name]: true })
         

    }else{
        this.setState({ [event.target.name]: false })
         

    }

   

}




    render() {

        return (

            <div className="regis">


                <section >
                    <form onSubmit={this.handleSubmit}   >
                        <h4>Registrar Pelicula</h4>
                        <div className='input'>
                            <label>Titulo</label><br></br>
                            <input
                                onChange={this.changeHanlder}
                                name="titulo"
                                className="controlsP"
                                type="text"
                                placeholder="Titulo"
                            >


                            </input>
                        </div>
                        <div className="input">
                            <label>Horas y Minutos</label><br></br>
                            <input
                                onChange={this.changeHanlder}
                                name="horas"
                                id="duracion"
                                className="controlsP"
                                type="number"
                                placeholder="Horas"
                                min="0" max="9">

                            </input>
                            <input
                                onChange={this.changeHanlder}
                                name="minutos"
                                id="duracion"
                                className="controlsP"
                                type="number"
                                placeholder="Minutos"
                                min="0" max="60">

                            </input>
                        </div>

                        <div className="input">
                            <label>Sinopsis</label><br></br>
                            <input
                                onChange={this.changeHanlder}
                                name="sinopsis"
                                className="controlsP"
                                type="text"
                                id="sinopsis"
                                placeholder="Sinopsis"
                            >

                            </input>

                        </div>
                        <div className="input">
                            <label>Idioma</label><br></br>
                            <select id="idioma" onChange={this.changeHanlder} name="idioma" className="controlsP" >
                                <option >Select</option>
                                <option value="Español"   >Español</option>
                                <option value="Ingles">Ingles</option>

                            </select>
                        </div>
                        <div className='input'>
                            <label>Clase</label><br></br>
                            <select name="clase" onChange={this.changeHanlder} id="clase" className="controlsP">
                                <option value="AA">AA</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>


                            </select>
                        </div>


                        <div className="input">
                            <label>Nombre del director</label><br></br>
                            <input
                                onChange={this.changeHanlder}
                                name="namedire"
                                className="controlsP"
                                type="text"
                                placeholder="Nombre del Director">

                            </input>
                        </div>

                        <div className="input">
                            <label>Apellido del Director</label><br></br>
                            <input
                                onChange={this.changeHanlder}
                                name="apelldire"
                                className="controlsP"
                                type="text"
                                placeholder="Apellido del Director">

                            </input>
                        </div>

                        <div className="input">
                            <label>Raking</label><br></br>
                            <input
                                onChange={this.changeHanlder}
                                name="raking"
                                id="raking"
                                className="controlsP"
                                type="number"
                                min="1" max="7">


                            </input>

                        </div>

                        <div className="input">
                            <label>Seleccion las categorias</label>
                            <br></br>
                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Animacion">
                            </input>
                            <label> Animacion</label><br></br>
                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Comedia">
                            </input>
                            <label> Comedia</label><br></br>
                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Terror">
                            </input>
                            <label> Terror</label><br></br>

                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Romance">
                            </input>
                            <label> Romance</label><br></br>
                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Suspenso">
                            </input>
                            <label> Suspenso</label><br></br>

                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Aventura">
                            </input>
                            <label> Aventura</label><br></br>
                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Accion">
                            </input>
                            <label> Accion</label><br></br>

                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Drama">
                            </input>
                            <label> Drama</label><br></br>

                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Musical">
                            </input>
                            <label> Musical</label><br></br>

                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Ciencia Ficcion">
                            </input>
                            <label> Ciencia Ficcion</label><br></br>

                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Fantasia">
                            </input>
                            <label> Fantasia</label><br></br>

                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Documental">
                            </input>
                            <label> Documental</label><br></br>

                            <input
                                onChange={this.handleInputChange}
                                name="categoria"
                                className="c"
                                type="checkbox"
                                value="Familia">
                            </input>
                            <label> Familia</label><br></br>

                        </div>
                        <div className="input">
                            <label>Imagen </label><br></br>
                            <input
                                onChange={this.handleImageChange}
                                name="imagen"
                                className="controlsP"
                                type="file"
                                placeholder="Imagen"
                                id="imagen"
                                accept="image/png, image/jpeg">

                            </input>
                        </div>
                        <div className="input">
                            <label>Substitulos</label><br></br>
                            <input
                                onChange={this.handleSubtitulo}
                                name="subtitulos"
                                type="checkbox"
                                value="1"
                            >

                            </input>
                        </div>

                        
                           
                           <div className="input">
                            <label>Seleccion de los Formatos</label>
                            <br></br>
                           <input
                                onChange={this.formatos}
                                name="formatos"
                                className="c"
                                type="checkbox"
                                value="2D">
                            </input>

                            <label> 2D</label><br></br>

                            <input
                                onChange={this.formatos}
                                name="formatos"
                                className="c"
                                type="checkbox"
                                value="3D">
                            </input>

                            <label> 3D</label><br></br>
                           
                            <input
                                onChange={this.formatos}
                                name="formatos"
                                className="c"
                                type="checkbox"
                                value="4D">
                            </input>

                            <label> 4D</label><br></br>
                           </div>
                      
                        <button type="submit" >Registro</button>
                    </form>
                </section>

                

            </div>


        )
    }

}


export default Agregar