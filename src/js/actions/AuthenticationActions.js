import axios from "axios";
import {toast} from "react-toastify";

export const AuthenticationActions = {
    "AUTH_LOGIN": "AUTH_LOGIN",
    "AUTH_LOGOUT": "AUTH_LOGOUT",
    "AUTH_REGISTER": "AUTH_REGISTER"
};

export const register = (creds) => {
    return {
        type: AuthenticationActions.AUTH_REGISTER,
        payload: axios
            .post("/api/signup", creds)
            .then(response => {
                return response.data;
            })
            .catch(err => {
                toast.error(err.response.data.message);
            })
    };
};

export const sendLogin = (creds) => {
    return {
        type: AuthenticationActions.AUTH_LOGIN,
        payload: axios
            .post("/api/auth", creds)
            .then(response => {
                return response.data;
            })
            .catch(err => {
                toast.error(err.response.data.message);
            })
    };
};

export const logout = () => {
    return {
        type: AuthenticationActions.AUTH_LOGOUT
    };
};