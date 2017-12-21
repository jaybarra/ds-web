import axios from "axios";

export const AuthenticationActions = {
    "AUTH_LOGIN": "AUTH_LOGIN",
    "AUTH_LOGOUT": "AUTH_LOGOUT"
};

export const sendLogin = (creds) => {
    return {
        type: AuthenticationActions.AUTH_LOGIN,
        payload: axios
            .post("/api/auth", creds)
            .then(response => {
                return response.data.token;
            })
    };
};

export const logout = () => {
    return {
        type: AuthenticationActions.AUTH_LOGOUT
    };
};