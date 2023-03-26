import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import ElectronIpcMiddleware from './_electronMiddleware';
import reducer from './_reducer';
import sagas from './_sagas';

export type ApplicationState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: (gdm) => [
    ...gdm(),
    ElectronIpcMiddleware,
    sagaMiddleware,
  ],
});

sagaMiddleware.run(sagas);

export default store;
