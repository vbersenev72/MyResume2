import React, { FC, useCallback } from 'react';
import cl from './NavDesktop.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import useMatch from '@/hooks/useMatch';
import useConfigContext from '@/hooks/useConfigContext';
import { updateConfig } from '@/contexts/ConfigContext';
import MouseHover from '@/components/MouseHover';
import { links } from '@/components/Nav/data';
import useNavigate from '@/hooks/useNavigate';
import useRoutingContext from '@/hooks/useRoutingContext';

interface INavLink {
  link: ArrayElement<typeof links>;
}

const NavLink: FC<INavLink> = ({ link }) => {
  const navigate = useNavigate();
  const {
    state: { currentPage },
  } = useRoutingContext();

  return (
    <MouseHover onClick={() => navigate(link.href)} className={cl.link}>
      <p data-active={link.href === currentPage}>{link.text}</p>
      {link.href === currentPage && (
        <motion.div layoutId={'navline'} className={cl.navline} />
      )}
    </MouseHover>
  );
};

const NavDesktop = () => {
  const isMatch = useMatch('IntroPage');
  const { dispatch } = useConfigContext();

  const openDevToolsModal = useCallback(() => {
    dispatch(updateConfig({ devToolsModal: true }));
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isMatch && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={cl.navContainer}
          >
            {links.map((link, key) => (
              <NavLink link={link} key={key} />
            ))}
            <MouseHover text={'Hmmm...'}>
              <button className={cl.devToolsButton} onClick={openDevToolsModal}>
                .
              </button>
            </MouseHover>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavDesktop;
