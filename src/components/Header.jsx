import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='bg-black text-white flex items-baseline justify-between  px-5 py-2'>
      <h1 className='text-2xl'>Redux</h1>


      <nav className='space-x-7 max-sm:hidden'>
        <NavLink
          to={'/add-user'}
          className={(e) => {
            return e.isActive ? 'text-red-700' : 'hover:bg-white hover:text-black ';
          }}
        >AddUser</NavLink>

      </nav>

    </div>
  )
}
