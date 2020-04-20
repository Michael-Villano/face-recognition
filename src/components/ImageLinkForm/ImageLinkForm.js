import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onScanClick }) => {
  return(
    <div>
      <p className='f3'>{`Upload a picture and I will use A.I. to scan and detect human faces. Give it a try!`}</p>
      <div className='center'>
        <div className='form pa4 br3 shadow-5'>
          <input className='f4 pa2 br3 w-70' type='text' onChange={onInputChange}/>
          <button className='w-30 br2 grow f4 ph3 pv2 white bg-light-purple' onClick={ onScanClick }>Scan</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
