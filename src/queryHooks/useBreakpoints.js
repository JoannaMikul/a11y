import { useMediaQuery } from 'react-responsive';
import { useTheme } from 'styled-components';

export const useIsDesktop = () => {
  const { breakpoints } = useTheme();
  return useMediaQuery({ query: breakpoints.queries.isDesktop });
};

export const useIsMobile = () => {
  const { breakpoints } = useTheme();
  return useMediaQuery({ query: breakpoints.queries.isMobile });
};

export const useIsTablet = () => {
  const { breakpoints } = useTheme();
  return useMediaQuery({ query: breakpoints.queries.isTablet });
};
