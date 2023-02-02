import { IConfigContext } from './ConfigContext';

export type Action<T = any> = {
  type: string;
  payload?: T;
};

export const updateConfig = (payload: Partial<IConfigContext['state']>) => ({
  type: 'UPDATE_CONFIG',
  payload,
});

export const ConfigContextReducer = (
  state: IConfigContext['state'],
  action: Action,
): typeof state => {
  switch (action.type) {
    case 'UPDATE_CONFIG':
      return { ...state, ...action.payload };
  }
  throw new Error('Unknown action type.');
};
