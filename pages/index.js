import React from 'react';
import Head from 'next/head';

import LocationsContainer from 'src/components/LocationsContainer';
import { PageWrapper } from 'src/components/Common/PageWrapper';

const Home = () => (
  <PageWrapper>
    <Head>
      <title>R&M | Home</title>
    </Head>
    <LocationsContainer />
  </PageWrapper>
);
export default Home;
