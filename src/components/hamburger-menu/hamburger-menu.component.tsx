import { FC, useState, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import {
  HamburgerContainer,
  HamburgerIcon,
  MenuOverlay,
  MenuContent,
  MenuItem,
  MenuLink,
  SignOutButton,
} from './hamburger-menu.styles';

const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const signOutUser = () => {
    dispatch(signOutStart());
    closeMenu();
  };

  return (
    <HamburgerContainer>
      <HamburgerIcon onClick={toggleMenu} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>

      {isOpen && (
        <MenuOverlay onClick={closeMenu}>
          <MenuContent onClick={(e: MouseEvent) => e.stopPropagation()}>
            {currentUser ? (
              <>
                <MenuItem>
                  <MenuLink as={Link} to="/account" onClick={closeMenu}>
                    Account
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink as={Link} to="/orders" onClick={closeMenu}>
                    My Orders
                  </MenuLink>
                </MenuItem>
              </>
            ) : null}
            
            <MenuItem>
              <MenuLink as={Link} to="/contact" onClick={closeMenu}>
                Contact Us
              </MenuLink>
            </MenuItem>
            
            <MenuItem>
              <MenuLink as={Link} to="/faq" onClick={closeMenu}>
                FAQ
              </MenuLink>
            </MenuItem>
            
            <MenuItem>
              <MenuLink as={Link} to="/size-guide" onClick={closeMenu}>
                Size Guide
              </MenuLink>
            </MenuItem>
            
            {currentUser ? (
              <MenuItem>
                <SignOutButton onClick={signOutUser}>
                  Sign Out
                </SignOutButton>
              </MenuItem>
            ) : (
              <MenuItem>
                <MenuLink as={Link} to="/auth" onClick={closeMenu}>
                  Sign In
                </MenuLink>
              </MenuItem>
            )}
          </MenuContent>
        </MenuOverlay>
      )}
    </HamburgerContainer>
  );
};

export default HamburgerMenu;
