import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Section from '../components/section';
import { Container } from '../components/layout/container.css';
import Statistic from 'components/statistic';

const StatsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`;

const StatsSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        statsJson {
          statList {
            value
            unit
            title
            description
          }
        }
      }
    `
  );

  return (
    <Section>
      <Container>
        <StatsGrid>
          {data.statsJson.statList.map((statData, i) => (
            <Statistic
              key={i}
              value={statData.value}
              unit={statData.unit}
              title={statData.title}
              description={statData.description}
            />
          ))}
        </StatsGrid>
      </Container>
    </Section>
  );
};

export default StatsSection;
