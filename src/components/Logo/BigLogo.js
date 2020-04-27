import React from 'react';
import Tilt from 'react-tilt';
import './BigLogo.css';
import logo from './facial-recognition-scan.png';

const BigLogo = () => {
  return (
      <Tilt className='center ma3 br4 Big-Logo-Tilt pa2 shadow-5' options={{reverse: false,  // reverse the tilt direction
              max: 5,    // max tilt rotation (degrees)
              perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
              scale: 1.05,
              glare: true,
              'max-glare': 1,
              'glare-prerender': false}}>
        <div className='innards'>
          <div className='Tilt-inner1'>
            <img className='hue-rotate' src={logo} alt='logo'/>
          </div>
          <div className='Tilt-inner2-1'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='Tilt-inner2-2'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='Tilt-inner2-3'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='Tilt-inner2-4'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='Tilt-inner2-5'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='Tilt-inner3'>
            <img className='hue-rotate-' src={logo} alt='logo'/>
          </div>
        </div>
      </Tilt>
  )
}

export default BigLogo;
