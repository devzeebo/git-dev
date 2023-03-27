import type { PayloadAction } from '@reduxjs/toolkit';
import {
  takeEvery,
  put,
  all,
} from 'redux-saga/effects';
import type { SettingsLoaded } from '#domain/config/events/settingsLoadedEvent';
import settingsLoadedEvent from '#domain/config/events/settingsLoadedEvent';
import { map } from 'lodash/fp';
import repositoryAdded from '../events/repositoryAddedEvent';

function* settingsLoadedInvocation(
  { payload }: PayloadAction<SettingsLoaded>,
) {
  console.log('sls', payload);
  yield all(map(
    (repo) => put(repositoryAdded(repo)),
    payload.repos,
  ));
}

export default function* repoSettingsLoadedSaga() {
  console.log('rsls');
  yield takeEvery(settingsLoadedEvent.type, settingsLoadedInvocation);
}
