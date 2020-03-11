import React from 'react';
import Head from 'next/head';

import LocationsContainer from 'src/components/LocationsContainer';

const Home = () => (
  <>
    <Head>
      <title>R&M | Home</title>
    </Head>
    <LocationsContainer />
  </>
);
export default Home;
