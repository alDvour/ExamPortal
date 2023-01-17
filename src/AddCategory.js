import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

function AddCategory(){
    const [ctitle,settitle] = useState('');
    const [cdescription,setdescription] = useState('');
    
    const addCategory = () =>{
    let data = {
        title: ctitle,
        description: cdescription
   }
    fetch('http://localhost:4001/exam/category/',{
    method:"POST",
    body: JSON.stringify(data),
    headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    }
   }).then(response => response.json())
     .then(json => console.log(json));
     alert("Category Added Successfully !!! ")
}


//const AddProduct =() => {
    return(
        <div id="products-div">
        <ul id="horizontal-list">
            <li> <Link id="link" to="/home"> Home </Link></li>
            <li> <Link id="link" to="/List">  Category List  </Link> </li>
            <li> <Link id="link" to="/add">  Add Product    </Link> </li>
            <li> <Link id="link" to="/products">  Orders  </Link> </li>
            <li> <Link id="logout" to="/login">   Logout    </Link> </li>
             
             
        </ul>
        
        
            
            <div class = "product">
            <h2> Add Category </h2><br/>
            <b>Title</b> : <input type="text" onChange={ (e) => settitle(e.target.value)}/>
            <b>Description</b> : <input type="text" onChange={ (e) => setdescription(e.target.value)}/> <br/><br/>   
            <button id ="btn" onClick={addCategory}>Add</button>
            </div>
            

        </div>
    )
    }

export default AddCategory;