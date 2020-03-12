import React from 'react';

const Location = ({ id }) => {
  return <>{id && <span style={{ color: 'hotpink' }}>id:{id}</span>}</>;
};

Location.getInitialProps = async ({ query }) => {
  const { id } = query;
  return {
    id
  };
};

export default Location;
