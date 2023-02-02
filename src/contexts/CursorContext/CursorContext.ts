import { Action } from './CursorContextReducer';
import React, { createContext, MutableRefObject } from 'react';

export interface ICursorContext {
  state: {
    id: number;
    text?: string;
    position?: 'top' | 'left' | 'right' | 'bottom';
    ref: MutableRefObject<null | HTMLElement>;
  }[];
  dispatch: (action: Action) => void | React.Dispatch<Action>;
}

export type CursorItemProps = Omit<
  ArrayElement<ICursorContext['state']>,
  'ref'
>;

export const initialState: ICursorContext = {
  state: [],
  dispatch: () => {},
};

const CursorContext = createContext<ICursorContext>(initialState);

export default CursorContext;
