import React, { Fragment } from 'react';

const Rank = ({name, entries}) => {
  return (
    <Fragment>
      <p className='f3 white'>
        {`${ name } you have scanned ${ entries } faces`}
      </p>
    </Fragment>
  )
}

export default Rank;
