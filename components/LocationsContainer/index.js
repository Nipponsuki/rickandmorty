import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { StyledLocationsContainer, ErrorMessage } from './styles';

import Loader from '../Loader';

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

const LocationsContainer = () => {
  const { data, loading, error } = useQuery(LOCATIONS_QUERY);

  return (
    <StyledLocationsContainer>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {data &&
        data.locations.results.map(location => <span>{location.name}</span>)}
    </StyledLocationsContainer>
  );
};

export default LocationsContainer;
