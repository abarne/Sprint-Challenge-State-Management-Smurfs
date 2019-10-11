import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, START_POSTING, POST_SUCCESS, POST_FAILURE } from '../actions';

const initialState = {
	isFetching: false,
	error: '',
	smurfs: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCH_SUCCESS:
			console.log('fetch success payload', action.payload);
			return {
				...state,
				isFetching: false,
				error: '',
				smurfs: action.payload
			};
		case FETCH_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
