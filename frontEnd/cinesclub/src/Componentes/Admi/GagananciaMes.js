import React,{Component} from 'react'
import Axios from 'axios'


class GananciaMes extends Component{
constructor()
{   super()
    this.state={
        ganancia:''
    }



}

async componentDidMount()
{

    const res =  await Axios.get("http://127.0.0.1:8000/GananciasMes/");
    this.setState({ganancia:res.data})

}


render()
{

    return(


        <div className="gananciaMes">

            <h1>Sus ganancias del mes son:</h1>
            <p>{this.state.ganancia}</p>

        </div>
    )
}

} export default GananciaMes