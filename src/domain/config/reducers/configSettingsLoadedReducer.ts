import type { PayloadAction } from '@reduxjs/toolkit';
import type { SettingsLoaded } from '../events/settingsLoadedEvent';
import type { State } from './State';

export default (
  state: State,
  { payload }: PayloadAction<SettingsLoaded>,
) => {
  state.settings.label = payload.label;
};
