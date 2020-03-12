import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { StyledLocationsContainer, ErrorMessage } from './styles';

import Loader from 'src/components/Loader';
import LocationItem from './LocationItem';
import Link from 'next/link';

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
        id
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
        data.locations.results.map(location => (
          <Link href={`/locations/${location.id}`} key={location.id}>
            <a>
              <LocationItem location={location} />
            </a>
          </Link>
        ))}
    </StyledLocationsContainer>
  );
};

export default LocationsContainer;
