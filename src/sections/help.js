import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { CardTitle, CardSubTitle } from 'components/typography/titles';
import { Column } from 'components/layout/Column.css';
import { Button } from 'components/button/Button';

import MEDIA from 'helpers/mediaTemplates';

const Wrapper = styled.article`
  width: 80%;
  text-align: center;
  margin: 2em 0;
  ${MEDIA.MIN_TABLET`
    width: 60%;
  `}
`;

const HelpSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        helpJson {
          helpList {
            description
            title
          }
        }
      }
    `
  );

  const renderColumns = data.helpJson.helpList.map(({ title, description }, index) => (
    <Column color={index % 3 ? 'white' : ''} key={index}>
      <Wrapper>
        <CardTitle color={ index % 3 ? '' : 'white' }>{title}</CardTitle>
        <CardSubTitle color={ index % 3 ? '' : 'white' }>{description}</CardSubTitle>
        <Button outline={ index % 3 ? true : false }>Find out more</Button>
      </Wrapper>
    </Column>
  ));

  return renderColumns;
};

export default HelpSection;
