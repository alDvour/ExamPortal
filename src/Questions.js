
import { useEffect, React, useState } from 'react';
import { json, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import AddCategory from './AddCategory';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ListQuestions() {
    const [questions, setQuestions] = useState([]);
    const url = 'http://localhost:4001/exam/questions/quiz/{quesId}';

    const { id } = useParams();
    useEffect(() => {
        axios.get(url).then(res => {
            setQuestions(res.data);
        })
    }, []);


   
    
 function deleteQuestion (cid)
 {
    fetch(`http://localhost:4001/exam/questions/${cid}`,{
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
                <li> <Link id="link" to="/questions">  Questions  </Link> </li>
                <li> <Link id="link" to="/login">   Logout    </Link> </li>


            </ul>
            </div>
            <div >
                <h2>  Category Lists</h2>
                
                    {questions.map(p =>
                        <div class="card">
                            {p.quesId}
                                <h4>{p.content}</h4>
                                {p.option1}{p.option2}{p.option3}{p.option4}
                                <div class="cbtn"><button id='cbtn'>open</button></div>
                                <button id='cbtn' onClick={() => deleteQuestion(p.quesId)}>delete</button>
                            
                        </div>)}     

                
            </div>
            <div>
                <button><Link to="/add">  Add Category    </Link></button>
            </div>

        </div>
    )
}

export default ListQuestions;
