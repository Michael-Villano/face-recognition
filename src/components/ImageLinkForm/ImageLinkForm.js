import React from 'react';
import './ImageLinkForm.css';
import Rank from '../Rank/Rank.js';

const ImageLinkForm = ({ name, entries, onInputChange, onScanClick }) => {
  return(
    <div className='container'>
      <Rank name={name} entries={entries}/>
      <div className='center'>
        <div className='form'>
          <input className='url tc input-reset pa2 ba bg-black hover-white w-90 center' type='text' placeholder='paste image url here' onChange={onInputChange}/>
          <button className='b--transparent ba hover-b--white hover-white ma2 pa2 center hover-bg-black bg-transparent pointer f5' onClick={ onScanClick }>scan for faces</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
