import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter } from 'styled-icons/fa-brands';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import ExternalLink from 'components/links/external';

const FacebookLink = styled(Facebook)`
  color: black;
`;

const TwitterLink = styled(Twitter)`
  color: black;
`;

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/faq">FAQs</Link>
      </li>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <a href="https://github.com/diff-community/abafazi">GitHub</a>
      </li>
      <li>
        <ExternalLink url="https://twitter.com/nsm_za">
          <TwitterLink size="26" />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink url="https://www.facebook.com/NationalShelterMovementSA/">
          <FacebookLink size="26" />
        </ExternalLink>
      </li>
    </ul>
  </Container>
);

export default Nav;
