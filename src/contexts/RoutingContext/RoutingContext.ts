import { Pages } from '@/components/Routing';
import { Action } from './RoutingContextReducer';
import React, { createContext } from 'react';

export interface IRoutingContext {
  state: {
    currentPage: keyof typeof Pages;
  };
  dispatch: (action: Action) => void | React.Dispatch<Action>;
}

export const initialState: IRoutingContext = {
  state: {
    currentPage: import.meta.env.DEV ? 'AboutPage' : 'IntroPage',
  },
  dispatch: () => {},
};

const RoutingContext = createContext<IRoutingContext>(initialState);

export default RoutingContext;
