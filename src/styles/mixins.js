import { css } from 'styled-components';
import { breakpoints } from './variables';

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `;
    return accumulator;
  },
  {}
);

export const clearfix = css`
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;
