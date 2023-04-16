import type { StorySet } from '#domain/entity/storySets/models/StorySet';

export type State = {
  activeRepositories: string[] | null,
  storySet: StorySet | null,
};
