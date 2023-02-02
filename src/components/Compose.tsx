import React, { FC, JSXElementConstructor, PropsWithChildren } from 'react';

interface IContextsProviders {
  components: JSXElementConstructor<PropsWithChildren<unknown>>[];
}

const Compose: FC<PropsWithChildren<IContextsProviders>> = ({
  children,
  components,
}) => {
  return (
    <>
      {components.reduceRight(
        (acc, Comp) => (
          <Comp>{acc}</Comp>
        ),
        children,
      )}
    </>
    // <RoutingContextProvider>
    //   <ConfigContextProvider>
    //     <CursorContextProvider>{children}</CursorContextProvider>
    //   </ConfigContextProvider>
    // </RoutingContextProvider>
  );
};

export default Compose;
