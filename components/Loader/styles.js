import styled from 'styled-components';

const LoaderContainer = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    img {
      border-radius: 50%;
    }
  }
  /* position: fixed;
  bottom: 0%;
  width: 100%;
  margin-top: 20px; */

  img {
    width: 100%;
  }
`;

export { LoaderContainer };
