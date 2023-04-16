import type { Repository } from '#domain/entity/repos/models/Repository';
import type { StorySet } from '#domain/entity/storySets/models/StorySet';

export type Workspace = {
  repos: Repository[],
  storySets: StorySet[],
};
