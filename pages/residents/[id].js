import React from 'react';

import ResidentDetails from 'src/components/ResidentDetails';

const Resident = ({ id }) => {
  return (
    <>
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
