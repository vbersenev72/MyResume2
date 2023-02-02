import React, { FC, PropsWithChildren, useReducer } from 'react';
import CursorContext, { initialState } from './CursorContext';
import { CursorContextReducer } from './CursorContextReducer';

export const CursorContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    CursorContextReducer,
    initialState.state,
  );

  return (
    <CursorContext.Provider value={{ state, dispatch }}>
      {children}
    </CursorContext.Provider>
  );
};
