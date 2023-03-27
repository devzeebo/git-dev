import type { PayloadAction } from '@reduxjs/toolkit';
import type { RepositoryStopped } from '../events/repositoryStoppedEvent';
import type { State } from './State';

export default (
  state: State,
  { payload }: PayloadAction<RepositoryStopped>,
) => {
  state.repos[payload.repository].pid = undefined;
};
