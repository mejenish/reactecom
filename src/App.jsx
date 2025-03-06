import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import productData from "./database.json"
import Products from './components/Products'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Products item={productData}/>
      <Footer/>
    </div>
  )
}

export default App

