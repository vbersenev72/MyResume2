import { useCallback, useState } from 'react';

export default (
  initialState: boolean,
): [typeof initialState, (newState?: typeof initialState) => void] => {
  const [state, setState] = useState<typeof initialState>(initialState);

  const changeState = useCallback(
    (newState?: typeof initialState) => {
      setState(newState ?? !state);
    },
    [state],
  );

  return [state, changeState];
};
