import React from 'react'

const Products = (props) => {
  const sStyle = {
    height: "150px",
    width: "auto",
    margin: "0px 0px 0px 40px"
  }
  return (
    <div className='inline-block h-120 w-65 py-6 px-3 bg-gray-100 ml-10 mt-10 rounded relative'>
      <img src={props.pPicture} alt='products' style={sStyle} />
      <h1 className='text-2xl font-medium mt-5'>{props.pModel}</h1>
      <h3>{props.pBrand} | {props.pName}</h3>
      <h3 className='font-medium mt-5'>Features</h3>
      <ol className='list-none text-l text-gray-600'>
        <h4>{props.pFeatures.map((data, key) => {
          return <li key={key}>{data}</li>
        })}</h4>
      </ol>
      <h3 className='font-medium text-orange-600 absolute bottom-14'>Rs. {Math.round(props.pPrice)}</h3>
      <button className='text-white bg-emerald-600 px-3 py-2 rounded absolute bottom-2 center w-60'>Buy Now</button>
    </div>
  )
}

export default Products
