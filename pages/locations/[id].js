import React from 'react';

import LocationDetails from 'src/components/LocationDetails';

const Location = ({ id }) => {
  return (
    <>
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
