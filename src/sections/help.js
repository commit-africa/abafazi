import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../components/section';
import { HelpContainer } from 'containers/help';

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

  return (
    <Section>
      {data.helpJson.helpList.map((helpData, i) => (
        <HelpContainer
          key={i}
          blue={i === 0}
          title={helpData.title}
          description={helpData.description}
        />
      ))}
    </Section>
  );
};

HelpSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HelpSection;
