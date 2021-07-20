import { combineReducers } from 'redux';
import manageQuotes from './quotes';

const rootReducer = combineReducers({
  quotes: manageQuotes,
});

export default rootReducer;