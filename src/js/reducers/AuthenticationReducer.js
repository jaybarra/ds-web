import {AuthenticationActions} from "../actions/AuthenticationActions";

const initial = {
    isAuthenticated: !!localStorage.getItem("jwt"),
    jwt: localStorage.getItem("jwt"),
    fetching: false
};

export const AuthenticationReducer = (state = initial, action) => {
    switch (action.type) {
        case `${AuthenticationActions.AUTH_LOGIN}_PENDING`:
            return {
                ...state,
                fetching: true
            };
        case `${AuthenticationActions.AUTH_LOGIN}_REJECTED`:
            return {
                ...state,
                jwt: null,
                fetching: false,
                isAuthenticated: false
            };
        case `${AuthenticationActions.AUTH_LOGIN}_FULFILLED`:
            localStorage.setItem("jwt", action.payload);
            return {
                ...state,
                fetching: false,
                isAuthenticated: true,
                jwt: action.payload
            };
        case AuthenticationActions.AUTH_LOGOUT:
            localStorage.setItem("jwt", "");
            return {
                ...state,
                jwt: null,
                fetching: false,
                isAuthenticated: false
            };
    }

    return {...state};
};