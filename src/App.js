
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ToDoList from './components/TodoList/ToDoList.jsx';
import { ToDoForm } from './components/TodoForm/ToDoForm.jsx';
import { useState } from 'react';


function App() {

  const [todos, setTodos] = useState([])

  const addToDo = (todo) => {
    const id = todos.length + 1
    const newToDo = { ...todo, id };
    setTodos([...todos, newToDo])
  }
  const amountOfTodos = () => {
    const amount = todos.length
    return amount
  }
  const removeAll = () => {
    setTodos([])
  }

  const updateStatusToDo = (id, newStatus) => {
    const copiaArray = [...todos]; //creamos copia del array
    //
    const newTodosArray = copiaArray.map((todo) => {
      if (id === todo.id) {
        return { ...todo, status: newStatus }
      } else {
        return todo
      }
    })
    setTodos(newTodosArray)
  }

  return (


    <>
      <NavBar amountOfTodos={amountOfTodos} />
      <ToDoList todos={todos} removeAll={removeAll} updateStatusToDo={updateStatusToDo} />
      <ToDoForm addToDo={addToDo} />
    </>





  );
}

export default App;
