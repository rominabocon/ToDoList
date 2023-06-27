import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faList,
    faPlus,
    faCheckSquare
} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'


function NavBar({ amountOfTodos }) {


    return (
        <>
            <div className="topnav">
                <a href='/' className='active'>
                    <FontAwesomeIcon icon={faHome} className='mr-3' /> Home
                </a>
                <a href='/todos'>
                    <FontAwesomeIcon icon={faList} className='mr-3' /> My to-do list
                </a>
                <a href='/addtodo'>
                    <FontAwesomeIcon icon={faPlus} className='mr-3' /> Add item
                </a>
                <div className='lostIcon'>
                    <FontAwesomeIcon icon={faCheckSquare} className='mr-3' /> {amountOfTodos()}
                </div>
            </div>
        </>
    )
}

export default NavBar