import type { PayloadAction } from '@reduxjs/toolkit';
import type { Repository } from '../models/Repository';
import type { State } from './State';

export default (
  state: State,
  { payload }: PayloadAction<Repository>,
) => {
  state.repos[payload.name] = payload;
  state.repos[payload.name].currentBranch = '';
};
