import unknownTypeImage from 'src/assets/images/location-types/unknown.png';
import clusterTypeImage from 'src/assets/images/location-types/cluster.png';
import dreamTypeImage from 'src/assets/images/location-types/dream.png';
import fantasyTownTypeImage from 'src/assets/images/location-types/fantasy-town.png';
import microverseTypeImage from 'src/assets/images/location-types/microverse.png';
import planetTypeImage from 'src/assets/images/location-types/planet.png';
import resortTypeImage from 'src/assets/images/location-types/resort.png';
import spaceStationTypeImage from 'src/assets/images/location-types/space-station.png';
import tvTypeImage from 'src/assets/images/location-types/tv.png';

export const LOCATION_TYPES = {
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

const adjustType = str => str.replace(' ', '_').toLowerCase();

export const getLocationImage = type => {
  if (LOCATION_TYPES[adjustType(type)]) {
    return LOCATION_TYPES[adjustType(type)];
  }
  return unknownTypeImage;
};
