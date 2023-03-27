import type { PayloadAction } from '@reduxjs/toolkit';
import type { RepositoryStarted } from '../events/repositoryStartedEvent';
import type { State } from './State';

export default (
  state: State,
  { payload }: PayloadAction<RepositoryStarted>,
) => {
  state.repos[payload.repository].pid = payload.pid;
};
