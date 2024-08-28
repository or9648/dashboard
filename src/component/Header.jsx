import React from 'react'
import { useState } from 'react';

function Header() {
    const [selectedValue, setSelectedValue] = useState("English") 
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        };
  return (
    <div className=' flex justify-between  items-center mb-10  h-11 text-yellow-800 '>
    <h1 className='  text-5xl  cursor-pointer  text-black m-0 '>Dashboard</h1>

    <select className='  rounded-md  bg-slate-700 m-2 ' value={selectedValue} onChange={handleChange}>
 <option value="English">English</option>
 <option value="Hindi">Hindi</option>
 
 </select>
    
    </div>
  )
}

export default Header