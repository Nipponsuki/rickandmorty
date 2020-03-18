import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';

import {
  ResidentDetailsContainer,
  ResidentImage,
  ResidentInfo
} from './styles';
import { Title, Text } from '../LocationsContainer/LocationItem/styles';

import BackButton from '../Common/BackButton';
import Loader from '../Loader';

const RESIDENT_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      image
      name
      status
      type
      location {
        name
        id
      }
      origin {
        name
      }
    }
  }
`;

const ResidentDetails = ({ id }) => {
  const { data, loading } = useQuery(RESIDENT_QUERY, {
    variables: { id }
  });
  return (
    <>
      {loading && <Loader />}
      {data && (
        <ResidentDetailsContainer>
          <ResidentImage>
            <img src={data.character.image} alt="" />
            <BackButton link={`/locations/${data.character.location.id}`} />
          </ResidentImage>
          <ResidentInfo>
            <Title>{data.character.name}</Title>
            <Link href={`/locations/${data.character.location.id}`}>
              <a>
                <Text>{data.character.location.name}</Text>
              </a>
            </Link>
            <Text>{data.character.type}</Text>
            <Title margin="10px 0 0 0">Status:</Title>
            <Title light>{data.character.status}</Title>
            <Title margin="10px 0 0 0">Home Planet:</Title>
            <Title light>{data.character.origin.name}</Title>
          </ResidentInfo>
        </ResidentDetailsContainer>
      )}
    </>
  );
};

export default ResidentDetails;
