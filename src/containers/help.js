// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { CardTitle, CardSubTitle } from 'components/typography/titles';
// import { BodyCopy } from 'components/typography/copy.css';
// import { Button } from 'components/button/Button';
// Column
// const Container = styled.article`
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   background-color: ${props => (props.blueTheme ? props.theme.blue : 'white')};
//   padding: 7em 3em;
// `;

// export const HelpContainer = ({ title, description, blueTheme }) => (
//   <Container blueTheme={blueTheme}>
//     <BodyCopy>OKAY</BodyCopy>
//     <CardTitle color={blueTheme ? 'white' : 'grey'}>{title}</CardTitle>
//     <CardSubTitle
//       width="40%"
//       textAlignCenter="center"
//       color={blueTheme ? 'white' : 'grey'}
//     >
//       {description}
//     </CardSubTitle>
//     <div>
//       <Button
//         outline={!blueTheme}
//         name="Find out more"
//         onClickHandler={() => {
//           console.log('Clicked');
//         }}
//       />
//     </div>
//   </Container>
// );

// HelpContainer.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   blueTheme: PropTypes.bool.isRequired,
//   textAlignCenter: PropTypes.string.isRequired,
// };
