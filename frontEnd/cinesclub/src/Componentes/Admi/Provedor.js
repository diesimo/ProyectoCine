import React, {Component} from 'react';
import Axios from 'axios';
import Modal from 'react-modal'


class Prove extends Component{
constructor(){
super();
this.state={
    nombre:'',
    direccion:'',
    rif:'',

    proveedores:[],

    isModalOpen:false,
    isModalOpen2:false,

    proveedit:[],
}

}
async componentDidMount()
    {         
        const res =await Axios.get("http://127.0.0.1:8000/proveedor/");
        console.log(res)
        console.log('jola')
        this.setState({proveedores: res.data});

    }
async componentDidMount2(id)
    {         
       
        const res =  await Axios.get("http://127.0.0.1:8000/getProveEdit/"+id+'/');
        console.log(res.data)
        
        this.setState({proveedit: res.data});

    }
 postProveedor= async (event)=>
{
    
    event.preventDefault();
    const Data={
        nombre:this.state.nombre,
        direc:this.state.direccion,
        rif:this.state.rif,
        
    };
    console.log(Data)
     const res = await Axios.post("http://127.0.0.1:8000/proveedor/", Data)
     
     

}



changeHanlder = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    
}

changeHanlder2 = (event) => {
    this.setState({ [event.target.name]: event.target.value})
    
}

openModal=()=>{  this.setState({isModalOpen:true})}

closeModal=()=>{this.setState({isModalOpen:false})}

openModal2=(id)=>{  

   this.componentDidMount2(id)
this.setState({isModalOpen2:true})


}

closeModal2=()=>{this.setState({isModalOpen2:false})}
closeModal3=(id)=>{
    
    this.updateData(id);
    this.setState({isModalOpen2:false});
}
async updateData(id)
    { 

        const Data={
            nombre:this.state.nombre,
            direc:this.state.direccion,
            rif:this.state.rif,
            
        };
        console.log(Data)
        const res2 =await Axios.put("http://127.0.0.1:8000/getProveEdit/"+id+'/',Data);
        this.componentDidMount();
    }


render(){



    return(
        <React.Fragment>
    <div className="Prove">


    <button onClick={this.openModal}>Registrar</button>
    <table className="tableVistaP"> 
    <thead className="theadVistaP">

        <tr>
        <th>Nombre</th>
        <th>Rif</th>
        <th>Direccion</th>
        
        </tr>


    </thead>
    
    <tbody>
    {this.state.proveedores.map(proveedor=>
        <tr>

        <td>{proveedor.nombre}</td>
        <td>{proveedor.rif}</td>
        <td>{proveedor.direc}</td>
        <td><button title="Activar" onClick={()=> this.openModal2(proveedor.idprove)}>Editar</button></td>
       
        
        </tr>

      
       
        )
    }
    </tbody>
    
    

    </table>
   
</div>
        <Modal isOpen={this.state.isModalOpen}>
        <div className="Prove" >
            <h4>Registrar Provedor</h4>
            <form onSubmit={this.postProveedor}>
                    <div className="input">
                    <label>Nombre</label>
                   <input onChange={this.changeHanlder}  type='text' name="nombre"  placeholder="Direccion" className="controlsP"></input>
                   </div>
                   
                   <div className="input">
                   <label>Direccion</label>
                   <input  onChange={this.changeHanlder} type='text' name="direccion" placeholder="Nombre" className="controlsP"></input>
                   </div>
                   <div className="input">
                   <label>Rif</label>
                   <input  onChange={this.changeHanlder} type='text' name="rif" placeholder="Rif" className="controlsP"></input>
                   </div>
                   <button type="submit"  >Registrar</button>
                   <button  onClick={this.closeModal} >Cerrar</button>
            </form> 
       </div>
        </Modal>


        <Modal isOpen={this.state.isModalOpen2}>
        <div className="Prove" >
            
            
            <form >
                { this.state.proveedit.map(prove=>  
                <div>
                   <div className="input">
                    <label>Nombre</label>
                   <input onChange={this.changeHanlder2} defaultValue={prove.nombre} type='text' name="nombre"  placeholder="Direccion" className="controlsP"></input>
                   </div>
                   
                   <div className="input">
                   <label>Direccion</label>
                   <input  onChange={this.changeHanlder2} defaultValue={prove.direc} type='text' name="direccion" placeholder="Nombre" className="controlsP"></input>
                   </div>
                   <div className="input">
                   <label>Rif</label>
                   <input  onChange={this.changeHanlder2} type='text' defaultValue={prove.rif} name="rif" placeholder="Rif" className="controlsP"></input>
                   </div>
                  <button  onClick={()=>this.closeModal3(prove.idprove)} >Guardar</button>
                   <button  onClick={this.closeModal2} >Cerrar</button>
                   </div>)}
                    
                   
            </form> 
       </div>
        </Modal>
       </React.Fragment>
    )
}



}

export default Prove