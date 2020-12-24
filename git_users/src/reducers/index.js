import { combineReducers } from 'redux';

import repos from './Repo.Reducer';
import user from './User.Reducer';

const rootReducer = combineReducers({
	repos,
	user
});

export default rootReducer;