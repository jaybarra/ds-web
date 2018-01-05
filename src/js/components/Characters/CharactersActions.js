import axios from "axios";
import {toast} from "react-toastify";

export const CharactersActions = {
    "CHARACTERS_GET": "CHARACTERS_GET",
    "CHARACTERS_FETCH": "CHARACTERS_FETCH"
};

export const getCharacters = () => {
    return (dispatch, getState) => {
        let state = getState();
        return {
            type: CharactersActions.CHARACTERS_FETCH,
            payload: axios
                .get("/api/character", {
                    headers: {
                        "jwt": state.auth.jwt
                    }
                })
                .then(response => {
                    dispatch({
                        type: "CHARACTERS_GET_FULFILLED",
                        payload: response.data
                    });
                    return response.data;
                })
                .catch(err => {
                    toast.error(err.message);
                })

        };
    };
};