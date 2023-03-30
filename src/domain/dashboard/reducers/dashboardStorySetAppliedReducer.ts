import type { PayloadAction } from '@reduxjs/toolkit';
import { isString, map } from 'lodash/fp';
import type { StorySetApplied } from '../events/storySetAppliedEvent';
import type { State } from './State';

export default (
  state: State,
  { payload }: PayloadAction<StorySetApplied>,
) => {
  state.storySet = payload.storySet;
  state.activeRepositories = map(
    (repo) => (isString(repo) ? repo : repo.name),
    payload.storySet.repositories,
  );
};
