import {AuthenticationActions} from "../actions/AuthenticationActions";

const initial = {
    isAuthenticated: !!sessionStorage.getItem("jwt"), // TODO don't use this, could be expired, replace
    jwt: sessionStorage.getItem("jwt"),
    fetching: false,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
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
        case `${AuthenticationActions.AUTH_REGISTER}_FULFILLED`:
        case `${AuthenticationActions.AUTH_LOGIN}_FULFILLED`:
            sessionStorage.setItem("jwt", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            return {
                ...state,
                fetching: false,
                isAuthenticated: true,
                jwt: action.payload.token,
                user: action.payload.user
            };
        case `${AuthenticationActions.AUTH_REGISTER}_PENDING`:
            return {
                ...state,
                fetching: true,
                isAuthenticated: false
            };
        case `${AuthenticationActions.AUTH_REGISTER}_REJECTED`:
            return {
                ...state,
                fetching: false,
                isAuthenticated: false
            };

        case AuthenticationActions.AUTH_LOGOUT:
            sessionStorage.removeItem("jwt");
            localStorage.removeItem("user");
            return {
                ...state,
                jwt: null,
                fetching: false,
                isAuthenticated: false
            };
    }

    return {...state};
};