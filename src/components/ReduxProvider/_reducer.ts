import { combineReducers } from 'redux';
import config from '#domain/config/reducers';
import repos from '#domain/repos/reducers';
import dashboard from '#domain/dashboard/reducers';

export default combineReducers({
  config,
  repos,
  dashboard,
});
