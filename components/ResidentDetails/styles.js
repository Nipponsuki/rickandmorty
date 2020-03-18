import styled from 'styled-components';

const ResidentDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    position: relative;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ResidentImage = styled.div`
  width: 100%;
  height: 414px;
  position: relative;

  @media (min-width: 768px) {
    width: 396px;
    margin: 0 auto;
    position: unset;
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

const ResidentInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  @media (min-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export { ResidentDetailsContainer, ResidentImage, ResidentInfo };
