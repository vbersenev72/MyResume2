import { Pages } from '@/components/Routing';
import useRoutingContext from '@/hooks/useRoutingContext';
import { useMemo } from 'react';

export default (page?: keyof typeof Pages | (keyof typeof Pages)[]) => {
  const { currentPage } = useRoutingContext().state;

  return useMemo(
    () =>
      Array.isArray(page) ? page.includes(currentPage) : currentPage === page,
    [currentPage],
  );
};
