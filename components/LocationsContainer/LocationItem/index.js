import React, { memo } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import {
  ItemContainer,
  ItemInfo,
  ItemImage,
  Title,
  Text,
  LocationItemResidentsContainer,
  LocationItemResident
} from './styles';

import { getLocationImage } from 'src/utils/helpers';

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

const LocationItem = memo(({ location: { id, name, type } }) => {
  const { data } = useQuery(LOCATION_QUERY, {
    variables: { id }
  });
  return (
    <ItemContainer>
      <ItemImage>
        <img src={getLocationImage(type)} alt={type} />
      </ItemImage>
      <ItemInfo>
        <Title>{name}</Title>
        <Text>{type}</Text>
        <LocationItemResidentsContainer>
          {data &&
            data.location.residents.slice(0, 3).map(resident => (
              <React.Fragment key={resident.id}>
                {resident.image && (
                  <LocationItemResident key={resident.id}>
                    <img src={resident.image} alt={resident.name} />
                  </LocationItemResident>
                )}
              </React.Fragment>
            ))}
        </LocationItemResidentsContainer>
      </ItemInfo>
    </ItemContainer>
  );
});

export default LocationItem;
