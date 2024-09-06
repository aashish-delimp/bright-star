import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <ul className='flex mainnavigation text-[18px] text-[#555]'>
                <li><NavLink to='/about'>About Us</NavLink></li>
                <li><NavLink to='/'>Christian Schools</NavLink></li>
                <li><NavLink to='/'>Microschools</NavLink></li>
                <li><NavLink to='/'>Homeschool</NavLink></li>
                <li><NavLink to='/'>Resources</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                
            </ul>
        </>
    )
}

export default Navigation;