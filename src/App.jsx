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

function App() {

  return (
    <>
      <Menu />
      <Hero />
      <About />
      <Education />
      <TechStack />
      <Work />
      <Tesimonial />
      <Contacts />
    </>
  )
}

export default App
