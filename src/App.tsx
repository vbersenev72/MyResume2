import React, { useEffect } from 'react';
import Routing from '@/components/Routing';
import Cursor from '@/components/Cursor';
import DevToolsModal from '@/components/DevToolsModal';
import useConfigContext from '@/hooks/useConfigContext';
import useMatchMedia from '@/hooks/useMatchMedia';
import { updateConfig } from '@/contexts/ConfigContext';

// TODO
// add global site loader

const App = () => {
  const { dispatch } = useConfigContext();
  const isMobile = useMatchMedia('(max-width: 850px)');

  useEffect(() => {
    dispatch(updateConfig({ showCustomCursor: !isMobile }));
  }, [isMobile]);

  return (
    <>
      <Cursor />
      <Routing />
      <DevToolsModal />
    </>
  );
};

export default App;
