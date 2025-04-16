import React from 'react'

export default function Header() {
  return (
    <div className='bg-black text-white flex items-baseline justify-between  px-5 py-2'>
      <h1 className='text-2xl'>Demo</h1>
      <nav className='space-x-7 max-sm:hidden'>
        <a href="" className='hover:bg-white hover:text-black '>About</a>
        <a href="">Contact</a>
      </nav>

    </div>
  )
}
