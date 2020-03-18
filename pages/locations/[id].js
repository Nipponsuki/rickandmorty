import React from 'react';
import Head from 'next/head';

import LocationDetails from 'src/components/LocationDetails';
import { PageWrapper } from 'src/components/Common/PageWrapper';

const Location = ({ id }) => {
  return (
    <>
      <Head>
        <title>R&M | Location</title>
      </Head>
      <LocationDetails id={id} />
    </>
  );
};

Location.getInitialProps = async ({ query }) => {
  const { id } = query;
  return {
    id
  };
};

export default Location;
