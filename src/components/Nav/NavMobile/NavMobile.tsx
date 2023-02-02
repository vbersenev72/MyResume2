import React, { useState } from 'react';
import cl from './NavMobile.module.scss';
import { FaGripLines } from 'react-icons/all';
import { AnimatePresence, motion } from 'framer-motion';
import { links } from '@/components/Nav/data';
import useOutsideClick from '@/hooks/useOutsideClick';
import Link from '@/components/UI/Link';
import useRoutingContext from '@/hooks/useRoutingContext';
import useMatch from '@/hooks/useMatch';

const NavMobile = () => {
  const isMatch = useMatch('IntroPage');
  const [visible, setVisible] = useState<boolean>(false);
  const containerRef = useOutsideClick(() => {
    setVisible(false);
  });
  const {
    state: { currentPage },
  } = useRoutingContext();

  return (
    <>
      {!isMatch && (
        <nav
          data-visible={visible}
          ref={containerRef}
          className={cl.navContainer}
        >
          <button onClick={() => setVisible(!visible)} className={cl.navButton}>
            <FaGripLines />
          </button>
          <AnimatePresence>
            {visible && (
              <motion.div
                className={cl.navContent}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.6 }}
                onClick={() => setVisible(false)}
              >
                {links.map((link, key) => (
                  <Link
                    data-active={currentPage === link.href}
                    href={link.href}
                    key={key}
                    className={cl.link}
                  >
                    {link.text}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      )}
    </>
  );
};

export default NavMobile;
