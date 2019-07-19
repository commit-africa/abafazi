import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import MEDIA from 'helpers/mediaTemplates';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Section from '../components/section';
import { Container } from '../components/layout/container.css';
import { SectionTitle } from '../components/typography/titles';

const HeaderSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        homeJson {
          header
        }
      }
    `
  )

  return(
    <Section background="#e9eef0">
      <Img fluid={data.homeJson.header} alt='title' />
      <Container>
        <SectionTitle>The Story</SectionTitle>
      </Container>
    </Section>
  )
};

export default HeaderSection;
