import { all } from 'redux-saga/effects';
import gitSaga from './gitSaga';
import repoSettingsLoadedSaga from './repoSettingsLoadedSaga';
import repoRepositoryAddedSaga from './repoRepositoryAddedSaga';

export default function* repoSagas() {
  yield all([
    gitSaga(),
    repoSettingsLoadedSaga(),
    repoRepositoryAddedSaga(),
  ]);
}
