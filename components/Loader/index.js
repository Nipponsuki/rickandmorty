import React from 'react';

export const LOADER_URL =
  'https://cdn.dribbble.com/users/1897588/screenshots/3887258/gif_export.gif';

import { LoaderContainer } from './styles';

const Loader = () => (
  <LoaderContainer>
    <img src={LOADER_URL} alt="loading..." />
  </LoaderContainer>
);

export default Loader;
