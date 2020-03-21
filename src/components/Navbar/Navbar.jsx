import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import Button from '../Button';
import { ROUTES } from '../../constants';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="nav">
      <Container centered>
        <Link className="nav__title" to={ROUTES.HOME}>
          DEMO Streaming
        </Link>
        <div className="nav__actions">
          <Link to="#" className="nav__link">Sign Up</Link>
          <Button>Start your free trial</Button>
        </div>
      </Container>
    </nav>
  );
}

export default React.memo(Navbar);
