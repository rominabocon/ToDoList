import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faList,
  faPlus,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'
import { ToDoContext } from '../Context/ToDoContext';

function NavBar() {
    const {amountOfTodos} = useContext(ToDoContext)

  return (
    <>
        <div className="topnav">
            <Link to='/' className='active'>
                <FontAwesomeIcon icon={faHome} className='mr-3' /> Home
            </Link>
            <Link to='/todos'>
                <FontAwesomeIcon icon={faList} className='mr-3' /> My to-do list
            </Link>
            <Link to='/addtodo'>
                <FontAwesomeIcon icon={faPlus} className='mr-3' /> Add item
            </Link>
            <div className='lostIcon'>
                <FontAwesomeIcon icon={faCheckSquare} className='mr-3' /> {amountOfTodos()}
            </div>
        </div>
    </>
  )
}

export default NavBar