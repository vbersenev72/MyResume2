import { IConfigContext, updateConfig } from '@/contexts/ConfigContext';
import { ChangeEvent, useCallback } from 'react';
import useConfigContext from '@/hooks/useConfigContext';

export default function useConfigInput<T extends keyof IConfigContext['state']>(
  key: T,
): [
  IConfigContext['state'][T],
  (e: ChangeEvent<HTMLInputElement>) => void,
  (newValue: IConfigContext['state'][T]) => void,
] {
  const {
    dispatch,
    state: { [key]: state },
  } = useConfigContext();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue =
        typeof state === 'boolean' ? e.target.checked : e.target.value;
      dispatch(updateConfig({ [key]: newValue }));
    },
    [state],
  );

  const setState = useCallback(
    (newValue: IConfigContext['state'][T]) => {
      dispatch(updateConfig({ [key]: newValue }));
    },
    [state],
  );

  return [state, onChange, setState];
}
