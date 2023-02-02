import React, { PropsWithChildren } from 'react';
import cl from './BasicPage.module.scss';

const BasicPage: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className={cl.basicPage}>{children}</main>;
};

export default BasicPage;
