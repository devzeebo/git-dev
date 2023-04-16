import type { PayloadAction } from '@reduxjs/toolkit';
import {
  takeEvery,
  put,
  all,
} from 'redux-saga/effects';
import type { SettingsLoaded } from '#domain/entity/config/events/settingsLoadedEvent';
import settingsLoadedEvent from '#domain/entity/config/events/settingsLoadedEvent';
import { map } from 'lodash/fp';
import repositoryAdded from '../events/repositoryAddedEvent';

function* settingsLoadedInvocation(
  { payload }: PayloadAction<SettingsLoaded>,
) {
  yield all(map(
    (repo) => put(repositoryAdded(repo)),
    payload.workspace.repos,
  ));
}

export default function* repoSettingsLoadedSaga() {
  yield takeEvery(settingsLoadedEvent.type, settingsLoadedInvocation);
}
