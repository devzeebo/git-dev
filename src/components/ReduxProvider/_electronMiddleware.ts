import type { Middleware, PayloadAction } from '@reduxjs/toolkit';
import type { WindowDispatchEvent } from 'preload';

const ElectronIpcMiddleware: Middleware = (store) => {
  window.addEventListener('dispatch', (event: Event) => {
    const dispatchEvent = event as WindowDispatchEvent<any>;

    store.dispatch({
      ...dispatchEvent.detail,
      source: 'electron',
    });
  });

  return (next) => (action: PayloadAction) => {
    const result = next(action);

    // @ts-ignore
    if (action.source !== 'electron') {
      window.postMessage(JSON.parse(JSON.stringify(action)));
    }

    return result;
  };
};

export default ElectronIpcMiddleware;
