// Simplified version of https://www.npmjs.com/package/redux-api-middleware
// Use your own middleware for the communication with API

export const RSAA = '@apiMiddleware/RSAA';

export const api = ({ dispatch }) => (next) => (action) => {
	if (action[RSAA]) {
		const {
			url,
			data,
			types = [],
			headers = {},
			method = 'GET',
			mapPayload = x => x,
			...rest
		} = action[RSAA];

		dispatch({ type: types[0] });

		return fetch(url, {
			method,
			...(data ? { body: JSON.stringify(data) } : {}),
			headers: {
				...(data ? {'content-type': 'application/json'} : {}),
				...headers,
			},
			...rest,
		}).then(res => res.json())
			.catch(error => dispatch({ type: types[2], payload: error}))
			.then(json => dispatch({ type: types[1], payload: mapPayload(json)}));
	}

	return next(action);
};
