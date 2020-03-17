import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { StyledLocationsContainer, ErrorMessage } from './styles';

import Loader from 'src/components/Loader';
import LocationItem from './LocationItem';
import { useInfiniteScroll } from 'src/hooks/useInfiniteScroll';

const LOCATIONS_QUERY = gql`
  query Locations($page: Int!) {
    locations(page: $page) {
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
  const { data, error, loading, fetchMore } = useQuery(LOCATIONS_QUERY, {
    variables: { page: 0 }
  });

  const loadMore = () => {
    if (data.locations.info.next) {
      fetchMore({
        variables: {
          page: data.locations.info.next
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            locations: {
              ...prev.locations,
              info: { ...fetchMoreResult.locations.info },
              results: prev.locations.results.concat(
                fetchMoreResult.locations.results
              )
            }
          };
        }
      });
    }
    return;
  };

  useInfiniteScroll(loadMore);

  return (
    <>
      {error && <ErrorMessage />}
      <StyledLocationsContainer>
        {data &&
          data.locations.results.map(location => (
            <Link href={`/locations/${location.id}`} key={location.id}>
              <a>
                <LocationItem location={location} />
              </a>
            </Link>
          ))}
      </StyledLocationsContainer>
      {loading && <Loader />}
      {data && data.locations.info.next && <Loader />}
    </>
  );
};

export default LocationsContainer;
