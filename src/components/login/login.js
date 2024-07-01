import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Register from "../register/register";
import Homepage from "../homepage/homepage";

function Login() {
    const navigate = useNavigate(); 

    const [ user, setUser] = useState({
        email:"",
        password:""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
const Login = () => {
    axios.post("http://localhost:3001/create",user)
    .then(res => console.log(res))
    navigate("/register");
}

  return (
    <div className="login">
         {console.log("User",user)}
    <h1>Login</h1>
    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
    <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
    <div className="button"  onClick={Login}>Login</div>
    <div>or</div>
    <div className="button" onClick={Register}>Register</div>
</div>
  )
}

export default Login
