import React from 'react';

import {
  ItemContainer,
  ItemImage,
  Title,
  Text
} from 'src/components/LocationsContainer/LocationItem/styles';
import { ResidentInfo } from './styles';

const ResidentItem = ({ resident: { type, image, name }, locationType }) => {
  return (
    <>
      <ItemContainer background="#073955">
        <ItemImage>
          <img src={image} alt={type} />
        </ItemImage>
        <ResidentInfo>
          <Title>{name}</Title>
          <Text>{locationType}</Text>
          <Text>{type}</Text>
        </ResidentInfo>
      </ItemContainer>
    </>
  );
};

export default ResidentItem;
