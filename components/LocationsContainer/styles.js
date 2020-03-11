import styled from 'styled-components';

const StyledLocationsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  span {
    color: hotpink;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;

`

export { StyledLocationsContainer, ErrorMessage };
