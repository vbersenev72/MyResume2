import React, { FC, useEffect, useMemo } from 'react';
import IntroPage from '@/pages/IntroPage';
import AboutPage from '@/pages/AboutPage';
import ContactsPage from '@/pages/ContactsPage';
import { AnimatePresence } from 'framer-motion';
import useRoutingContext from '@/hooks/useRoutingContext';
import Nav from '@/components/Nav';
import BasicPage from '@/components/BasicPage';
import ProjectsPage from '@/pages/ProjectsPage';
import useConfigContext from '@/hooks/useConfigContext';
import NotFoundPage from '@/pages/NotFoundPage';

export const Pages: Record<string, FC> = {
  IntroPage,
  AboutPage,
  ProjectsPage,
  ContactsPage,
};

const Routing = () => {
  const { currentPage } = useRoutingContext().state;
  const { transitionBetweenPages } = useConfigContext().state;

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('CURRENT PAGE:', currentPage);
    }
  }, [currentPage]);

  const Page = useMemo(() => Pages[currentPage] ?? NotFoundPage, [currentPage]);

  return (
    <BasicPage>
      <Nav />
      {transitionBetweenPages ? (
        <AnimatePresence mode={'wait'}>
          <Page key={currentPage} />
        </AnimatePresence>
      ) : (
        <Page />
      )}
    </BasicPage>
  );
};
0;

export default Routing;
