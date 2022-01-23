import { css } from 'styled-components';

const breakpoints = {
  df: 0,
  xs: 320,
  sm: 768,
  md: 1024,
  lg: 1280,
  lm: 1400,
};

const breakpointKeys = Object.keys(breakpoints);

export const breakpoint = {
  up: breakpointKeys.reduce((acc, label) => {
    acc[label] = (first, ...interpolations) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  }, {}),
  down: breakpointKeys.reduce((acc, label) => {
    acc[label] = (...values) => css`
      @media (max-width: ${breakpoints[label]}px) {
        ${css(...values)}
      }
    `;
    return acc;
  }, {}),
};

export const theme = {
  colors: {
    transparent: 'transparent',
    white: '#ffffff',
    black: '#000000',
    black090: '#000000e6',
    black055: '#0000008C',
    black030: '#0000004C',
    porcelain: '#e6ebed',
    geyser: '#d9e0e4',
    funGreen: '#006046',
    jawel: '#11794E',
    selectiveYellow: '#FFB500',
    desert: '#A84C1F',
    tuscany: '#bc5929',
    salomie: '#ffda80',
    lynch: '#668592',
    flushMahogany: '#c7384f',
    swamp: '#00141db3',
  },
  breakpoints: {
    values: breakpoints,
    queries: {
      isMobile: `(max-width: ${breakpoints.sm}px)`,
      isTablet: `(max-width: ${breakpoints.md}px) and (min-width:${breakpoints.sm}px)`,
      isDesktop: `(min-width: ${breakpoints.md}px)`,
    },
  },
};
