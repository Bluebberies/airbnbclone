import React from 'react'
import '../index.css'
import PhotoGrid from '../images/photo-grid.png'

function Hero () {
  return (
    <section>
      <img src={PhotoGrid} alt='logo' className='hero-pic' />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  )
}

export default Hero
