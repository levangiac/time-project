/// Imports: Dependencies
import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import IPAReducer from './ipa-reducer';
/// Redux: Root Reducer
const rootReducer = combineReducers({
  userReducer,
});
// Exports
export default rootReducer;
