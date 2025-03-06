import React from 'react'
import Subnav from './Subnav'

const Navbar = () => {
  return (
    <div className='flex px-10 py-5 bg-emerald-600 text-xl text-white font-medium hover:cursor-pointer'>
      <h1>Technova Store</h1>
      <Subnav/>
    </div>
  )
}

export default Navbar
