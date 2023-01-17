

import { useEffect, React, useState } from 'react';
import { json, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import AddCategory from './AddCategory';


function ListQuizz() {
    const [quizz, setQuizz] = useState([]);
    const url = 'http://localhost:4001/exam/quiz/';

    const { id } = useParams();
    useEffect(() => {
        axios.get(url).then(res => {
            setQuizz(res.data);
        })
    }, []);

    function deleteQuizz (qId)
 {
    fetch(`http://localhost:4001/exam/quiz/${qId}`,{
        method: 'DELETE'
    }).then((result)=>{
        result.json().then((res) => {
        console.warn(res)
        })
    })
 }




    return (
        <div id="products-div">
            <ul id="horizontal-list">
                <li> <Link id="link" to="/home"> Home </Link></li>
                <li> <Link id="link" to="/List">  Category List  </Link> </li>
                <li> <Link id="link" to="/quizz">  Quizzes    </Link> </li>
                <li> <Link id="link" to="/question">  Questions  </Link> </li>
                <li> <Link id="logout" to="/login">   Logout    </Link> </li>


            </ul>
            <div class="products-div">
                <h2>  Quizzes</h2>
                
                        
                <table id="products-table">
                    <thead>
                        <th> ID </th>
                        <th> Title </th>
                        <th> No. Questions </th>
                        <th> Max.Marks</th>
                        
                        <th> Delete</th>
                    </thead>
                    {quizz.map(c => <tr>
                        
                        <td>{c.qId}</td>
                        <td>{c.title}</td>
                        <td>{c.numOfQuestions}</td>
                        <td>{c.maxMarks}</td>
                       
                        <td><button onClick={()=>deleteQuizz(c.qId)}>Delete</button></td>
                        <td></td>

                    </tr>)}

                </table> 
            </div>
            <div>
                <button id='add'><Link  to="/addquizz" id='ad'>  Add Quizz   </Link></button>
            </div>

        </div>
    )
}

export default ListQuizz
