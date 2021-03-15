

const defaultState = {
    movies: [],
    users: [],
    isLoggedIn: false,
    account: null
}

export default function moviesReducer (state = defaultState, action) {
    if (action.type === 'ADD_MOVIES') {
        return (
            {
               ...state,
               movies: [action.payload, ...state.movies]
            }
        );
    }

    if (action.type === 'CHANGE_MOVIES') {
        return (
            {
                ...state,
                movies: action.payload
            }
        );
    }

    if (action.type === 'LOG_OFF' || action.type === 'LOG_IN') {
        return (
            {
                ...state,
                isLoggedIn: action.payload
            }
        );
    }

    if (action.type === 'ADD_USER') {
        return (
            {
                ...state,
                users: [action.payload, ...state.users]
            }
        );
    }

    if (action.type === 'UPDATE_ACCOUNT') {
        return (
            {
                ...state,
                account: action.payload
            }
        );
    }


    return state;
}