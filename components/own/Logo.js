import React from 'react'
import Link from 'next/link'

function Logo() {
  return (
    <div>
        <Link href={'/'} className='font-bold text-2xl'>Lo<span className='text-blue-400 font-bold'>Go</span> </Link>
    </div>
  )
}

export default Logo