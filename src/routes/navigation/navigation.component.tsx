import { Fragment, useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import Footer from '../../components/footer/footer.component';
import HamburgerMenu from '../../components/hamburger-menu/hamburger-menu.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';
import { setIsCartOpen } from '../../store/cart/cart.action';

import CrownLogo from '../../assets/crwn.png';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const signOutUser = () => dispatch(signOutStart());

  // Close cart dropdown when location changes
  useEffect(() => {
    if (isCartOpen) {
      dispatch(setIsCartOpen(false));
    }
  }, [location.pathname, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isCartOpen &&
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target as Node)
      ) {
        dispatch(setIsCartOpen(false));
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, dispatch]);

  return (
    <Fragment>
      <NavigationContainer>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <HamburgerMenu />
          <LogoContainer to='/'>
            <img src={CrownLogo} className='logo' alt='Crown Clothing Logo' />
          </LogoContainer>
        </div>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <Fragment>
              <NavLink to='/orders'>MY ORDERS</NavLink>
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            </Fragment>
          ) : (
            <NavLink to='/sign-in'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown ref={cartDropdownRef} />}
      </NavigationContainer>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
