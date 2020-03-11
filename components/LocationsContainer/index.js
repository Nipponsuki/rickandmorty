import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

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
	const {data, loading, error} = useQuery(LOCATIONS_QUERY);
  console.log(data);

	return (
		<>
			{data && JSON.stringify(data)}
		</>
	)
};

export default LocationsContainer;
