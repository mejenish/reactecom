import React from 'react'
import Subnav from './Subnav'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-10 py-5 bg-emerald-600 text-xl text-white font-medium hover:cursor-pointer'>
      <Link to='/'>Technova Store</Link>
      <Subnav/>
    </div>
  )
}

export default Navbar
