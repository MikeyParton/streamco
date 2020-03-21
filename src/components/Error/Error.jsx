import React from 'react';
import './Error.css';

function Error({ message = 'Oops, something went wrong...' }) {
  return (
    <div className="error">
      {message}
    </div>
  );
}

export default Error;
