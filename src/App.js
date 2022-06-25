import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ToDoList from './components/TodoList/ToDoList.jsx';
import {ToDoForm} from './components/TodoForm/ToDoForm.jsx';
import ToDoContextProvider from './components/Context/ToDoContext';

function App() {
  return (


    <ToDoContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/todos' exact element={<ToDoList/>}/>
        <Route path='/addtodo' exact element={<ToDoForm/>}/>
      </Routes>
      </ToDoContextProvider>



  );
}

export default App;
