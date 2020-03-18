import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Link from 'next/link';

import {
  DetailsImage,
  ResidentsContainer,
  LocationDetailsContainer
} from './styles';
import { Title, Text } from '../LocationsContainer/LocationItem/styles';

import { getLocationImage } from 'src/utils/helpers';
import { useInfiniteScroll } from 'src/hooks/useInfiniteScrollWithoutPagination';

import ResidentItem from './ResidentItem';
import Loader from '../Loader';

const LOCATION_QUERY = gql`
  query Location($id: ID!) {
    location(id: $id) {
      name
      type
      id
      residents {
        image
        id
        name
        type
      }
    }
  }
`;

const LocationDetails = ({ id }) => {
  const { data, loading } = useQuery(LOCATION_QUERY, {
    variables: { id }
  });
  const { count } = useInfiniteScroll(data && data.location.residents.length);

  return (
    <>
      {loading && <Loader />}
      {data && (
        <LocationDetailsContainer>
          <DetailsImage>
            <img
              src={getLocationImage(data.location.type)}
              alt={data.location.type}
            />
          </DetailsImage>
          <Title margin="45px 5px 5px 5px">{data.location.name}</Title>
          <Text margin="5px">{data.location.type}</Text>
          <Title textAlign="center" margin="25px 0 0 0 ">
            Residents
          </Title>
          <ResidentsContainer>
            {data &&
              data.location.residents.slice(0, count).map(resident => (
                <Link href={`/residents/${resident.id}`} key={resident.id}>
                  <a>
                    <ResidentItem
                      resident={resident}
                      locationType={data.location.type}
                    />
                  </a>
                </Link>
              ))}
          </ResidentsContainer>
          {count !== data.location.residents.length && <Loader />}
        </LocationDetailsContainer>
      )}
    </>
  );
};

export default LocationDetails;
