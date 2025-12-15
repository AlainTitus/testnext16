import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'


function Menuprincipal() {
  return (
    <div className='flex justify-between items-center px-6 py-2 bg-gray-200' >
        <Logo/>
        <Navbar/>
    </div>
  )
}

export default Menuprincipal