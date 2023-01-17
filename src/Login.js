import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import img1 from './images/signupimg.png';
function Login(){
    const[username,setusername] = useState('');
    const[password,setpassword] = useState('');
    const login = () =>{
        //alert (uname + " " + pwd);
        let data ={
            email: username,
            password:password
        }

        fetch('http://localhost:8000/api/user/validate',{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response=>{return response.text();})
          .then((text)=>{
            if(text=='valid'){
                    alert("Logged in Successful..")
                    window.location.href="./home";
            }else{
                alert('please verify credentails')
            }
    })
}
    return(
        <>
        <p id="logo1">eXam portal</p>
        <div id="signup-div">
            <h2> Login </h2>
            <img src={img1} /><br/><br/>
            Email: <input type="text" onChange={ (e) => setusername(e.target.value) }/> <br/><br/>
            Password: <input type="password" onChange={ (e) => setpassword(e.target.value)}/> <br/><br/>
            <button id="btn" onClick={login}>Login</button> <br/><br/>
            <Link id="link1" to="/signup">Not Registered? Signup</Link>
        </div>
        </>
    )
}
export default Login