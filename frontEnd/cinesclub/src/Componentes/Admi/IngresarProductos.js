import React, { Component } from 'react';
import Axios from 'axios';


class RegisP extends Component {
    constructor() {
        super();
        this.state = {

            isModalOpen: false,
            isModalOpen2: false,
            proveedores: [],

            productos: [],

            nombrepro: '',
            iva: '',
            preciobruto: '',
            tipo: '',
            idprove: '',
            tipoC: '',
            piezas: '',


            litros: '',
            sabor: '',
            tipoB: '',



        }



    }

    changeHanlder = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }
    openModal = () => { this.setState({ isModalOpen: true }); this.componentDidMount() }

    closeModal = () => { this.setState({ isModalOpen: false }); }

    openModal2 = () => { this.setState({ isModalOpen2: true }); }

    closeModal2 = () => { this.setState({ isModalOpen2: false }); this.componentDidMount() }



    postProd = (event) => {
        console.log("Registrabdo")

        event.preventDefault();
        const Data = {
            nombrepro: this.state.nombre,
            iva: this.state.iva,
            preciobruto: this.state.preciobruto,
            tipo: this.state.tipo,
            vista: true,
            idprove: this.state.idprove,
        };
        console.log(Data)
        const res = Axios.post("http://127.0.0.1:8000/producto/", Data)
        this.closeModal();
        this.setState({ isModalOpen2: true })

    }
    idproduc() {
        return (this.state.productos.length)


    }
    postProdEspecifico = (event) => {
        this.componentDidMount()
        console.log("Registrando PART2");
        console.log(this.state.tipo);

        if (this.state.tipo == 'Bebida') {
            console.log("Bebida")
            event.preventDefault();
            const Data = {
                litros: this.state.litros,
                tipo: this.state.tipoB,
                sabor: this.state.sabor,
                idproduc: (this.state.productos.length + 1),


            };
            console.log(Data)
            const res = Axios.post("http://127.0.0.1:8000/bebida/", Data)

        } else if (this.state.tipo == 'Comida') {
            console.log("Comida")
            event.preventDefault();
            const Data = {
                piezas: this.state.piezas,
                tipo: this.state.tipoC,
                idproduc: (this.state.productos.length + 1),



            };
            console.log(Data)
            const res = Axios.post("http://127.0.0.1:8000/comida/", Data)

        }
        this.closeModal2()


    }

    async componentDidMount() {
        const res = await Axios.get("http://127.0.0.1:8000/proveedor/");

        this.setState({ proveedores: res.data });
        const res2 = await Axios.get("http://127.0.0.1:8000/producto/");

        this.setState({ productos: res2.data });

    }
     updateData(id,vista)
    { 
        console.log(id)
        console.log(vista)
      const Data={
        
        vista:vista,
        
      }
        
        const res2 = Axios.put("http://127.0.0.1:8000/UpdateVistaProd/"+id+'/',Data);
       this.componentDidMount()
    }


    verificacion=(aux)=>{
 
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
    if(aux==true)
  {
      return false;
  }else{

      return true;
  }

}



    render() {
        if (this.state.isModalOpen == true) {
            return (
                <div className="RegisP">

                    <form onSubmit={this.postProd}>

                        <div className="input">
                            <label>Nombre</label>
                            <input onChange={this.changeHanlder} type='text' name="nombre" placeholder="Nombre" className="controlsP"></input>
                        </div>

                        <div className="input">
                            <label>Precio Bruto</label>
                            <input onChange={this.changeHanlder} type='number' name="preciobruto" placeholder="Precio" className="controlsP"></input>
                        </div>

                        <div className="input">
                            <label>Iva</label>
                            <input onChange={this.changeHanlder} type='number' name="iva" placeholder="Iva" className="controlsP"></input>
                        </div>
                        <div className="input">
                            <label>Tipo</label>
                            <select name="tipo" onChange={this.changeHanlder}>
                                <option selected="true" disabled="disabled"  >seleccione el tipo</option>
                                <option value="Comida">Comida</option>
                                <option value="Bebida">Bebida</option>

                            </select>
                        </div>

                        <div className="input">
                            <label>Proveedor</label>
                            <select name="idprove" onChange={this.changeHanlder}>
                                <option selected="true" disabled="disabled"  >seleccione el tipo</option>
                                {this.state.proveedores.map(proveedor => <option value={proveedor.idprove}>{proveedor.nombre}</option>)}


                            </select>
                        </div>




                        <button type="submit">Seguir</button>
                        <button onClick={this.closeModal} >Cerrar</button>

                    </form>

                </div>)

        } else if (this.state.isModalOpen2 == true && this.state.tipo == "Bebida") {
            return (
                <div className="RegisP">
                    <form onSubmit={this.postProdEspecifico}>


                        <div className="input">
                            <label>Tipo</label>
                            <select name="tipoB" onChange={this.changeHanlder}>
                                <option selected="true" disabled="disabled"  >seleccione el tipo</option>
                                <option value="Jugo">Jugo</option>
                                <option value="Refresco">Refresco</option>
                                <option value="Alcohol">Alcohol</option>
                                <option value="Alcohol">Agua</option>

                            </select>
                        </div>
                        <div className="input">
                            <label>Litros</label>
                            <input onChange={this.changeHanlder} type='number' name="litros" placeholder="litros" className="controlsP"></input>
                        </div>

                        <div className="input">
                            <label>Sabor</label>
                            <input onChange={this.changeHanlder} type='text' name="sabor" placeholder="sabor" className="controlsP"></input>
                        </div>




                        <button type="submit" >Registrar</button>


                    </form>

                </div>
            )
        } else if (this.state.isModalOpen2 == true && this.state.tipo == "Comida") {
            return (
                <div className="RegisP">
                    <form onSubmit={this.postProdEspecifico}>


                        <div className="input">
                            <label>Tipo</label>
                            <select name="tipoC" onChange={this.changeHanlder}>
                                <option selected="true" disabled="disabled"  >seleccione el tipo</option>
                                <option value="Dulce">Dulce</option>
                                <option value="Salado">Salado</option>


                            </select>
                        </div>
                        <div className="input">
                            <label>Piezas</label>
                            <input onChange={this.changeHanlder} type='number' name="piezas" placeholder="litros" className="controlsP"></input>
                        </div>






                        <button type="submit" >Registrar</button>


                    </form>

                </div>
            )
        }
        else {


            return (

                <div className="ViewsP">
                    <div className="VistaPelis">
                    <table className="tableVistaP">
                        <thead className="theadVistaP">

                            <tr>
                                
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Precio</th>
                                <th>Iva</th>
                                <th>Vista</th>

                            </tr>


                        </thead>

                        <tbody>
                            {this.state.productos.map(producto =>
                                <tr>

                                    <td> {producto.nombrepro}</td>
                                    <td>{producto.tipo}</td>
                                    <td>{producto.preciobruto}</td>
                                    <td>{producto.iva}</td>
                                    <td>{this.verificacion(producto.vista)}</td>
                                    <td><button>Editar</button>     <button title="Activar" onClick={() => this.updateData(producto.idprod,this.falsetrue(producto.vista))} >{this.activo_desactivo(producto.vista)} </button></td>


                                </tr>



                            )
                            }
                        </tbody>



                    </table>
                    
                </div><button onClick={this.openModal} >Registrar</button></div>
            )
        }

    }

}

export default RegisP