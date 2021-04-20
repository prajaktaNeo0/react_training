import {useState,useEffect} from "react"
import axios from "axios"
import { Link ,withRouter } from 'react-router-dom';


function Login(props){
    useEffect(()=>{
        //alert("Mounted and Updated")
    })
    
    var [error ,setError] = useState()
    var [user ,setUser] = useState({})

    let getEmail =(event)=>{
        setUser({email:event.target.value,password:user.password})
        user.email = event.target.value
    }
    let getPassword = (event)=>{
        setUser({password:event.target.value,email:user.email})
        user.password = event.target.value
    }
    let login = ()=>{
        console.log("User is trying to login",user)
        let loginapi ="https://apibyashu.herokuapp.com/api/login"
           
       
        axios({
            url:loginapi,
            method:"post",
            data:user
        }).then((response)=>{
             console.log("response from api",response.data)
             if(response.data.token){
                localStorage.token = response.data.token
                localStorage.email = response.data.email
                props.history.push("/")
             }else{
                alert("Invalid Credentials")
             }
            // props.informLogin("Prajakta Pawar")
        },(error)=>{
             console.log("Error from api",error)
        })
       /* if(user.email == 'test@gmail.com' && user.password == '123456'){
            setError("Login Succes")
            props.informLogin("Prajakta Pawar")
        }else{
            setError("Invalid Login")
        }*/
    }

    return(
        <div style={{width:"50%" , margin:"auto"}}>
            <div className="form-group">
                <label>Email</label>
            <input type="email" class="form-control" onChange={getEmail}></input>
            {/* user && <label>{user.email}</label> */}
            </div>
            <div className="form-group">
            <label>Password</label>
            <input type="password" class="form-control" onChange={getPassword}></input>
            {/* user && <label>{user.password}</label> */}
            </div>
            <div style={{color:"red"}}>
                {error}
            </div>
        <button className="btn btn-primary" onClick={login}>Login</button>
        </div>
    )
}

export default withRouter(Login)