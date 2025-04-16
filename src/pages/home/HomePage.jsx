import React from 'react'
import Header from '../../components/Header'
import DisplaySec from './DisplaySec'
import TechSec from './TechSec'


export default function HomePage() {
  return (
    <div>
      <Header />

      <main className='px-14 max-sm:px-6'>
        <DisplaySec />
        <TechSec />
      </main>


    </div>
  )
}
