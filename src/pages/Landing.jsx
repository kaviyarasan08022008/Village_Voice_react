import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import LandingContent from '../components/LandingContent.jsx'

export default function Landing() {
  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div>
      <LandingContent/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}
