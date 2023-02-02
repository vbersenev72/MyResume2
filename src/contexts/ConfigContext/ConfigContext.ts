import { Action } from './ConfigContextReducer';
import React, { createContext } from 'react';

export interface IConfigContext {
  state: {
    showCursor: boolean;
    showCustomCursor: boolean;
    transitionBetweenPages: boolean;
    devToolsModal: boolean;
  };
  dispatch: (action: Action) => void | React.Dispatch<Action>;
}

export const initialState: IConfigContext = {
  state: {
    showCursor: import.meta.env.DEV,
    showCustomCursor: true,
    transitionBetweenPages: true,
    devToolsModal: false,
  },
  dispatch: () => {},
};

const ConfigContext = createContext<IConfigContext>(initialState);

export default ConfigContext;
