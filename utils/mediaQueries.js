import { css } from 'styled-components';

const sizes = {
  desktop: 1280,
  tablet: 780,
  phone: 414
};

const stringSizes = {
  desktop: '(min-width:992px)',
  tablet: '(max-width:1024px)',
  phone: '(max-width:500px)'
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export { media, stringSizes };
