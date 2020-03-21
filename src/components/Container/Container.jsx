import React from 'react';
import './Container.css';

function Container({ column, centered, children }) {
  const classes = [
    'container',
    column && 'container--column',
    centered && 'container--centered'
  ].filter(Boolean)
   .join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default React.memo(Container);
