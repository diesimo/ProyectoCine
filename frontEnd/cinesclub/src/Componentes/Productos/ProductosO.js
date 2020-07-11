import React,{Component} from 'react'
import Axios from 'axios'



class Prod extends Component{

constructor(){
super();
this.state={

productos:[],


}


}



async componentDidMount()

{


const res =  await Axios.get("http://127.0.0.1:8000/producto/");
console.log(res.data)
this.setState({productos:res.data})



}




render(){





    return(
        <React.Fragment>
          

            {this.state.productos.map(producto=>
                <div>

                    <p>{producto.nombrepro}</p>
                    
                </div>

                
                )}

           





        </React.Fragment>


    )
}

} export default Prod