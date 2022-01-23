import FocusTrap from 'focus-trap-react';
import { useCallback, useEffect, useState } from 'react';

import { ROUTES } from '../../routes';
import { MenuItemWrapper, MenuWrapper } from './Menu.styles';
import { MenuItem } from './MenuItem';
import { useIsDesktop } from '../../queryHooks/useBreakpoints';

const { HOME_PAGE, CONTACT, CLAIM_REPORT, ABOUT_US } = ROUTES;

const menuLinks = [
  {
    title: 'Insurance',
    path: HOME_PAGE,
  },
  {
    title: 'About us',
    path: ABOUT_US,
  },
  {
    title: 'Claim report',
    path: CLAIM_REPORT,
  },
  {
    title: 'Contact',
    path: CONTACT,
  },
];

const useRoveFocus = (size) => {
  const [currentFocus, setCurrentFocus] = useState(0);
  const isDesktop = useIsDesktop();

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Tab') {
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    if (!isDesktop) {
      document.addEventListener('keydown', handleKeyDown, false);
      return () => {
        document.removeEventListener('keydown', handleKeyDown, false);
      };
    }
  }, [handleKeyDown, isDesktop]);

  return [currentFocus, setCurrentFocus];
};

export const Menu = ({ onClick }) => {
  const isDesktop = useIsDesktop();
  const [focus, setFocus] = useRoveFocus(!isDesktop && menuLinks.length);

  return (
    <FocusTrap active={!isDesktop}>
      <MenuWrapper>
        {menuLinks.map(({ title, path }, index) => (
          <MenuItemWrapper key={title} onClick={onClick}>
            <MenuItem path={path} focus={focus === index} setFocus={setFocus} index={index}>
              {title}
            </MenuItem>
          </MenuItemWrapper>
        ))}
      </MenuWrapper>
    </FocusTrap>
  );
};
