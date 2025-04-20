import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

export default function RootLayout() {
  return (
    <div className='flex flex-col bg-gray-600'>
      <Header />
      <main className=''>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
