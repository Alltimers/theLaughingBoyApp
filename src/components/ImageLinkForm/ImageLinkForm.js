import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
    <div className="center card br3 ba b--black-10 mv2 w-100 w-50-m w-25-l mw6 shadow-5 ">
      <p className='submit f5'>
        {'Please submit a URL image below'}
      </p>
      </div>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 bg-black center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow hover-black f5 link ph3 pv2 dib moon-gray'
            onClick={onButtonSubmit}
          >Carry on!</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;