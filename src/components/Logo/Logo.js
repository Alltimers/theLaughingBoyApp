import React from 'react';
// import Tilt from 'react-tilt'; 
import Tilt from 'react-parallax-tilt';
import brain from './LB3.gif';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 center mt0'>
      <Tilt className="Tilt br2 " options={{ max : 55 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner pa0">
          <img style={{paddingTop: '0px', paddingLeft: '5px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;