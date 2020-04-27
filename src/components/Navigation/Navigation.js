import React from 'react';
import Logo from '../Logo/Logo.js';
import './Navigation.css';

const Navigation = ({ hasImage, onRouteChange, isSignedin }) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between'}}>
      {hasImage ? <Logo style={{left: 0}}/> : <div></div>}
      <div className='dib'>
       <p onClick={() => onRouteChange('profile')} className="f4 link dim white underline pr3  pointer">Profile</p>
       <p onClick={() => onRouteChange('signin')} className="f4 link dim white underline pr3  pointer">Sign Out</p>
     </div>
    </nav>
  );
}


export default Navigation;
