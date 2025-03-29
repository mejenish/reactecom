import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';
import Products from '../components/Products';

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
                products.map((data)=>{
                    return <Products key={data.id} pPicture={data.picture} pName={data.name} pModel={data.model} pBrand={data.brand} pFeatures={data.features} pPrice={data.price}/>
                })
            }
            <Footer />
        </div>
    )
}

export default Home
