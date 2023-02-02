import React, { FC, PropsWithChildren, useReducer } from 'react';
import RoutingContext, { initialState } from './RoutingContext';
import { RoutingContextReducer } from './RoutingContextReducer';

export const RoutingContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    RoutingContextReducer,
    initialState.state,
  );

  return (
    <RoutingContext.Provider value={{ state, dispatch }}>
      {children}
    </RoutingContext.Provider>
  );
};
