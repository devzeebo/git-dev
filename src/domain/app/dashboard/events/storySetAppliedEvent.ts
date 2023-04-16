import type { StorySet } from '#domain/entity/storySets/models/StorySet';
import { createAction } from '@reduxjs/toolkit';

export type StorySetApplied = {
  storySet: StorySet,
};
export default createAction<StorySetApplied>('dashboard/storyset-applied');
