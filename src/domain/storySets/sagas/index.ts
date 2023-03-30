import { all } from 'redux-saga/effects';
import applyStorySetSaga from './applyStorySetSaga';

export default function* storySetSagas() {
  yield all([
    applyStorySetSaga(),
  ]);
}
