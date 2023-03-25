import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from './_store';

export type ReduxProviderProps = PropsWithChildren<{}>;

const ReduxProvider = ({
  children,
}: ReduxProviderProps) => {
  useEffect(
    () => {
      window.postMessage({ type: 'init' });
    },
    [],
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
