import React from 'react';
import Link from 'next/link';

import logo from 'src/assets/images/logo.svg';

import { StyledHeader, Logo } from './styles';

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link href="/">
        <a>
          <img src={logo} alt="rick and morty" />
        </a>
      </Link>
    </Logo>
  </StyledHeader>
);

export default Header;
