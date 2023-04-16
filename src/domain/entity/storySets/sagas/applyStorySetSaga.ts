import type { ApplicationState } from '#components/ReduxProvider/_store';
import type { ApplyStorySet } from '#domain/app/dashboard/events/applyStorysetCommand';
import applyStorysetCommand from '#domain/app/dashboard/events/applyStorysetCommand';
import gitCommand from '#domain/entity/repos/events/gitCommand';
import type { Repository } from '#domain/entity/repos/models/Repository';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  flow,
  isString,
  map,
} from 'lodash/fp';
import {
  call,
  takeEvery,
} from 'redux-saga/effects';
import {
  all,
  select,
  putResolve,
} from 'typed-redux-saga';

type DesiredRepoState = {
  repo: Repository,
  branchName: string,
};

function* checkoutBranch({ repo, branchName }: DesiredRepoState) {
  yield* putResolve(gitCommand(repo, 'checkout', branchName));
  yield* putResolve(gitCommand(repo, 'status'));
}

function* applyStorySet(
  { payload }: PayloadAction<ApplyStorySet>,
) {
  const repos = yield* select((state: ApplicationState) => state.repos.repos);

  const storySetRepos: DesiredRepoState[] = flow(
    map((repo) => (isString(repo)
      ? { repo, branchName: payload.storySet.branchName }
      : repo)),
    map(({ repo, branchName }: { repo: string, branchName: string }) => ({
      repo: repos[repo],
      branchName,
    })),
  )(payload.storySet.repositories);

  yield* all(map(
    (repo) => call(checkoutBranch, repo),
    storySetRepos,
  ));

  yield* all(map(
    storySetRepos,
  ));
}

export default function* applyStorySetSaga() {
  yield takeEvery(applyStorysetCommand.type, applyStorySet);
}
