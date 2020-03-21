import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import './Footer.css';

const navigationLinks = [
  { title: 'Home', to: '/' },
  { title: 'Terms and Conditions', to: '#' },
  { title: 'Privacy Policy', to: '/' },
  { title: 'Collection Statement', to: '/' },
  { title: 'Help', to: '/' },
  { title: 'Manage Account', to: '/' }
];

const socialLinks = [
  { title: 'Facebook', icon: './facebook-white.svg' },
  { title: 'Twiiter', icon: './twitter-white.svg' },
  { title: 'Instagram', icon: './instagram-white.svg' }
];

const storeLinks = [
  { title: 'App Store', icon: './app-store.svg' },
  { title: 'Play Store', icon: './play-store.svg' },
  { title: 'Windows Store', icon: './windows-store.svg' },
];

function Footer() {
  return (
    <footer className="footer">
      <Container column>
        <div>
          <div className="footer__links">
            {navigationLinks.map((link) => (
              <Link key={link.title} className="footer__link" to={link.to}>{link.title}</Link>
            ))}
          </div>
          <p>Copyright © 2016 DEMO Straming All Rights Reserved.</p>
          <div className="footer__row">
            <div className="footer__column">
              {socialLinks.map((link) => (
                <Link key={link.title} className="footer__social-link" to="#">
                  <img
                    className="footer__social-icon"
                    alt={link.title}
                    src={link.icon}
                  />
                </Link>
              ))}
            </div>
            <div className="footer__column">
              {storeLinks.map((link) => (
                <Link key={link.title} className="footer__store-link" to="#">
                  <img
                    className="footer__store-icon"
                    alt={link.title}
                    src={link.icon}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default React.memo(Footer);
