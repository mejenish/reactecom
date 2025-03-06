import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import productData from "./database.json"
import Products from './components/Products'


const App = () => {
  console.log(productData.products[0]);
  const listedProducts = productData.products;
  return (
    <div>
      <Navbar />
      {
        listedProducts.map((data, i) => {
          return <Products key={listedProducts[i].id} pName={data.name} pModel={data.model} pPrice={data.price} pBrand={data.brand} pFeatures={data.features} pPicture={data.picture} />
        })
      }
      <Footer />
    </div>
  )
}

export default App

