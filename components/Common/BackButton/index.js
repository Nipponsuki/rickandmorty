import React from 'react';
import Link from 'next/link';

import { BackButtonContainer } from './styles';

import backIcon from 'src/assets/images/back-icon.svg';

const BackButton = ({ link }) => {
  return (
    <BackButtonContainer>
      <Link href={link}>
        <a>
          <img src={backIcon} alt={`back to ${link}`} />
        </a>
      </Link>
    </BackButtonContainer>
  );
};

export default BackButton;
