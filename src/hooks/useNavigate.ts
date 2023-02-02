import { Pages } from '@/components/Routing';
import { setCurrentPage } from '@/contexts/RoutingContext';
import useRoutingContext from '@/hooks/useRoutingContext';

export default () => {
  const { dispatch } = useRoutingContext();

  return (page: keyof typeof Pages) => {
    dispatch(setCurrentPage(page));
  };
};
