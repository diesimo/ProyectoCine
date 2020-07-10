import React,{Component } from 'react'
import './Login.css'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';


class Login extends Component{

constructor(props)
{
    super(props);
    this.state={

        identi:'',
        passw:'',
        datos:[],
        bool:false
       

      


    }
 

}
changeHanlder = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    
}
async componentDidMount2(ident, passw)
    {         
       
        const res =  await Axios.get("http://127.0.0.1:8000/UsuarioContra/"+ident+"/"+passw+'/');
        console.log(res.data)
        
        this.setState({datos: res.data});
        localStorage.setItem('iduser',this.state.datos.iduser)
        this.setState({bool:this.state.datos.bool})

    }
   

render()
{
    if(this.state.bool==false)
    {
    return(
    <React.Fragment>
<div className='registro'>
    <form className='form-box'>
            <h1 className='form-title'>Login</h1>
    
            <input 
                onChange={this.changeHanlder}
                name="identi"
                className="form-control"
                type="text"
                placeholder="username"
            >
                   
    
            </input>
    
            <input 
                onChange={this.changeHanlder}
                name="passw" 
                className="form-control"
                type="password"
                placeholder="Password"
              >
    
              </input>
    
        
          
        
          </form>  
          <button onClick={()=> this.componentDidMount2(this.state.identi,this.state.passw)}>login </button>
      </div>
       
</React.Fragment>
    )}else{
        return(<Redirect to="/body"></Redirect>)

        
    }


}



} export default Login