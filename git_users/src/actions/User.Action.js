import {FETCH_USER_SUCCESS} from '../constants';

export function fetchUser(user) {
	return {
		type: FETCH_USER_SUCCESS,
		user
	};
}