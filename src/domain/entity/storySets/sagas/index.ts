import { all } from 'redux-saga/effects';
import applyStorySetSaga from './applyStorySetSaga';
import storySetSettingsLoadedSaga from './storySetSettingsLoadedSaga';

export default function* storySetSagas() {
  yield all([
    applyStorySetSaga(),
    storySetSettingsLoadedSaga(),
  ]);
}
