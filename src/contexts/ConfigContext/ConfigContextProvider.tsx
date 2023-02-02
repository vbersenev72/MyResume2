import React, { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import ConfigContext, { initialState } from './ConfigContext';
import { ConfigContextReducer } from './ConfigContextReducer';

export const ConfigContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    ConfigContextReducer,
    initialState.state,
  );
  const { showCursor } = state;

  useEffect(() => {
    document.body.setAttribute('data-cursor', showCursor + '');
  }, [showCursor]);

  return (
    <ConfigContext.Provider value={{ state, dispatch }}>
      {children}
    </ConfigContext.Provider>
  );
};
