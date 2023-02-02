import { useContext } from 'react';
import CursorContext, { ICursorContext } from '@/contexts/CursorContext';

export default () => useContext<ICursorContext>(CursorContext);
