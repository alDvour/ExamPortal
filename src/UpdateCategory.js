import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function UpdateCategory(){
    const [ctitle,settitle] = useState('');
    const [cdescription,setdescription] = useState('');
    const {ccid,setid} = useState('');
    
    const updateCategory = (id) =>{
    let data = {
        cid: ccid,
        title: ctitle,
        description: cdescription
   }
    fetch('http://localhost:4001/exam/category/',{
    method:"PUT",
    body: JSON.stringify(data),
    headers : {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    }
   }).then(response => response.json())
     .then(json => console.log(json));
     alert("Category Updated Successfully !!! ")
}


// const deleteCategory = (categoryId) =>{
    
//     const url= 'http://localhost:4001/exam/category/${categoryId}';
//     axios.delete(url).then(()=> {
//         alert('category deleted')
//         axios.get("http://localhost:4001/exam/category/")
//     })
// }
// useEffect(() => {
//     axios.get(url).then(res => {
//         setcategory(res.data);
//     })
// },[]);
//const AddProduct =() => {
    return(
        <div id="products-div">
        <ul id="horizontal-list">
            <li> <Link id="link" to="/home"> Home </Link></li>
            <li> <Link id="link" to="/List">  Category List  </Link> </li>
            <li> <Link id="link" to="/add">  Quizzes    </Link> </li>
            <li> <Link id="link" to="/products">  Questions </Link> </li>
            <li> <Link id="logout" to="/login">   Logout    </Link> </li>
            <li> <Link id="link" to="/">   delete    </Link> </li>
             
             
        </ul>
        
        
            
            <div class = "product">
            <h2> UpdateCategory </h2><br/>
            <b>ID</b> : <input type="text" onChange={ (e) => setid(e.target.value)}></input>
            <b>Title</b> : <input type="text" onChange={ (e) => settitle(e.target.value)}/>
            <b>Description</b> : <input type="text" onChange={ (e) => setdescription(e.target.value)}/> <br/><br/>   
            <button id ="btn" onClick={updateCategory}>update</button>
            
            </div>
            

        </div>
    )
    }

export default UpdateCategory;