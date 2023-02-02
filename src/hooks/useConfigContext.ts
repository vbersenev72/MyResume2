import { useContext } from 'react';
import ConfigContext, { IConfigContext } from '@/contexts/ConfigContext';

export default () => useContext<IConfigContext>(ConfigContext);
