
import { useState, useContext } from 'react';
import { ToDoContext } from '../Context/ToDoContext';
import './ToDoForm.css'

export const ToDoForm = () => {
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');
    const [status, setStatus] = useState('');


    const { addToDo } = useContext(ToDoContext);

    const fechaDeHoy = new Date().toLocaleDateString()
    
    const onSubmit = (e) => {
        e.preventDefault();
        addToDo({ title, user, status, date: fechaDeHoy });
        setTitle('');
        setUser('');
        setStatus('');

      };

  return (
        <div className="container">
            <form  onSubmit={onSubmit} >
                <label htmlFor='title'>Title</label>
                <input 
                    id='title'
                    type='text'
                    placeholder='Do the dishes'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoComplete='off'/>
        
                <label htmlFor='user'> User </label>
                <input
                    id='user'
                    type='text'
                    placeholder='rominabocon'
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    autoComplete='off'
                />
        
                <select
                    id='status'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    >
                    <option value=''>Select status</option>
                    <option value='pending'>Pending</option>
                    <option value='inprogress'>In Progress</option>
                    <option value='done'>Done</option>
                    </select>
                    
                    <input
                    type='submit'
                    value='Add to-do'
                        />
            </form>
        </div>
  )
}

