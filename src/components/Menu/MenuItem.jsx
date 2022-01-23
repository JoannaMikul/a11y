import { useCallback, useEffect, useRef } from 'react';

import { StyledNavLink } from './Menu.styles';

export const MenuItem = ({ children, path, focus, setFocus, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    setFocus(index);
  }, [index, setFocus]);

  return (
    <StyledNavLink ref={ref} exact='true' to={path} onClick={handleSelect} onKeyPress={handleSelect}>
      {children}
    </StyledNavLink>
  );
};
