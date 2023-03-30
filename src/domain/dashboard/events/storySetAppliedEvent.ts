import type { StorySet } from '#domain/storySets/models/StorySet';
import { createAction } from '@reduxjs/toolkit';

export type StorySetApplied = {
  storySet: StorySet,
};
export default createAction<StorySetApplied>('dashboard/storyset-applied');
