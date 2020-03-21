import React from 'react';
import Container from '../Container';
import './Banner.css';

function Banner({ heading }) {
  return (
    <div className="banner">
      <Container centered>
      <h1 className="banner__heading">{heading}</h1>
      </Container>
    </div>
  );
}

export default React.memo(Banner);
