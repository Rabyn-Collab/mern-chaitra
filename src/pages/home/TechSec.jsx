import React from 'react'
import { DiAndroid, DiCss3, DiJava, DiJavascript1, DiLinux, DiNodejs, DiPython, DiReact } from "react-icons/di";
export default function TechSec() {
  return (
    <div className='space-y-9'>

      <h1 className='text-3xl font-bold text-center'>Technologies I use</h1>


      <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 justify-items-center'>

        <DiPython size={200} />
        <DiCss3 size={200} />
        <DiJavascript1 size={200} />
        <DiReact size={200} />
        <DiLinux size={200} />
        <DiJava size={200} />
        <DiAndroid size={200} />
        <DiNodejs size={200} className='animate-bounce' />


      </div>

    </div>
  )
}
