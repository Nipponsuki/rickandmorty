import styled from 'styled-components';

const ItemContainer = styled.div`
  box-shadow: 2px 2px 10px rgba(29, 99, 234, 0.48);
  background: ${props => (props.background ? props.background : '#312a2a')};
  width: 95%;
  height: 145px;
  margin: 11px;
  display: flex;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: 396px;
  }
`;

const ItemImage = styled.div`
  flex: 35%;
  height: 100%;
  min-width: 35%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ItemInfo = styled.div`
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
  justify-content: flex-start;
  width: 100%;
`;

const Title = styled.h3`
  font-size: ${props => props.theme.fontSizes.title};
  line-height: ${props => props.theme.lineHeights.title};
  font-weight: bold;
  color: ${props => (props.light ? '#DCDCDC' : '#ffffff')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  margin: ${props => props.margin};
  text-align: ${props => props.textAlign};
`;

const Text = styled.p`
  color: #dcdcdc;
  margin: ${props => props.margin};
`;

const LocationItemResident = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 12px;
  margin-right: 5%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export {
  ItemContainer,
  ItemImage,
  ItemInfo,
  Title,
  Text,
  LocationItemResidentsContainer,
  LocationItemResident
};
