import type { PayloadAction } from '@reduxjs/toolkit';
import {
  takeEvery,
  put,
  all,
} from 'redux-saga/effects';
import type { SettingsLoaded } from '#domain/entity/config/events/settingsLoadedEvent';
import settingsLoadedEvent from '#domain/entity/config/events/settingsLoadedEvent';
import { map } from 'lodash/fp';
import storySetAdded from '../events/storySetAddedEvent';

function* settingsLoadedInvocation(
  { payload }: PayloadAction<SettingsLoaded>,
) {
  yield all(map(
    (storySet) => put(storySetAdded(storySet)),
    payload.workspace.storySets,
  ));
}

export default function* repoSettingsLoadedSaga() {
  yield takeEvery(settingsLoadedEvent.type, settingsLoadedInvocation);
}
