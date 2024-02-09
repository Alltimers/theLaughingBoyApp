import React from 'react';
import NavStyle from './navStyle.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='nav f3 link moon-gray underline pa3 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='nav f3 link  moon-gray underline pa3 pointer'>Log In</p>
          <p onClick={() => onRouteChange('register')} className='nav f3 link moon-gray underline pa3 pointer'>Sign Up</p>
        </nav>
      );
    }
}

export default Navigation;