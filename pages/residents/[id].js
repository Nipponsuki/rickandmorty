import React from 'react';
import Head from 'next/head';

import ResidentDetails from 'src/components/ResidentDetails';
import { PageWrapper } from 'src/components/Common/PageWrapper';

const Resident = ({ id }) => {
  return (
    <>
      <Head>
        <title>R&M | Resident</title>
      </Head>
      <ResidentDetails id={id} />
    </>
  );
};

Resident.getInitialProps = async ({ query }) => {
  const { id } = query;
  return {
    id
  };
};

export default Resident;
