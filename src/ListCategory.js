
import { useEffect, React, useState } from 'react';
import { json, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import AddCategory from './AddCategory';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ListCategory() {
    const [category, setCategory] = useState([]);
    const url = 'http://localhost:4001/exam/category/';

    const { id } = useParams();
    useEffect(() => {
        axios.get(url).then(res => {
            setCategory(res.data);
        })
    }, []);


    // const [ctitle, settitle] = useState('');
    // const [cdescription, setdescription] = useState('');

    //     const listCategory = () => {
    //          let data = {
    //              title: ctitle,
    //              description: cdescription
    //          }
    //         fetch('http://localhost:4001/exam/category/')
    //             .then((response) => response.json())
    //             .then(json => console.log(json))
    //     }
    
 function deleteCategory (cid)
 {
    fetch(`http://localhost:4001/exam/category/${cid}`,{
        method: 'DELETE'
    }).then((result)=>{
        result.json().then((res) => {
        console.warn(res)
        })
    })
 }




    return (
        <div id="products-div">
            <div id='card'>
            <ul id="horizontal-list">
                <li> <Link id="link" to="/home"> Home </Link></li>
                <li> <Link id="link" to="/List">  Category List  </Link> </li>
                <li> <Link id="link" to="/quizz">  Quizzes  </Link> </li>
                <li> <Link id="link" to="/products">  Questions  </Link> </li>
                <li> <Link id="logout" to="/login">   Logout    </Link> </li>


            </ul>
            </div>
            <div >
                <h2>  Category Lists</h2>
                
                    {category.map(p =>
                        <div class="card">
                            {p.cid}
                                <h4>{p.title}</h4>
                                {p.description}<br></br>
                                {/* <div class="cbtn"><button id='cbtn'>open</button></div> */}
                                <div class="cbtn "><button id='cbtn'><Link to="/updatecategory" id="ad"> Update </Link></button><t></t>
                                <button id='cbtn' onClick={() => deleteCategory(p.cid)}>delete</button></div>
                            
                        </div>)}     

                
            </div>
            <div>
                <button id='add'><Link to="/add" id="ad">  Add Category    </Link></button>
            </div>

        </div>
    )
}

export default ListCategory
