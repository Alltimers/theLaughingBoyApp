import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 white'>
        {'Please submit a URL image below'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 ba red shadow-5'>
          <input className='f4 pa2 w-70 bg-black center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow hover-black f5 link ph3 pv2 dib moon-gray bg-red'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;