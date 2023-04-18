import { createEntityAdapter, createReducer } from '@reduxjs/toolkit';
import type { ApplicationState } from '#components/ReduxProvider/_store';
import storySetAddedEvent from '../events/storySetAddedEvent';
import type { StorySet } from '../models/StorySet';

export const StorySetAdapter = createEntityAdapter<StorySet>({
  selectId: (ss) => ss.name,
});

export const StorySetSelectors = StorySetAdapter.getSelectors((x: ApplicationState) => x.storySets);

export default createReducer(
  StorySetAdapter.getInitialState(),
  (builder) => {
    builder.addCase(storySetAddedEvent, StorySetAdapter.upsertOne);
  },
);
