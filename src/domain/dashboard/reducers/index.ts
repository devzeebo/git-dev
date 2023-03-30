import { createReducer } from '@reduxjs/toolkit';
import storySetAppliedEvent from '../events/storySetAppliedEvent';
import dashboardStorySetAppliedReducer from './dashboardStorySetAppliedReducer';
import type { State } from './State';

const initialState: State = {
  activeRepositories: null,
  storySet: null,
};

export default createReducer(
  initialState,
  (builder) => {
    builder.addCase(storySetAppliedEvent, dashboardStorySetAppliedReducer);
  },
);
