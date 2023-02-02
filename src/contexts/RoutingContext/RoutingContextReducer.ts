import { IRoutingContext } from './RoutingContext';

export type Action<T = any> = {
  type: string;
  payload?: T;
};

export const setCurrentPage = (
  page: IRoutingContext['state']['currentPage'],
) => ({
  type: 'SET_PAGE',
  payload: page,
});

export const RoutingContextReducer = (
  state: IRoutingContext['state'],
  action: Action,
): typeof state => {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
  }
  throw new Error('Unknown action type.');
};
