import React from 'react';
import rank from './rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div>
    <p className='quote'>"And I have one of those very loud, stupid laughs.<br /> 
      I mean if I ever sat behind myself in a movie or something,<br /> 
      I’d probably lean over and tell myself to please shut up."<br />
      <span className='author'> Holden Caulfield in The catcher in the rye, by J.D. Salinger.</span>
    </p>
      <div className='counter f3'>
        {`Hi ${name}, your current hack count is:`}
      </div>
      <div className='entry f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;