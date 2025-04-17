import React from 'react'
import Header from '../../components/Header'
import DisplaySec from './DisplaySec'
import TechSec from './TechSec'


export default function HomePage() {
  return (
    <div>
      <Header />

      <div className='flex-center'>
        <h1>hello</h1>
        <div className='h-[100px] w-[100px] bg-red-700'>

        </div>
      </div>

      {/* <h1>hello jee</h1>
      <h2>sello jee</h2>
 */}




      {/* 
      <h1 >hello jee</h1>
      <div className='space-x-fort flex'>
        <div>
          <button className='bg-black btn'>Click Me</button>
        </div>
        <div>
          <button className='bg-purple-800 btn'>Click TO View</button>
        </div>

      </div> */}

      {/* 
      <div className="card">

        <h1>aslkjdsalkj</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, reprehenderit?</p>

      </div>


      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1744805464532-998bee603eae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
      </div> */}


      <main className='px-14 max-sm:px-6'>
        <DisplaySec />
        <TechSec />
      </main>


    </div>
  )
}
