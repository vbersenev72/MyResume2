import { useContext } from 'react';
import RoutingContext, { IRoutingContext } from '@/contexts/RoutingContext';

export default () => useContext<IRoutingContext>(RoutingContext);
