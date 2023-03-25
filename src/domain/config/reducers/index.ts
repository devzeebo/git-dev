import { createReducer } from '@reduxjs/toolkit';
import settingsLoadedEvent from '../events/settingsLoadedEvent';
import configSettingsLoadedReducer from './configSettingsLoadedReducer';
import type { State } from './State';

const initialState: State = {
  settings: {
    label: '',
  },
};

export default createReducer(
  initialState,
  (builder) => {
    builder.addCase(settingsLoadedEvent, configSettingsLoadedReducer);
  },
);
