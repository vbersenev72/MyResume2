---
to: <%= path %>/<%= componentName %>.tsx
---
import React from 'react';
import cl from './<%= componentName %>.module.scss';

interface I<%= componentName %> {

}

const <%= componentName %>: React.FC<I<%= componentName %>> = () => {
  return (
    <>

    </>
  );
};

export default <%= componentName %>;