import React, { Fragment } from 'react';

const Rank = ({name, entries}) => {
  return (
    <Fragment>
      <p className='f3 white'>
        {`${ name } your current entry count is...`}
      </p>
      <p className='f1 white'>
        {`#${ entries }`}
      </p>
    </Fragment>
  )
}

export default Rank;
