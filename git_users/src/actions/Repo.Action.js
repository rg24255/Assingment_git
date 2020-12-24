import {FETCH_REPOS_SUCCESS} from '../constants';

export function fetchReposSuccess(repos) {
	return {
		type: FETCH_REPOS_SUCCESS,
		repos
	};
}

export function fetchRepos(user) {
	return function(dispatch) {
		return axios
			.get(`https://api.github.com/users/${user}/repos`)
			.then(repos => {
				dispatch(fetchReposSuccess(repos.data));
			})
			.catch(err => {
				throw err;
			});
	};
}