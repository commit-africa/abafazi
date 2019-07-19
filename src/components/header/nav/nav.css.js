import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  background: #329fcd;
  position: fixed;
  right: ${({status}) => status ? '0' : '-100%' };
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  height: 100vh;
  width: 100%;
  z-index: 1;
  transition: all 450ms cubic-bezier(0, 0, 0.3, 0.78);

  ul {
    width: 100%;

    li {
        height: 55px;
        text-align: center;
        font-size: 1.25em;

      a {
        color: #fff;
      }

      ul {
        display: flex;
        justify-content: center;

        li {
          margin: 0 10px;
        }
      }
    }
  }

  ${MEDIA.MIN_TABLET`
    background: #fff;
    height: auto;
    width: auto;
    position: relative;
    right: 0;
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      padding: 0;
      position: relative;
      li {
        font-size: 1.3rem;
        height: auto;

        a {
          color: #757575;
        }

        & + li {
          margin-left: 2rem;
        }
      }
    }
  `}
`;
