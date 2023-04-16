import { combineReducers } from 'redux';
import config from '#domain/entity/config/reducers';
import repos from '#domain/entity/repos/reducers';
import dashboard from '#domain/app/dashboard/reducers';

export default combineReducers({
  config,
  repos,
  dashboard,
});
