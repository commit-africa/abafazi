import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../components/section';
import { Container } from '../components/layout/container.css';
import Statistic from 'components/statistic';

const StatsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StatsSection = () => (
  <Section>
    <Container>
      <StatsGrid>
        <Statistic
          value={2950}
          unit="seconds"
          title="Stats Title"
          description="Wat watt"
        />
        <Statistic
          value={3564}
          unit="ms"
          title="Stats Title"
          description="Wat watt"
        />
        <Statistic
          value={89}
          unit="%"
          title="Stats Title"
          description="Wat watt"
        />
        <Statistic
          value={5}
          unit="%"
          title="Stats Title"
          description="Wat watt"
        />
      </StatsGrid>
    </Container>
  </Section>
);

StatsSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StatsSection;
