import { createContext, useState } from 'react';

export const ToDoContext = createContext()

const ToDoContextProvider = ({children}) => {

  const [todos, setTodos] = useState([])
  
  console.log(todos)

  const addToDo = (todo) => {
    const id = todos.length + 1
    const newToDo = {...todo, id};
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
      if(id === todo.id) {
        return {...todo, status:newStatus }
      } else {
        return todo
      }
    })
    setTodos(newTodosArray)
  }


  return(
    <ToDoContext.Provider value={{
      todos,
      addToDo,
      amountOfTodos,
      removeAll,
      updateStatusToDo
    }}
    >
        {children}
      </ToDoContext.Provider>
  )
}


export default ToDoContextProvider;






































// import { createContext, useState } from 'react';

// export const ToDoContext = createContext();

// const ToDoContextProvider = ({ children }) => {
//   const [todos, setTodos] = useState([]);

//   const addToDo = (todo) => {
//     const id = todos.length + 1;
//     const newToDo = { ...todo, id };
//     setTodos([...todos, newToDo]);
//   };

//   const removeToDo = (id) => {
//     const todosArrayCopy = [...todos];
//     const newTodosArray = todosArrayCopy.filter((todo) => todo.id !== id);
//     setTodos(newTodosArray);
//   };

//   const updateStatusToDo = (id, newStatus) => {
//     const todosArrayCopy = [...todos];
//     const newTodosArray = todosArrayCopy.map((todo) => {
//       if (id === todo.id) {
//         return { ...todo, status: newStatus };
//       } else {
//         return todo;
//       }
//     });
//     setTodos(newTodosArray);
//   };

//   const removeAll = () => {
//     setTodos([]);
//   };

//   const amountOfTodos = () => {
//     const amount = todos.length;
//     return amount;
//   };

//   return (
//     <ToDoContext.Provider
//       value={{
//         todos,
//         addToDo,
//         removeToDo,
//         updateStatusToDo,
//         removeAll,
//         amountOfTodos,
//       }}
//     >
//       {children}
//     </ToDoContext.Provider>
//   );
// };

// export default ToDoContextProvider;
