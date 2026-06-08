import React from 'react'
import '../css/app.css'
import Hero from '../component/Hero'
import About from '../component/About'
import Skills from '../component/Skills'
import Portfolio from '../component/Portfolio'
import Fotter from '../component/Fotter'
import SideBar from '../component/SideBar'
import Resume from '../component/Resume'

const Resumes = () => {
  return (
    <>
    <div className='grid md:grid-cols-4 sm:grid-cols-4'>
      <div className='left-side'>
        <SideBar/>
      </div>
      <div className='md:col-span-3 sm:col-span-4  right-side'>
        <Resume/>
        <Fotter/>
      </div>
    </div>
    </>
  )
}

export default Resumes