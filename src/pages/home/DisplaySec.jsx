import React from 'react'

export default function DisplaySec() {
  return (
    <div className='grid grid-cols-[1fr_1.2fr] items-center max-md:grid-cols-1 max-md:mb-16'>

      <div>
        <iframe
          className='w-full h-[450px]'
          src="https://lottie.host/embed/86f2a53e-acde-42b0-b559-c11dcae02fe4/WUdDGzkGgL.lottie"></iframe>

      </div>

      <div className='space-y-3 max-sm:text-center'>
        <h1 className='font-bold text-3xl'>Hi, I am John</h1>
        <p className='text-pink-700 italic'>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
      </div>

    </div>
  )
}
