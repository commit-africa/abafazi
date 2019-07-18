import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/map">Map</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://github.com/diff-community/mandela-day-hackathon">
          GitHub
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
