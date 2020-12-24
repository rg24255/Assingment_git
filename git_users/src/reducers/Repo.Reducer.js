import { FETCH_REPOS_SUCCESS } from "../constants";
const initialState = { repos:[] };


export default function reposReducer(state = initialState.repos, action) {
	switch (action.type) {
		case FETCH_REPOS_SUCCESS: {
			return action.repos;
		}
		default:
			return state;
	}
}