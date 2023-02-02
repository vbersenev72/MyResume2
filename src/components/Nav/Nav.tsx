import React from 'react';
import NavDesktop from '@/components/Nav/NavDesktop';
import useMatchMedia from '@/hooks/useMatchMedia';
import NavMobile from '@/components/Nav/NavMobile';

const Nav = () => {
  const isMobile = useMatchMedia(`(max-width: ${800}px)`);

  return isMobile ? <NavMobile /> : <NavDesktop />;
};

export default Nav;
