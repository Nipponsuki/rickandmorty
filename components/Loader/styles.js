import styled from 'styled-components';

const LoaderContainer = styled.div`
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    img {
      border-radius: 50%;
    }
  }

  img {
    width: 100%;
  }
`;

export { LoaderContainer };
