import type { PayloadAction } from '@reduxjs/toolkit';
import type { GitResponse } from '../events/gitResponse';
import type { State } from './State';

export default (
  state: State,
  { payload }: PayloadAction<GitResponse<'status'>>,
) => {
  if (payload.command === 'status') {
    state.repos[payload.repository.name].status = payload.result;
  }
};
