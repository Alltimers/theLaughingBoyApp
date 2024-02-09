import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='submit f5'>
        {'Please submit a URL image below'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 bg-black center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow hover-black f5 link ph3 pv2 dib moon-gray'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;