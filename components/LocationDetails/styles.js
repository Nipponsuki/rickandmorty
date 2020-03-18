import styled from 'styled-components';

const DetailsImage = styled.div`
  width: 100%;
  height: 414px;

  @media (min-width: 768px) {
    width: 396px;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0 auto;

    @media (min-width: 768px) {
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(29, 99, 234, 0.48);
    }
  }
`;

const ResidentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 414px) {
    flex-direction: column;
    a {
      width: 100%;
    }
  }
`;

const LocationDetailsContainer = styled.div`
  margin: 0 auto;
  padding: 5px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export { DetailsImage, ResidentsContainer, LocationDetailsContainer };
