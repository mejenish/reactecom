import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { realContext } from '../context/UserContext';


const Productss = () => {
    const randomContext = useContext(realContext);
    return (
        <div>
            <Navbar />
            <h1>This is Products Page! {randomContext.email}</h1>
            <Footer />
        </div>
    )
}

export default Productss
