import type { PayloadAction } from '@reduxjs/toolkit';
import {
  takeEvery,
  put,
} from 'redux-saga/effects';
import repositoryAdded from '../events/repositoryAddedEvent';
import type { Repository } from '../models/Repository';
import gitCommand from '../events/gitCommand';

function* repositoryAddedInvocation(
  { payload }: PayloadAction<Repository>,
) {
  yield put(gitCommand(payload, 'status'));
}

export default function* gitSaga() {
  yield takeEvery(repositoryAdded.type, repositoryAddedInvocation);
}
