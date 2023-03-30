import type { StorySet } from '#domain/storySets/models/StorySet';
import { createAction } from '@reduxjs/toolkit';

export type ApplyStorySet = {
  storySet: StorySet,
};
export default createAction<ApplyStorySet>('dashboard/apply-storyset');
