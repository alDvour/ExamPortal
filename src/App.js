
import './App.css';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import AddProduct from "./AddCategory";
import {Routes,Route,BrowserRouter, Router } from'react-router-dom';
import AddCategory from './AddCategory';
import ListCategory from './ListCategory';
import ListQuizz from './ListQuizz';
import UpdateCategory from './UpdateCategory';
import ListQuestions from './Questions';
import AddQuizz from './AddQuizz';


function App() {
  return (
    <>
   
    <BrowserRouter>
     <Routes>
     <Route path="" element={<Login/>}></Route>
     <Route path="/add" element={<AddCategory/>}></Route>
     <Route path="/list" element={<ListCategory/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/quizz" element={<ListQuizz/>}></Route>
      <Route path='/updatecategory' element={<UpdateCategory/>}></Route>
      <Route path="/questions" element={<ListQuestions/>}></Route>
      <Route path="/addquizz" element={<AddQuizz/>}></Route>

      
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
