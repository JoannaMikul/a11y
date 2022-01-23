import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Navigation, NavContent, Logo } from './NavigationBar.styles';
import { IconButton } from '../IconButton';
import { Menu } from '../Menu';
import { useIsDesktop } from '../../queryHooks/useBreakpoints';
import logo from '../../assets/logo.png';

export const NavigationBar = () => {
  const isDesktop = useIsDesktop();
  const [isOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isOpen);
  };

  return (
    <Navigation>
      <NavContent>
        <Logo to='/' aria-label='go to homepage'>
          <img alt='JM insurer' src={logo} />
        </Logo>

        {isDesktop ? (
          <Menu />
        ) : (
          <>
            <IconButton onClick={handleMenuToggle} ariaLabel='Menu'>
              {isOpen ? (
                <FontAwesomeIcon aria-label='Close menu' icon={faTimes} size='2x' />
              ) : (
                <FontAwesomeIcon aria-label='Open menu' icon={faBars} size='2x' />
              )}
            </IconButton>
            {isOpen && <Menu onClick={() => setMenuOpen(false)} />}
          </>
        )}
      </NavContent>
    </Navigation>
  );
};
