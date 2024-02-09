import React from 'react';
// import Tilt from 'react-tilt'; 
import Tilt from 'react-parallax-tilt';
import brain from './lb.gif';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 center mt0'>
      <Tilt className="Tilt br2 " options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa0">
          <img style={{paddingTop: '0px', paddingLeft: '5px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;