import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import Head from 'components/head';

const Map = () => (
  <Layout>
    <Head pageTitle="Shelter Map" />
    <Container>
      <iframe
        title="Shelter Map"
        src="https://codebridge-za.github.io/abafazi/"
        width="100%"
        height="100%"
      ></iframe>
    </Container>
  </Layout>
);

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 110px);
`;

export default Map;
