import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

function AddQuizz(){
    const [qtitle,settitle] = useState('');
    const [qdescription,setdescription] = useState('');
    
    const addQuizz = () =>{
    let data = {
        title: qtitle,
        description: qdescription
   }
    fetch('http://localhost:4001/exam/quiz/',{
    method:"POST",
    body: JSON.stringify(data),
    headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    }
   }).then(response => response.json())
     .then(json => console.log(json));
     alert("Quizz Added Successfully !!! ")
}


//const AddProduct =() => {
    return(
        <div id="products-div">
        <ul id="horizontal-list">
            <li> <Link id="link" to="/home"> Home </Link></li>
            <li> <Link id="link" to="/List">  Categories  </Link> </li>
            <li> <Link id="link" to="/quizz">  Quizzes   </Link> </li>
            <li> <Link id="link" to="/products">  Questions  </Link> </li>
            <li> <Link id="logout" to="/login">   Logout    </Link> </li>
             
             
        </ul>
        
        
            
            <div class = "product">
            <h2> Add Quizz</h2><br/>
            <b>Title</b> : <input type="text" onChange={ (e) => settitle(e.target.value)}/>
            <b>Description</b> : <input type="text" onChange={ (e) => setdescription(e.target.value)}/> <br/><br/>   
            <button id ="btn" onClick={addQuizz}>Add</button>
            </div>
            

        </div>
    )
    }

export default AddQuizz;