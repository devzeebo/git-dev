import type { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, call } from 'redux-saga/effects';
import { take } from 'typed-redux-saga';
import type { AllowedGitCommands } from '../models/AllowedCommands';
import type { GitCommand } from '../events/gitCommand';
import gitCommand from '../events/gitCommand';
import type { GitResponse } from '../events/gitResponseEvent';
import gitResponse from '../events/gitResponseEvent';

function* gitSagaInvocation<T extends AllowedGitCommands>(
  { payload }: PayloadAction<GitCommand<T>>,
) {
  const {
    meta: { resolve },
  } = payload;

  const { payload: resultPayload } = yield* take<PayloadAction<GitResponse<T>>>(gitResponse.type);

  yield call(resolve, resultPayload);
}

export default function* gitSaga() {
  yield takeEvery(gitCommand.type, gitSagaInvocation);
}
