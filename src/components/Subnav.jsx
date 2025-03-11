import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

const Subnav = () => {
    return (
        <div className='flex gap-10 absolute right-10 px-5'>
            <Link to='/'>Home</Link>
            <Link to='/Products'>Products</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
    )
}

export default Subnav
