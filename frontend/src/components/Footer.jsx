import React, { useState } from 'react'

const Footer = () => {
  const [newsletter, setNewsletter] = useState('')

  const subMit = ((e)=>{
    e.preventDefault();
    console.log(newsletter);
    setNewsletter('');
  })


  return (
    <div className='w-full py-6 px-10 bg-emerald-600 mt-10'>
      <h1 className='text-white text-2xl font-bold'>Welcome!</h1>
      <input value={newsletter} onChange={(e)=>setNewsletter(e.target.value)}  className='outline-none bg-white px-3 py-3 rounded mr-1' type='text' placeholder='Enter you email'/>
      <button onClick={e=> subMit(e)} className='bg-red-600 px-3 py-3 rounded'>Subscribe</button>
    </div>
  )
}

export default Footer
