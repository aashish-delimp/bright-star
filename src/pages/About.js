import React from 'react'
import Courses from '../components/Home/Courses'
import Hero from '../components/Home/Hero'
import Pashion from '../components/Home/Pashion'
import DynamicMenu from '../layouts/header/DynamicMenu'
import Contact from './Contact'

const About = () => {
  return (
    <div>
      <Hero/>
      <Courses />
      <Pashion />
      <Contact />
      <DynamicMenu />
     
    </div>
  )
}

export default About