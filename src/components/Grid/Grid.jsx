import React from 'react';
import './Grid.css'

function Grid({ children }) {
  return (
    <div className="grid">
      {children}
    </div>
  );
}

function GridElement({ children }) {
  return (
    <div className="grid__element">
      {children}
    </div>
  );
}

Grid.GridElement = GridElement;

export default Grid;
