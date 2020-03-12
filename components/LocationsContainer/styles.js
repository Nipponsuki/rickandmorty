import styled from 'styled-components';

const StyledLocationsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 414px) {
    flex-direction: column;
  }
  a {
    text-decoration: none;
    color: inherit;
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;

export { StyledLocationsContainer, ErrorMessage };
