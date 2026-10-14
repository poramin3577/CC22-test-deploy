import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {

const navClass = ({isActive})=>
        isActive? 'text-red-500 font-bold hover:text-2xl'
                : 'text-black hover:text-gray-400 hover:text-2xl hover:font-medium'

  return (
    <div>
        <nav className='mb-10 '>
            <ul className='flex justify-center items-center gap-x-8 font-light'>
                <li><NavLink to='/' className={navClass}>Home</NavLink></li>
                <li><NavLink to='/about' className={navClass}>About</NavLink></li>
                <li><NavLink to='/contact' className={navClass}>Contact</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;
