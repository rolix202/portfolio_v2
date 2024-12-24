import { useState } from 'react'
import './App.css'
import Menu from './components/New/Menu'
import Hero from './components/New/Hero'
import About from './components/New/About'
import Education from './components/New/Education'
import TechStack from './components/New/TechStack'
import Work from './components/New/Work'
import Tesimonial from './components/New/Tesimonial'
import Contacts from './components/New/Contacts'
import Footer from './components/New/Footer'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Menu />
      <Hero />
      <About />
      <Education />
      <TechStack />
      <Work />
      <Tesimonial />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
