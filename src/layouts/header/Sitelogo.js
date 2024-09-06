import React from 'react'
import { NavLink } from 'react-router-dom'

const Sitelogo = () => {
  return (
    <>
     <NavLink to='/'><img src={require('../../assets/images/britestarlogo.png')} alt='sitelogo'className='max-w-[290px]'/></NavLink>
    </>
  )
}

export default Sitelogo