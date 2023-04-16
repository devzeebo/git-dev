import type { StorySet } from '#domain/entity/storySets/models/StorySet';
import { createAction } from '@reduxjs/toolkit';

export type ApplyStorySet = {
  storySet: StorySet,
};
export default createAction<ApplyStorySet>('dashboard/apply-storyset');
