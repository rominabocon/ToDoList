import { useContext } from 'react';
import { ToDoContext } from '../Context/ToDoContext';
import './ToDoList.css'

const ToDoList = () => {
 
 
    const { todos, removeAll, updateStatusToDo } = useContext(ToDoContext);

  console.log(todos)


  return (
    <>
      <div className='containerList'>
        {todos.length > 0 && (
          <ul>
            <div className='containerToDoList'>
 
                    <table className='min-w-full leading-normal'>
                    <thead>
                        <tr>
                            <th className='col-1'> User </th>
                            <th className='col-1'> Title </th>
                            <th className='col-1'> Created at </th>
                            <th className='col-1'>Status </th>
                            <th className='col-1'> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td className='usuarioImg'>
                                <img alt='profil'
                                    src='https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png'
                                    className='userImage' />
                                <p>
                                    {todo.user}
                                </p>
                                
                            </td>
                            <td >
                                <p>
                                {todo.title}
                                </p>
                            </td>
                            <td >
                                <p>
                                    {todo.date}
                                </p>
                            </td>
                            <td >
                            <span >
                            <select
                                id='status'
                                value={todo.status}
                                onChange={(e) =>
                                updateStatusToDo(todo.id, e.target.value)
                                }
                            >
                                <option value=''>Select status</option>
                                <option value='pending'>Pending</option>
                                <option value='inprogress'>
                                In Progress
                                </option>
                                <option value='done'>Done</option>
                            </select>
                            </span>
                        </td>
                        <td >
                            <button
                            className='btn'
                            // onClick={() => removeToDo(todo.id)}
                            >
                            Remove
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                
                                <button onClick={removeAll}>Remove All</button>
        </ul>
        )}
        {todos.length === 0 && (
            <div className='seachingList'>
          <img
            src='https://cdn.dribbble.com/users/898770/screenshots/3744292/search-bar.gif'
            alt='nothing'
            style={{ margin: '30px'}}
          />
          </div>
        )}
      </div>
    </>
  );
};

export default ToDoList;
