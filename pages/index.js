import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

const Heading = styled.h1`
  color: hotpink;
`;

const LOCATIONS_QUERY = gql`
  query Locations {
    locations {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        type
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(LOCATIONS_QUERY);
  console.log(data);

  return (
    <>
      <Heading>yo</Heading>
    </>
  );
};

export default Home;
