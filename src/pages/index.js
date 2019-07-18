import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

import HelpSection from '../sections/help';
import StatsSection from '../sections/stats';
import StorySection from '../sections/story';
import ResourceSection from '../sections/resources';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal>
        <picture>
          <source
            srcSet="https://i.imgur.com/lqKlotB.png"
            media="(min-width: 800px)"
          />
          <img src="https://i.imgur.com/lqKlotB.png" alt="Very Nice!" />
        </picture>
      </Modal>
    </Box>

    <HelpSection />
    <StatsSection />
    <StorySection />
    <ResourceSection />

    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
