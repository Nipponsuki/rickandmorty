import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2px;
  overflow: hidden;
  a {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  width: 414px;
  height: 133px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export { StyledHeader, Logo };
