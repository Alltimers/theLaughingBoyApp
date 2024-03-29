import React from 'react';
import rank from './rank.css';
const Rank = ({ name, entries }) => {
  return (
    <div className="center">
      <div className="card br3 ba b--black-10 w-100 w-50-m w-100-l mw6 shadow-5 ">
      <p className='quotes'>And I have one of those very loud, stupid laughs.<br /> 
        I mean if I ever sat behind myself in a movie or something,<br /> 
        I’d probably lean over and tell myself to please shut up.<br />
        <span className='author'> Holden Caulfield in The catcher in the rye, by J.D. Salinger.</span>
      </p>
        <div className='counter f3'>
          <h4 className='margin'>Hi <span className='ttc name'>{`${name}`}</span>, your current hack count is:</h4>
        </div>
        <div className='entry f1'>
          {entries}
        </div>
      </div>
    </div>
  );
}

export default Rank;