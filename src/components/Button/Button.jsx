import React from 'react';
import './Button.css';

function Button({ children, ...props }) {
  return (
    <button {...props} className="button">{children}</button>
  );
}

export default React.memo(Button);
