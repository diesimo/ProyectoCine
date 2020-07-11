import React, { Component } from 'react'
import './factura.css';

import Axios from 'axios'
class factura extends Component {
    constructor() {
        super();
        this.state = {
            idfuncion: '',
            cantentradas: '',
            isModalOpen: false,
            isModalOpen2: false,
            funcion: [],
            tituloP: '',
            infoComp: '',
            idsPro: '',
            cont: 0,
            productosC: [],


            fecha: '',
            monttotal: '',
            tipoinstru: '',
            idcliente: '',

            idfuncion: '',
            idfactura: '',
            cantentradas: '',


            facturaB: false,
            facturaP: false,
            factura: [],

            totalsindes: '',
            totalcondes: '',

            veriComida: false,
            veriBebida: false,



        }

        this.openModal = this.openModal.bind(this)

    }

    changeHanlder = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    renderizadoFac = () => {
        this.setState({ isModalOpen: true })



    }

    async obtenerProductos() {


        const res = await Axios.get("http://127.0.0.1:8000/getProducFac/" + localStorage.getItem('infoComp2') + "/")

        this.setState({ productosC: res.data })





    }

    openModal = async () => {
        if (localStorage.getItem('infoComp2') != null) {

            this.setState({ idsPro: JSON.parse(localStorage.getItem('infoComp2')) })
            this.setState({veriComida:localStorage.getItem('comida')})
            this.setState({veriBebida:localStorage.getItem('bebida')})
            this.obtenerProductos()

                

            this.setState({ cont: 0 })
            

        } else if (this.state.idfuncion == null) {
            this.setState({ cont: 0 })
        } else {

            this.setState({ cont: 1 })

        }

        if (localStorage.getItem('infoComp') != null) {
            this.setState({ cantentradas: localStorage.getItem('entradas') })
            this.setState({ idfuncion: localStorage.getItem('idfuncion') })
            this.setState({ tituloP: localStorage.getItem('tituloP') })
            this.setState({ infoComp: JSON.parse(localStorage.getItem('infoComp')) })

            this.componentDidMount()
            this.setState({ cont: 0 })
            this.setState({ idfuncion: null })
        } else if (this.state.idfuncion == null) {

            this.setState({ cont: 0 })
        } else {

            this.setState({ cont: 1 })

        }
        this.setState({ isModalOpen: true })

    }

    closeModal = () => {

        this.setState({ isModalOpen: false });

    }
    closeModal2 = async () => {


        if (localStorage.getItem('infoComp2') != null && localStorage.getItem('idfuncion') != null) {
            console.log("No es nulo")
            const res = await Axios.get("http://127.0.0.1:8000/DescuentoPorFecha/" + this.state.cantentradas + "/" + localStorage.getItem('idfuncion') + "/" + localStorage.getItem('infoComp2') + "/")
            this.setState({ totalsindes: res.data })
            const res2 = await Axios.get("http://127.0.0.1:8000/FechaUsuarios/" + res.data + "/" + localStorage.getItem('iduser') + "/")
            this.setState({ totalcondes: res2.data })
        } else if (localStorage.getItem('infoComp2') == null) {
            console.log("Es nulo")
            const res = await Axios.get("http://127.0.0.1:8000/DescuentoPorFecha/" + this.state.cantentradas + "/" + localStorage.getItem('idfuncion') + "/" + "0" + "/")
            this.setState({ totalsindes: res.data })
            const res2 = await Axios.get("http://127.0.0.1:8000/FechaUsuarios/" + res.data + "/" + localStorage.getItem('iduser') + "/")
            this.setState({ totalcondes: res2.data })
        } else if (localStorage.getItem('idfuncion') == null && localStorage.getItem('infoComp2') != null) {
            console.log("tercera")
            const res = await Axios.get("http://127.0.0.1:8000/DescuentoPorFecha/" + 0 + "/" + 0 + "/" + localStorage.getItem('infoComp2') + "/")
            this.setState({ totalsindes: res.data })
            const res2 = await Axios.get("http://127.0.0.1:8000/FechaUsuarios/" + res.data + "/" + localStorage.getItem('iduser') + "/")
            this.setState({ totalcondes: res2.data })

        }

        this.setState({ isModalOpen: false });

        console.log(this.state.totalcondes)
        console.log("termino")
        this.setState({ isModalOpen2: true });

    }
    async componentDidMount() {



        const res2 = await Axios.get("http://127.0.0.1:8000/factura/")
        this.setState({ factura: res2.data });
        if (localStorage.getItem('idfuncion') != null) {
            const res = await Axios.get("http://127.0.0.1:8000/getFuncionFac/" + localStorage.getItem('idfuncion') + "/")
            this.setState({ funcion: res.data });
        }
        

    }

    eliminar() {



    }


    postFactura = async () => {



        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        const Data = {
            fecha: (`${year}-0${month}-${day}`),
            monttotal: this.state.totalcondes['montoT'],
            tipoinstru: this.state.tipoinstru,
            idcliente: localStorage.getItem('iduser')

        };

        console.log(Data)
        const res = await Axios.post("http://127.0.0.1:8000/factura/", Data)
        this.postFacturaEspec();
        
        
        this.setState({ isModalOpen2: false })

    }

    postFacturaEspec = async () => {

        console.log('aja')
        console.log(this.state.infoComp['idfuncion'])
        if (this.state.infoComp['idfuncion'] != null) {
            console.log('hay funcion')
            const Data = {
                
                idfuncion: this.state.infoComp['idfuncion'],
                cantentradas: this.state.infoComp['entradas'],
                idfactura: this.state.factura.length + 2

            };

                console.log(Data)
                const res = await Axios.post("http://127.0.0.1:8000/facturaboleto/", Data)

            
        }
        console.log(this.state.veriComida)
        if (this.state.veriComida == 'true' ||this.state.veriBebida == 'true') {
            console.log('comida')
            console.log(this.state.idsPro)
            const aux = (this.state.idsPro['idprod'])
            console.log(aux)
            const mayor = (Math.max(...aux))
            
            var indice=0;
            for (var i = 0; i < mayor; i++) {
                console.log("primer for:"+i)
                for (var j = 0; j < aux.length; j++) {
                    console.log("segundo for:"+j)
                    if(aux[j] == (i + 1)){
                        indice=indice+1
                        }
                    
                        
                        console.log(aux.length-1)
                        console.log(j)
                        if (j == (aux.length - 1)) {
                            console.log("entro")
                            console.log(indice)
                            console.log(this.state.productosC)
                          const pro= (this.state.productosC[i])
                          console.log(pro)
                        
                           const precio=pro['preciobruto']
                           console.log(precio)
                            const Data = {

                                
                                cantidad: indice,
                                idobjeto: (i+1),
                                montoneto:(precio*indice),
                                idfactura:this.state.idfactura.length+2

                            };
                            console.log(Data)
                            const res = await Axios.post("http://127.0.0.1:8000/detallado/", Data)
                            
                            indice=0
                            
                            
                        }
                    
                }
            }


        }
        const idCl=localStorage.getItem('iduser')
        
        console.log(idCl)
        localStorage.setItem('iduser',idCl)

    }






    render() {

        if (this.state.isModalOpen == true && (this.state.cont == 0)) {
            console.log(this.state.isModalOpen)

            return (
                <React.Fragment>
                    <div className="Factura">
                        <div className="FacturaEs">
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
                                    {this.state.funcion.map((funcion, index) =>
                                        <tr key={index}>




                                            <td>{this.state.infoComp['titulo']}</td>
                                            <td>{this.state.infoComp['entradas']}</td>
                                            <td>{funcion.horario}</td>
                                            <td>{funcion.fecha}</td>
                                            <button onClick={this.eliminar} > Eliminar</button>






                                        </tr>
                                    )}

                                </tbody>


                            </table>


                        </div>

                        <div className="FacturaEs">
                            <h1>Factura de Productos</h1>
                            <table className="tableVistaP">



                                <thead className="theadVistaP">

                                    <tr>

                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th>Iva</th>

                                    </tr>


                                </thead>

                                <tbody>
                                    {this.state.productosC.map((pro, index) =>
                                        <tr key={index}>



                                            <td>{pro.nombrepro}</td>
                                            <td>{pro.preciobruto}</td>
                                            <td>{pro.preciobruto}</td>
                                            <td>{pro.iva}</td>
                                            <button onClick={this.eliminar} > Eliminar</button>





                                        </tr>
                                    )}

                                </tbody>



                            </table>



                        </div>

                        <button onClick={this.closeModal}>Cerrar</button>

                        <button onClick={this.closeModal2}>Realizar Compra</button>
                    </div> </React.Fragment>)

        } else if (this.state.cont == 1 && this.state.isModalOpen == true) {
            return (<div className="FacturaB"> <div className="tableVistaP" >
                <div><p>No tiene nada en la factura aun</p></div>

                <button className="botomOpen" onClick={this.closeModal}>Cerrar</button></div></div>)

        } else if (this.state.isModalOpen2 == true) {
            return (
                <div className="FacturaB"> <div className="tableVistaP" >
                    <div><h1>Su compraa</h1>



                        <p>Descuento: {this.state.totalcondes['Descuento']}</p>
                        <p>Monto Total: {this.state.totalcondes['montoT']}</p>





                        <select name="tipoinstru" onChange={this.changeHanlder}>
                            <option selected="true" disabled="disabled"  >seleccione el tipo</option>
                            <option value="Tarjeta">Tarjeta</option>
                            <option value="Paypal">Paypal</option>
                        </select>
                        <button className="botomOpen" onClick={this.postFactura}>Finalizar</button>

                    </div>




                </div></div>

            )
        }
        else if (this.state.funcion != null) {
            return (<button className="botomOpen" onClick={this.openModal} >FACTURA</button>)

        }
        else {
            return (
                <React.Fragment>
                    <div>
                        <button className="botomOpen" onClick={this.openModal} >FACTURA</button>





                    </div>

                </React.Fragment>
            )
        }
    }


}




export default factura