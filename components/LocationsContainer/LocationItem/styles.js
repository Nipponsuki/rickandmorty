import styled from 'styled-components';

const LocationItemContainer = styled.div`
  box-shadow: 2px 2px 10px rgba(29, 99, 234, 0.48);
  background: #312a2a;
  width: 95%;
  height: 145px;
  margin: 11px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 396px;
  }
`;

const LocationItemImage = styled.div`
  flex: 35%;
  height: 100%;
  min-width: 35%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const LocationItemInfo = styled.div`
  flex: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
  overflow: hidden;
`;

const LocationItemResidentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h3`
  font-size: ${props => props.theme.fontSizes.title};
  line-height: ${props => props.theme.lineHeights.title};
  font-weight: bold;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const Text = styled.p`
  color: #dcdcdc;
`;

const LocationItemResident = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 12px;
  /* margin-right: 20px; */

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export {
  LocationItemContainer,
  LocationItemImage,
  LocationItemInfo,
  Title,
  Text,
  LocationItemResidentsContainer,
  LocationItemResident
};
