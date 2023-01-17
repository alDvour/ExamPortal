import {Link} from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import img1 from './images/signupimg.png';
function SignUp(){
    const [username,setuname] = useState('');
    const[pwd,setpassword] = useState('');

    // const setuname = (e) => {
    //     setuname(e.target.value);
    // }
    // const validate = () =>{
    //     alert('Registered')
    // }
    const register = () =>{
        //alert (uname + " " + pwd);
        let data ={
            email: username,
            password:pwd
        }

        fetch(`http://localhost:8000/api/user/add`,{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }).then(response=> response.json())
          .then(json => console.log(json));
          alert('Sign Up Successful')
    }
    return(
        <>
        <p id="logo1">eXam portal</p>
        <div id="signup-div">

         <h2>Sign Up</h2>
         <img src={img1} /><br/><br/>
         
         Email: <input type="text" onChange={ (e) => setuname(e.target.value)} /> <br /> <br />
         Password: <input type="password" onChange={ (e) => setpassword(e.target.value)}/> <br /> <br /> 
         <button id="btn" onClick={register}>Register</button>  <br /> <br />
         
         <Link id="link1" to="/login">Already Registered? Login</Link>
      
      </div>
      </>
    )
}

export default SignUp