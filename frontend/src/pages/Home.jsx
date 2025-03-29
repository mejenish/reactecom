import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/api/products").then((res) => {
            setProducts(res.data);
        }).catch((err) => {
            console.log("Error: " + err);
        })
    }, [])

    return (
        <div>
            <Navbar />
            {
                console.log(products)
            }
            <Footer />
        </div>
    )
}

export default Home
