import { createAction } from '@reduxjs/toolkit';
import type { StorySet } from '../models/StorySet';

export default createAction<StorySet>('story-set/added');
