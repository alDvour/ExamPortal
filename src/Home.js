import {Link} from 'react-router-dom';
import React, {} from 'react';
import './App.css'

function Home(){
    return(
        
        // <h2>Home Page</h2>
        <div id="products-div">
            <p id="logo">eXamportal</p>
            
        <ul id="horizontal-list">
            <li> <Link id="link" to="/home"> Home </Link></li>
            <li> <Link id="link" to="/List">  Categories  </Link> </li>
            <li> <Link id="link" to="/quizz">  Quizzes   </Link> </li>
            <li> <Link id="link" to="/questions">  Questions  </Link> </li>
            <li> <Link id="link" to="/updatecategory"> UpdateCategory    </Link> </li>
            <li> <Link id="logout" to="/login">   Logout    </Link> </li>
             
             
        </ul>
        <p>Welcome to <i>eXamportal</i> !!!</p>
        </div>
        
    )
}

export default Home