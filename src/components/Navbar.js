import React from 'react'
import '../index.css'
import Logo from '../images/Airbnb-logo.jpg'


function Navbar () {
  return (
    <header className='App-header'>
      <nav>
        <img src={Logo} alt='logo' className='nav--logo' />
      </nav>
    </header>
  )
}

export default Navbar
