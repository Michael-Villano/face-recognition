import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='tilt' options={{reverse: true,  // reverse the tilt direction
              max: 35,    // max tilt rotation (degrees)
              perspective: 700,   // Transform perspective, the lower the more extreme the tilt gets.
              scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
              speed: 2,    // Speed of the enter/exit transition
              transition: true,   // Set a transition on enter/exit.
              axis: null,   // What axis should be disabled. Can be X or Y.
              reset: false,    // If the tilt effect has to be reset on exit.
              easing: "cubic-bezier(.03,.98,.52,.99)"}}    // Easing on enter/exit.
      >
        <div className='shadow-5 outer'>
          <div className='Tilt-inner'>
            <img src='https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/42/e2/8a/42e28a08-4ea6-a2bc-5639-290e42f318b9/source/512x512bb.jpg'/>
          </div>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;
