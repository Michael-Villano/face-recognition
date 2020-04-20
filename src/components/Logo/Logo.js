import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './facial-recognition-scan.png'

const Logo = () => {
  return (
      <Tilt className='ma4 m5 br4 Tilt pa3 shadow-5' options={{reverse: false,  // reverse the tilt direction
              max: 85,    // max tilt rotation (degrees)
              perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
              scale: 1.2,
              glare: true,
              'max-glare': 1,
              'glare-prerender': false}}>
        <div className='Tilt-inner'>
          <img src={logo} alt='logo'/>
        </div>
      </Tilt>
  )
}

export default Logo;
