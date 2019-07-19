import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Facebook, Twitter } from 'styled-icons/fa-brands';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import ExternalLink from 'components/links/external';
import MEDIA from 'helpers/mediaTemplates';

const Button = styled.button`
  position: fixed;
  z-index: 2;
  right: 0;
  border: none;
  background: transparent;
  right: 5%;
  border: none;
  font-size: 20px;
  ${MEDIA.MIN_TABLET`
    display: none;
  `}

`

const FacebookLink = styled(Facebook)`
  color: #fff;
  ${MEDIA.MIN_TABLET`
    color: black;
  `}
`;

const TwitterLink = styled(Twitter)`
  color: #fff;
  ${MEDIA.MIN_TABLET`
    color: black;
  `}
`;

const Nav = () => {
  const [isToggleOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggleOn);

  // TODO: Style Icon.
  return (
    <Fragment>
      <Button onClick={toggle}> { isToggleOn ? '=' : 'x' }</Button>
        <Container status={ isToggleOn }>
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
              <ul>
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
            </li>
          </ul>
        </Container>
    </Fragment>
  );
};

export default Nav;
