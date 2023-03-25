import { configureStore } from '@reduxjs/toolkit';
import ElectronIpcMiddleware from './_electronMiddleware';
import reducer from './_reducer';

export type ApplicationState = ReturnType<typeof reducer>;

export default configureStore({
  reducer,
  middleware: (gdm) => [
    ...gdm(),
    ElectronIpcMiddleware,
  ],
});
