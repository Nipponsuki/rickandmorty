import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import {
  LocationItemContainer,
  LocationItemInfo,
  LocationItemImage,
  Title,
  Text,
  LocationItemResidentsContainer,
  LocationItemResident
} from './styles';

import unknownTypeImage from 'src/assets/images/location-types/unknown.png';
import clusterTypeImage from 'src/assets/images/location-types/cluster.png';
import dreamTypeImage from 'src/assets/images/location-types/dream.png';
import fantasyTownTypeImage from 'src/assets/images/location-types/fantasy-town.png';
import microverseTypeImage from 'src/assets/images/location-types/microverse.png';
import planetTypeImage from 'src/assets/images/location-types/planet.png';
import resortTypeImage from 'src/assets/images/location-types/resort.png';
import spaceStationTypeImage from 'src/assets/images/location-types/space-station.png';
import tvTypeImage from 'src/assets/images/location-types/tv.png';
import { LOADER_URL } from 'src/components/Loader';

const LOCATION_QUERY = gql`
  query Location($id: ID!) {
    location(id: $id) {
      residents {
        image
        id
        name
      }
    }
  }
`;

const LOCATION_TYPES = {
  unknown: unknownTypeImage,
  cluster: clusterTypeImage,
  dream: dreamTypeImage,
  fantasy_town: fantasyTownTypeImage,
  microverse: microverseTypeImage,
  planet: planetTypeImage,
  resort: resortTypeImage,
  space_station: spaceStationTypeImage,
  tv: tvTypeImage
};

const LocationItem = ({ location: { id, name, type } }) => {
  const { data, loading, error } = useQuery(LOCATION_QUERY, {
    variables: { id }
  });

  console.log(data);
  return (
    <LocationItemContainer>
      <LocationItemImage>
        <img
          src={LOCATION_TYPES[type.replace(' ', '_').toLowerCase()]}
          alt={type}
        />
      </LocationItemImage>
      <LocationItemInfo>
        <Title>{name}</Title>
        <Text>{type}</Text>
        <LocationItemResidentsContainer>
          {data &&
            data.location.residents.slice(0, 3).map(resident => (
              <LocationItemResident key={resident.id}>
                <img
                  src={!resident.image ? LOADER_URL : resident.image}
                  alt={resident.name}
                />
              </LocationItemResident>
            ))}
        </LocationItemResidentsContainer>
      </LocationItemInfo>
    </LocationItemContainer>
  );
};

export default LocationItem;
